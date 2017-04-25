# 项目列表模板
## 效果

## 使用
1.clone 项目到本地
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
    如果不想重新编译文件，可以使用 without-recompile 中的程序，该文件夹下的程序使用 `$.getJSON` 获取 json 文件，因此只需替换即可。

## Markdown 文件规则
完整的示例如下所示：
