# 项目列表模板
## 效果

## 使用
1. clone 项目到本地
    ```
    git clone git@github.com:zhangjikai/project-list-template.git
    cd project-list-template
    ```
2. 按照规则编写 Markdown 文件
3. 使用 在线工具 转换为 json 文件
4. 替换 data.json
5. 运行程序重新编译
    ```
    npm install
    gulp
    ```
    如果不想重新编译文件，可以使用 without-recompile 中的文件，该文件夹下的程序使用 `$.getJSON` 获取 json 文件，只需替换 json 文件，不需要重新编译。

## Markdown 文件规则
一个完整的项目介绍如下所示：
<pre lang="no-highlight"><code><!-- start -->
```config
{
    "name": "Markdown 语法介绍",
    "github": {
        "repo": "zhangjikai/project-list-template",
        "star":true,
        "fork":true
    },
    "code": "https://github.com/zhangjikai/project-list-template",
    "category": "Markdown",
    "tags" : ["markdown"]
}
```
介绍 Markdown 的相关语法。
<!-- more -->
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
```
