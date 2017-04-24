/**
 * Created by Jikai Zhang on 2017/4/23.
 */
(function () {


    var startTag = "<!-- start -->";
    var startPattern = /<!--\s*start\s*-->/;
    var moreTag = "<!-- more -->";
    var morePattern = /<!--\s*more\s*-->/;
    var configText = "config";

    function Project() {
        this.id = 0;
        this.hasShortIntro = true;
        this.hasGithub = true;
        this.hasHome = true;
        this.hasCode = true;
        this.name = "";
        this.content = "";
        this.shortIntro = "";
        this.tags = [];
        this.category = "";
        this.home = "";
        this.code = "";
        this.github = {
            "star": "true",
            "fork": "true",
            "repo": ""
        }
    }

    var renderer = new marked.Renderer();
    var config;

    renderer.code = function (code, language) {
        switch (language) {
            case configText:
                config = JSON.parse(code);
                //console.log(config.name);
                return "";

            default :
                return "<pre><code class='language-" + lang +
                    "'>" + code + "</code></pre>";
        }
    };

    marked.setOptions({
        renderer: renderer
    });


    function dragMdEnter(e) {
        e.stopPropagation();
        e.preventDefault();
        $("#upload").css("border-color", "#3bafda");
    }

    function dragMdLeave(e) {
        e.stopPropagation();
        e.preventDefault();
        $("#upload").css("border-color", "#ddd");
    }

    function dropMdFile(e) {
        e.stopPropagation();
        e.preventDefault();
        $("#upload").css("border-color", "#ddd");

        if (e.dataTransfer.files == null || e.dataTransfer.files[0] == null) {
            return;
        }
        processMdFile(e.dataTransfer.files[0]);
    }


    function selectMdFile(e) {
        e.stopPropagation();
        e.preventDefault();
        if (this.files == null || this.files[0] == null) {
            return;
        }
        processMdFile(this.files[0]);
    }


    function processMdFile(mdFile) {
        var targetFile, mdName, mdContent;
        targetFile = mdFile;
        if (!checkMdExt(targetFile.name)) {
            var modal = $('[data-remodal-id=md-tip]').remodal();
            modal.open();
            return;
        }
        $("#loader").css("display", "block");
        var reader = new FileReader();
        reader.readAsText(targetFile);
        mdName = delExtension(targetFile.name);

        reader.onload = function (e) {
            mdContent = e.target.result;
            processMdContent(mdContent);
        };
    }

    function processMdContent(mdContent) {
        //console.log(mdContent.split(startTag));
        mdContent = mdContent.replaceAll(startPattern, startTag);
        mdContent = mdContent.replaceAll(morePattern, moreTag);
        //console.log(mdContent);
        var rowTexts = mdContent.split(startTag);
        var projectList = [];


        var idIndex = 0;

        rowTexts.forEach(function (rowText) {
            if (rowText != null && !rowText.trim() == "") {

                var project = new Project();
                var textParts = rowText.split(moreTag);
                if (textParts.length == 1) {
                    project.hasShortIntro = false;
                } else {
                    project.shortIntro = marked(textParts[0]);

                }
                config = {};
                var content = marked(rowText);
                project.content = content;
                if (config.hasOwnProperty("name")) {
                    project.name = config.name;
                }

                if (config.hasOwnProperty("code")) {
                    project.code = config.code;
                } else {
                    project.hasCode = false;
                }

                if (config.hasOwnProperty("home")) {
                    project.home = config.home;
                } else {
                    project.hasHome = false;
                }

                if (config.hasOwnProperty("tags")) {
                    project.tags = config.tags;
                }

                if (config.hasOwnProperty("category")) {

                    project.category = config.category;

                }


                var projectGithub = project.github;
                var configGithub = config.github;
                //console.log(configGithub)
                if (config.hasOwnProperty("github")) {

                    if (configGithub == null || !configGithub.hasOwnProperty("repo")) {
                        project.hasGithub = false;
                        project.star = false;
                        project.star = false;
                    }

                    if (configGithub.hasOwnProperty("repo")) {
                        projectGithub.repo = configGithub.repo;
                    }

                    if (configGithub.hasOwnProperty("star") && !configGithub["star"]) {
                        //project.showStar = false;
                        projectGithub.star = false;

                    }

                    if (configGithub.hasOwnProperty("fork") && !configGithub["fork"]) {
                        projectGithub.fork = false;
                    }


                } else {
                    project.hasGithub = false;
                    projectGithub.star = false;
                    projectGithub.fork = false;
                }
                project.id = idIndex++;
                projectList.push(project);
                //console.log(parts[0]);
            }
        });

        var categoryMap = {};
        var categoryList = [];
        var categoryMap = {};

        projectList.forEach(function (project) {
            if (project.category != null && project.category.trim() != "") {

                var plist;
                if (categoryMap.hasOwnProperty(project.category)) {
                    plist = categoryMap[project.category];
                    plist.push(project.id);
                } else {
                    plist = [];
                    plist.push(project.id);
                    categoryMap[project.category] = plist;
                    categoryList.push(project.category);
                }
            }
        });

        var data = {
            projectList: projectList,
            categoryMap: categoryMap,
            categoryList: categoryList
        };


        //console.log(projectList[0].content);
        // $("#test").html(projectList[0].content);
        //$("#editor").val(JSON.stringify(projectList));

        editor.getSession().setValue(JSON.stringify(data, null, 4));
        //console.log(JSON.stringify(projectList));
        //console.log(editor.getValue());

    }


    function exportData() {
        var fileName = "data.json";
        var content = editor.getSession().getValue();
        if (content == null || content.trim() == "") {
            swal("数据不能为空", "", "error");
            return;
        }
        var blob = new Blob([content], {type: "application/json"});
        saveAs(blob, fileName);

    }


    function checkMdExt(name) {
        var re = /(\.md|\.markdown|\.txt|\.mkd|\.text)$/i;
        if (re.test(name)) {
            return true;
        } else {
            return false;
        }
    }

    function delExtension(str) {
        return str.substr(0, str.lastIndexOf('.')) || str;
    }


    $("#download").click(exportData);

    var fileSelect = document.getElementById('select-file');

    fileSelect.addEventListener("dragenter", dragMdEnter, false);
    fileSelect.addEventListener("dragleave", dragMdLeave, false);
    fileSelect.addEventListener('drop', dropMdFile, false);
    fileSelect.addEventListener("change", selectMdFile, false);

    var editor = ace.edit("editor");
    //var JavaScriptMode = ace.require("ace/mode/javascript").Mode;
    //editor.session.setMode(new JavaScriptMode());
    editor.getSession().setMode("ace/mode/json");
    editor.setFontSize(14);
    editor.setOption("wrap", "free");
    ace.require("ace/ext/language_tools");
    editor.container.style.lineHeight = 1.5;
    editor.renderer.updateFontSize()


    String.prototype.replaceAll = function (s1, s2) {
        return this.replace(new RegExp(s1, "gm"), s2);
    }
}());