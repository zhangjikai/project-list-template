/**
 * Created by ZhangJikai on 2017/2/19.
 */


import style from '../less/style.less'
import fontAwesome from 'fontAwesome'

import Vue from 'vue'
import project from '../components/project/project.vue'
import sidebar from '../components/sidebar/sidebar.vue'
import projectList from '../../data.json'
import config from  '../../config.json'


Vue.component("project", project);
Vue.component("sidebar", sidebar);

//var markdownReaderDesc = "* 堆的创建、插入、删除、堆排序演示\n" +
//    "* 最大堆与最小堆切换\n" +
//    "* 单步执行与自动执行\n" +
//    "* 可调节演示速度\n" +
//    "* 两种演示方式切换\n";
//markdownReaderDesc = marked(markdownReaderDesc);

//var data = [
//    {
//        "title": "Online Markdown Reader",
//        "tags": ["JS", "Tool"],
//        "content": markdownReaderDesc,
//        "source": "https://github.com/zhangjikai/online-markdown-reader",
//        "url": "http://markdown.zhangjikai.com/",
//        "desc": "测试一下效果"
//    }
//];


let categoryList = [];
let categoryMap = {};

if (categoryList.length == 0) {
    config.category = false;
}

//var categoryList = [];
//var categoryMap = {};
//
//projectList.forEach(function (project) {
//    if (project.category != null && project.category.trim() != "") {
//
//        var plist;
//        if (categoryMap.hasOwnProperty(project.category)) {
//            plist = categoryMap[project.category];
//            plist.push(project.id);
//        } else {
//            plist = [];
//            plist.push(project.id);
//            categoryMap[project.category] = plist;
//            categoryList.push(project.category);
//        }
//    }
//});


//if (config.category) {
//    let projectMap = {};
//    let newProjectList = [];
//    for (let pro of projectList) {
//        projectMap[pro.id] = pro;
//    }
//
//    for (let cate of categoryList) {
//        let proIds = categoryMap[cate];
//        for(let id of proIds) {
//            newProjectList.push(projectMap[id]);
//        }
//    }
//
//
//    projectList = newProjectList;
//
//}
//console.log(data);

var vm = new Vue({
    el: '#app',
    data: function () {
        return {
            projects: projectList,
            categoryList: categoryList,
            categoryMap: categoryMap
        }
    },
    methods: {
        collapseClick: function (isCollapse) {
            //console.log(isCollapse);
            var container = document.querySelector("#project-container");
            console.log(container);
            if (isCollapse) {
                container.style.marginLeft = "50px";
            } else {
                container.style.marginLeft = "260px";
            }
        }
    }
});




