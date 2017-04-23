<template>
    <div class="project">
        <div class="inner">

            <div class="project-header">
                <div class="project-title">
                    <span>{{project.title}}</span>

                </div>

            </div>

            <div class="project-tag">
                <i class="fa fa-tags" aria-hidden="true"></i>
                <a href="#" v-for="tag in project.tags">{{tag}}</a>
            </div>
            <!--<div class="project-desc" v-html="project.desc"></div>-->
            <div class="project-content" id="content">
                <div class="main" v-html="project.content">

                </div>
            </div>
            <div class="project-content-copy" id="content-copy">
                <div class="main" v-html="project.content"></div>
            </div>
            <div class="project-url">

                <a :href="project.url " v-if="project.url !== null" target="_blank" class="project-link">
                    <i class="fa fa-home custom-fa" aria-hidden="true"></i>
                    <span>Home</span>
                </a>

                <a :href="project.source" target="_blank" v-if="project.source !== null" class="project-link">
                    <i class="fa fa-code custom-fa" aria-hidden="true"></i>
                    <span>Code</span>
                </a>


                <a class="github-button" href="https://github.com/zhangjikai/gitbook-use" data-icon="octicon-star"
                   data-count-href="/zhangjikai/gitbook-use/stargazers"
                   data-count-api="/repos/zhangjikai/gitbook-use#stargazers_count"
                   data-count-aria-label="# stargazers on GitHub" aria-label="Star zhangjikai/gitbook-use on GitHub"
                   style="display: none">Star</a>

                <a class="github-button" href="https://github.com/zhangjikai/gitbook-use/fork"
                   data-icon="octicon-repo-forked" data-count-href="/zhangjikai/gitbook-use/network"
                   data-count-api="/repos/zhangjikai/gitbook-use#forks_count" data-count-aria-label="# forks on GitHub"
                   aria-label="Fork zhangjikai/gitbook-use on GitHub"
                   style="display: none">Fork</a>

                <a href="javascript:void(0)" @click="expand" v-if="project.source !== null" class="project-link expand">
                    <i class="fa " :class="{'fa-angle-double-down': !isExpand, 'fa-angle-double-up': isExpand}"
                       aria-hidden="true"></i>
                    <span>{{isExpand ?   "收起" : "详细介绍"}}</span>
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
        props: ["project"],
        data: function () {
            return {
                isExpand: false
            }
        },
        methods: {

            expand: function () {
                var vm = this;
                //console.log(vm.isExpand);
                vm.isExpand = !vm.isExpand;
                var content = document.querySelector("#content");
                console.log(content);
                if (vm.isExpand) {
                    var contentCopy = document.querySelector('#content-copy');
                    content.style.height = contentCopy.clientHeight + 'px';
                } else {
                    content.style.height = "0px";
                }
                //console.log(document.querySelector('#content-copy').clientHeight)
            }
        }
    }


</script>

<style lang="less">

    @import "project.less";

</style>