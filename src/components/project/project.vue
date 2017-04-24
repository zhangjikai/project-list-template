<template>
    <div class="project">
        <div class="inner">

            <div class="project-header">
                <div class="project-title">
                    <span>{{project.name}}</span>

                </div>

            </div>

            <div class="project-tag">
                <i class="fa fa-tags" aria-hidden="true"></i>
                <a href="#" v-for="tag in project.tags">{{tag}}</a>
            </div>
            <!--<div class="project-desc" v-html="project.desc"></div>-->
            <div class="project-content" :id="'content' + project.id">

                <div class="main" v-if="showShort" v-html="project.shortIntro">
                </div>
                <div class="main" v-else v-html="project.content">
                </div>

            </div>
            <div class="no-show">
                <div class="project-content-copy" :id="'content-copy' + project.id">
                    <div class="main" v-html="project.content"></div>
                </div>
            </div>

            <div class="project-url">

                <a :href="project.home " v-if="project.hasHome" target="_blank" class="project-link">
                    <i class="fa fa-home custom-fa" aria-hidden="true"></i>
                    <span>Home</span>
                </a>

                <a :href="project.code" target="_blank" v-if="project.hasCode" class="project-link">
                    <i class="fa fa-code custom-fa" aria-hidden="true"></i>
                    <span>Code</span>
                </a>

                <a class="github-button" v-if="project.github.star" :href="'https://github.com/' + project.github.repo "
                   data-icon="octicon-star"
                   :data-count-href="'/'+ project.github.repo + '/stargazers'"
                   :data-count-api="'/repos/'+ project.github.repo +'#stargazers_count'"
                   data-count-aria-label="# stargazers on GitHub"
                   :aria-label="'Star' + project.github.repo+  'on GitHub'"
                   style="display: none">Star</a>


                <a class="github-button" v-if="project.github.fork" :href="'https://github.com/' + project.github.repo"
                   data-icon="octicon-repo-forked"
                   :data-count-href="'/' + project.github.repo + '/network'"
                   :data-count-api="'/repos/' + project.github.repo + '#forks_count'"
                   data-count-aria-label="# forks on GitHub"
                   :aria-label="'Fork'+ project.github.repo +'on GitHub'"
                   style="display: none">Fork</a>

                <a href="javascript:void(0)" @click="expand" v-if="project.hasShortIntro" class="project-link expand">
                    <i class="fa " :class="{'fa-angle-double-down': showShort, 'fa-angle-double-up': !showShort}"
                       aria-hidden="true"></i>
                    <span>{{showShort ?  "详细介绍": "收起"}}</span>
                </a>


            </div>


        </div>

    </div>

    <!--<div class="project">
        <div class="inner">
            <div class="project-title">{{project.title}}</div>
            <div class="project-tag">
                <i class="fa fa-tags" aria-hidden="true"></i>
                <a href="#" v-for="tag in project.tags">{{tag}}</a>
            </div>
            <div class="project-content">
                <ul>
                    <li><code>Prism.js</code> / <code>Highlight.js</code> 代码高亮</li>
                    <li>自动生成目录</li>
                    <li>本地图片显示</li>
                    <li>导出 Html （包含样式）

                        <ul>
                            <li>BackToTop</li>
                            <li>多说</li>
                        </ul></li>
                    <li>扩展功能

                        <ul>
                            <li>Toto 列表</li>
                            <li><a href="https://github.com/mathjax/MathJax">MathJax</a> </li>
                            <li><a href="https://github.com/bramp/js-sequence-diagrams">时序图 (Js sequence diagrams)</a></li>
                            <li><a href="https://github.com/Ranks/emojify.js">Emoji (Emojify.js)</a></li>
                            <li><a href="http://echarts.baidu.com/">ECharts</a></li>
                            <li><a href="http://fancybox.net/">Fancybox</a></li>
                        </ul></li>
                </ul>
            </div>
            <div class="project-url">
                <a :href="project.source" v-if="project.source !== null" target="_blank">源码</a>
                <a :href="project.url" v-if="project.url !== null" target="_blank">在线地址</a>
            </div>
        </div>

    </div>-->
</template>

<script>

    export default {
        props: ["project", "showShort"],
        data: function () {
            return {
                isExpand: false
            }
        },
        methods: {

            expand: function () {
                var vm = this;
                if(vm.showShort) {
                    vm.showShort = !vm.showShort;
                } else {
                    setTimeout(function () {
                        vm.showShort = !vm.showShort;
                    }, 500);
                }
                var content = document.querySelector("#content" + vm.project.id);
                if (!vm.hasPreHeight) {
                    vm.preHeight = document.querySelector('#content-copy' + vm.project.id).clientHeight;
                    content.style.height = content.clientHeight + "px";
                    vm.hasPreHeight = true;
                    //console.log(vm.preHeight);
                }

                var heightCopy = content.clientHeight;
                content.style.height = vm.preHeight + "px";
                vm.preHeight = heightCopy;


            }
        }
    }


</script>

<style lang="less">

    @import "project.less";

</style>