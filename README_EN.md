English | [中文](README.md)
# Project List Template

<!-- toc -->


* [Introduction](#introduction)
* [Usage](#usage)
* [Markdown File Rules](#markdown-file-rules)
  * [Start Tag](#start-tag)
  * [Project Information](#project-information)
  * [Project Details](#project-details)
  * [Complete Sample](#complete-sample)
* [Global Config](#global-config)

<!-- tocstop -->

## Introduction
This is a project list shown template written by Vue2, and the effect is shown as below. You just need to write the markdown file according to some defined rules and needn't to change the template file. Meanwhile this program has a very simple logic which is suit for start of Vue.

<kbd>
<img src="screenshot/screenshot.png">
</kbd>

## Usage
1. Clone this repository
    ```
    git clone git@github.com:zhangjikai/project-list-template.git
    cd project-list-template
    ```
2. Write the markdown file according to defined rules
3. Use the [online tool](http://project.zhangjikai.com/generator/) to convert markdown file to JSON file.
4. Replace data.json
5. Recompile the source
    ```
    npm install
    gulp
    ```
    If you don't want to recompile the source, you can use the files under `without-recompile` folder. The program under `without-recompile` folder uses `$.getJSON` to fetch JSON database and doesn't need to recompile.

## Markdown File Rules
The sample content of markdown file is shown as below:
<pre lang="no-highlight"><code>&lt;!-- start -->

```config
{
    "name": "Markdown Demo",
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
Introduction of Markdown.

&lt;!-- more -->

## Emphasis
Emphasis, aka italics, with *asterisks* or _underscores_.
Strong emphasis, aka bold, with **asterisks** or __underscores__.
Combined emphasis with **asterisks and _underscores_**.
Strikethrough uses two tildes. ~~Scratch this.~~

## Lists
* Unordered list can use asterisks
- Or minuses
+ Or pluses

</code></pre>

### Start Tag

 The `<!-- start -->` tag represents the starting of a new project introduction. In our program, we use this tag to distinguish different project introductions.

### Project Information
You can use the code block with `config` lang to set your project information. You should ensure that the content of config code block is valid JSON format. Our program supported configurations and their default value are shown as below:
<pre lang="no-highlight"><code>```config
{
    "name": "",
    "home": "",
    "code": "",
    "category": "---------------------------",
    "tags" : [],
    "github": {
        "repo": "",
        "star":true,
        "fork":true
    }

}
```
</code></pre>

* `name` - project name.
* `home` - project homepage, if absent, the button will be hidden.
* `code` - project source address, if absent, the button will be hidden.
* `category` - project categoty. Projects will be shown by category according to this value. And you can change the default category value in `config.json`.
* `tags` - project tags, array type.
* `github` - show github informations about this project
  * `repo` - the repository name on github，valid format is `usename/repository-name`，such as `zhangjikai/project-list-template`
  * `star` - whether show star info
  * `fork` - whether show fork info

### Project Details
You can use normal markdown syntax in this section. If the details are too long, you can use <!-- more -->` to split the details content, and the content behind the tag will be folded.
```
short introduction
<!-- more -->
more introduction
```

### Complete Sample
[Here](demo/demo_en.md) is a complete sample file .

## Global Config
You can set global configurations in the `config.json`. Following are all supported configurations:
* `category` - whether show proejcts by category, default is true.
* `homeText` - display text of the homepage button.
* `codeText` - display text of the source button.
* `expandText` - display text of the expand details button.
* `collapseText` - display text of the collapse details button.
* `defaultCategory` - default category of the project.
* `github` - github corner, formats are `usename` or `usename/repository`, and will be hidden if this configuration is empty.
