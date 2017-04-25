<!-- start -->
```config
{
    "name": "Markdown 语法介绍",
    "github": {
        "repo": "zhangjikai/project-list-template",
        "star":true,
        "fork":true
    },
    "code": "https://github.com/zhangjikai/project-list-template",
    "category": "示例",
    "tags" : ["markdown"]
}
```

介绍 Markdown 的相关语法。

<!-- more -->
## Headers

# H1
## H2
### H3
#### H4
##### H5
###### H6

## Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists

1. First ordered list item
2. Another item
	* Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
	1. Ordered sub-list
4. And another item.

	You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

	To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
	Note that this line is separate, but within the same paragraph.⋅⋅
	(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)


* Unordered list can use asterisks
- Or minuses
+ Or pluses

## Links

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links.
http://www.example.com or <http://www.example.com> and sometimes
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images

Here's our logo (hover to see the title text):

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style:
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Code

```css
body{
    margin: 0 auto;
    font-family: Georgia, Palatino, serif;
    color: #444444;
    line-height: 1;
    padding: 30px;
}
```

## Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

## Blockquotes

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Horizontal Rule
Three or more...

---

Hyphens

***

Asterisks

___

Underscores

<!-- start -->

```config
{
    "name": "基于Three.js 框架的 3D 射击游戏",
    "github": {
        "repo": "zhangjikai/MindYourHead"
    },
    "home": "http://head.zhangjikai.com/",
    "code": "https://github.com/zhangjikai/MindYourHead",
    "category": "HTML5 & JS",
    "tags" : ["Three.js", "游戏"]
}
```
基于 three.js 的一款 3D 射击游戏。

<!-- more -->
## 介绍
首先选取一张包含人脸的图片，人脸尽可能大以便于裁剪。裁剪框有三条提示线，分别对应人的双眼和嘴。通过调节图片的大小，使双眼和嘴尽量重合。裁剪的图片会被用做怪物的脸。
游戏设置了四种武器：

* 普通子弹 - 第一次击中怪物后，会使怪物脸发生变形，第二次击中怪物后才会杀死怪物
* 冷冻弹 - 爆炸后使怪物停止移动
* 炮弹 - 爆炸后会产生很多小子弹，不会自动引爆，发射后需要点击普通子弹操作引爆
* 激光 - 碰到怪物就可以杀死怪物

游戏设置了两种模式 - 闯关模式和计分模式。本来还有一个对战模式，通信使用 websocket + java web, 但是因为没有 java 服务器，所以把这个模式去掉了。

如果在移动端玩这个游戏，注意使用横屏模式。建议使用 chrome 浏览器。

## 截图
![](https://raw.githubusercontent.com/zhangjikai/MindYourHead/master/images/demo/game.png)

<!-- start -->
```config
{
    "name": "Markdown 在线阅读器",
    "github": {
        "repo": "zhangjikai/online-markdown-reader"
    },
    "home": "http://markdown.zhangjikai.com/",
    "code": "https://github.com/zhangjikai/online-markdown-reader",
    "category": "HTML5 & JS",
    "tags" : ["Markdown", "工具"]
}
```

一款在线的 Markdown文件阅读器，使用 [marked](https://github.com/chjj/marked) 解析 Markdown 文件，通过扩展库的方法，添加了一些扩展功能。同时程序可以方便添加新的扩展。

[示例预览](http://www.zhangjikai.com/markdown/sample.html)

<!-- more -->
## 程序功能
+ `Prism.js` / `Highlight.js` 代码高亮
+ 自动生成目录
+ 本地图片显示
+ 导出 Html （包含样式）
    - BackToTop
    - 多说
+ 扩展功能
    - Toto 列表
    - [MathJax](https://github.com/mathjax/MathJax)
    - [时序图 (Js sequence diagrams)](https://github.com/bramp/js-sequence-diagrams)
    - [Emoji (Emojify.js)](https://github.com/Ranks/emojify.js)
    - [ECharts](http://echarts.baidu.com/)
    - [Fancybox](http://fancybox.net/)

<!-- start -->
```config
{
    "name": "GitHub Page 在线生成器",
    "github": {
        "repo": "zhangjikai/online-ghpages-generator"
    },
    "home": "http://page.zhangjikai.com/",
    "code": "https://github.com/zhangjikai/online-ghpages-generator",
    "category": "HTML5 & JS",
    "tags" : ["Markdown", "GitHub Page", "工具"]
}
```
将 Markdown 文件转换为不同主题的 GitHub Page 网页。

<!-- start -->

```config
{
    "name": "GitBook 使用教程",
    "github": {
        "repo": "zhangjikai/gitbook-use"
    },
    "home": "http://gitbook.zhangjikai.com/",
    "code": "https://github.com/zhangjikai/gitbook-use",
    "category": "文档",
    "tags" : ["GitBook"]
}
```
介绍 GitBook 的使用方法以及相关插件。

<!-- start -->
```config
{
    "name": "Vim 学习记录",
    "github": {
        "repo": "zhangjikai/vim_learn"
    },
    "home": "http://vim.zhangjikai.com/",
    "code": "https://github.com/zhangjikai/vim_learn",
    "category": "文档",
    "tags" : ["Vim"]
}
```
记录Vim的相关操作以及一些常用插件。
