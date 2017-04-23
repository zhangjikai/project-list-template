/**
 * Created by ZhangJikai on 2017/2/19.
 */


import style from '../less/style.less'
import fontAwesome from 'fontAwesome'

import Vue from 'vue'
import project from '../components/project/project.vue'
import marked from '../../node_modules/marked/marked.min.js'
import db from '../../data.json'



Vue.component("project", project);

var markdownReaderDesc = "* 堆的创建、插入、删除、堆排序演示\n" +
    "* 最大堆与最小堆切换\n" +
    "* 单步执行与自动执行\n" +
    "* 可调节演示速度\n" +
    "* 两种演示方式切换\n";
markdownReaderDesc = marked(markdownReaderDesc);

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

var data = db;

console.log(data);

var vm = new Vue({
    el: '#app',
    data: {
        projects: data
    }
});




