# Codegeeker
VSCode code generation Extension based on SalesForce CodeGen.

Source code of Extension: https://github.com/git-cloner/codegeeker

Source code of Codegen : https://github.com/git-cloner/codegen

Online demo: https://gitclone.com/aiit/codegen

VSCode Extension:

 ![](https://gitclone.com/download1/aiit/codegeeker.gif)

## Extension install

In VSCode,press ctrl+shift+x,search Codegeeker and install.

 ![](https://gitclone.com/download1/aiit/extension.png)

## Extension usage

If you use Python or PlainText, enter a colon (:) in the VScode editor to display the generated candidate code snippet.

If it is C, C++, Go, JavaScript, Java, etc., enter { in the VScode editor to display the generated candidate code fragment.

if you enter ! then codegne use openai ChatGPT(just test!!) 

## Implementation principle

Enter triggerCharacters (:or {), post current line to the backend (https://github.com/git-cloner/codegen) to generate the code, and the backend uses salesforce's CodeGen model (https://github.com/salesforce/CodeGen) to generate the code snippet.

## 中文说明

基于 salesforce codegen的VSCode代码生成插件。

插件源码：https://github.com/git-cloner/codegeeker

生成源码：https://github.com/git-cloner/codegen

在线演示：https://gitclone.com/aiit/codegen

### 1、插件安装

在VSCode里，按ctrl+shift+x，搜索Codegeeker，安装。

### 2、插件用法

如果是python或plaintext，在vscode编辑器中输入冒号（:），显示生成的候选代码片断。

如果是c、c++、go、javascript、java等，在vscode编辑器中输入{，显示生成的候选代码片断。

如果输入感叹号或者本行含有中文，则会调用openai ChatGPT。

### 3、实现原理

输入triggerCharacters（:或{）,将本行代码post到后台（https://github.com/git-cloner/codegen）生成代码，后台使用salesforce的CodeGen模型（https://github.com/salesforce/CodeGen）生成代码片断返回。

