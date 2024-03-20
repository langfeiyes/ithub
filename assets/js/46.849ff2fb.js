(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{369:function(a,t,s){"use strict";s.r(t);var n=s(4),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maven"}},[a._v("#")]),a._v(" MAVEN")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/maven-logo.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"一、今日学习内容与目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、今日学习内容与目标"}},[a._v("#")]),a._v(" 一、今日学习内容与目标")]),a._v(" "),t("ul",[t("li",[a._v("了解 Maven 是什么，为什么要使用 Maven。")]),a._v(" "),t("li",[a._v("掌握 Maven 安装及配置。")]),a._v(" "),t("li",[a._v("熟悉 Maven 项目目录结构，知道什么类型文件放到什么目录里。")]),a._v(" "),t("li",[a._v("掌握在开发工具中搭建基于 Maven 构建 JavaSE 项目。")]),a._v(" "),t("li",[a._v("掌握在开发工具中搭建基于 Maven 构建 JavaWeb 项目。")])]),a._v(" "),t("h2",{attrs:{id:"二、初识-maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、初识-maven"}},[a._v("#")]),a._v(" 二、初识 Maven")]),a._v(" "),t("h3",{attrs:{id:"_2-1-项目遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-项目遇到的问题"}},[a._v("#")]),a._v(" 2.1 项目遇到的问题")]),a._v(" "),t("ul",[t("li",[a._v("构建：编译代码，运行测试，打包，部署应用，运行服务器等；")]),a._v(" "),t("li",[a._v("依赖：项目依赖大量的第三方包，第三方包又依赖另外的包，对依赖包的管理非常麻烦。")])]),a._v(" "),t("h3",{attrs:{id:"_2-2-maven-定义和作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-maven-定义和作用"}},[a._v("#")]),a._v(" 2.2 Maven 定义和作用")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("Maven 翻译为“知识的积累”，“专家”，“行家”，是一个跨平台的项目管理工具；")])]),a._v(" "),t("li",[t("p",[a._v("Maven 主要用作基于 Java 平台的项目（Maven 本身也是 Java 编写的）的构建、依赖包管理和项目信息管理；")])]),a._v(" "),t("li",[t("p",[a._v("Maven 能提供"),t("strong",[a._v("一种项目的配置")]),a._v("，配置好的项目，只需要运行一条简单的命令，就能完成重复的，繁琐的构建动作；")])]),a._v(" "),t("li",[t("p",[a._v("Maven 能提供一种项目的依赖配置，配置好的项目，Maven 能自动的"),t("strong",[a._v("从 Maven 的中央仓库中帮我们下载并管理项目依赖的 jar 包")]),a._v("，并且还能自动的管理这些 jar 包依赖的其他 jar 包；")])]),a._v(" "),t("li",[t("p",[a._v("Maven 提供了一种"),t("strong",[a._v("标准的项目目录结构")]),a._v("，测试命名规则等项目的最佳实践方案，统一了不同项目的学习成本（约定大于配置）。")])])]),a._v(" "),t("h2",{attrs:{id:"三、maven-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、maven-安装"}},[a._v("#")]),a._v(" 三、Maven 安装")]),a._v(" "),t("h3",{attrs:{id:"_3-1-检查-jdk-的版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-检查-jdk-的版本"}},[a._v("#")]),a._v(" 3.1 检查 JDK 的版本")]),a._v(" "),t("p",[a._v("因为 Maven 不同的版本对 JDK 是有要求的，具体请看官网。\n在命令行输入 java  -version，查询安装 JDK 是否正确并查询安装的版本。若没有配置好的话，按照以下步骤配置好：")]),a._v(" "),t("ul",[t("li",[a._v("添加 JAVA_HOME，需要指向 JDK 安装目录；")]),a._v(" "),t("li",[a._v("添加 PATH，添加 %JAVA_HOME%\\bin。")])]),a._v(" "),t("h3",{attrs:{id:"_3-2-安装-maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-安装-maven"}},[a._v("#")]),a._v(" 3.2 安装 Maven")]),a._v(" "),t("p",[a._v("把 apache-maven-x.x.x-bin.zip 解压到目录中（"),t("strong",[a._v("目录路径最好不要有空格和中文")]),a._v("）。")]),a._v(" "),t("h3",{attrs:{id:"_3-3-配置环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-配置环境变量"}},[a._v("#")]),a._v(" 3.3 配置环境变量")]),a._v(" "),t("ul",[t("li",[a._v("配置环境变量，MAVEN_HOME，指向 maven 的根目录；")]),a._v(" "),t("li",[a._v("配置环境变量 Path，将 %MAVEN_HOME%\\bin 追加到 Path 中。")])]),a._v(" "),t("h4",{attrs:{id:"_3-3-1-win7-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-win7-配置"}},[a._v("#")]),a._v(" 3.3.1 Win7 配置")]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/Win7_1.png",alt:""}})])]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/Win7_2.png",alt:""}})])]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/Win7_3.png",alt:""}})])]),a._v(" "),t("h4",{attrs:{id:"_3-3-2-win10-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-win10-配置"}},[a._v("#")]),a._v(" 3.3.2 Win10 配置")]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/Win10_1.png",alt:""}})])]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/Win10_2.png",alt:""}})])]),a._v(" "),t("h3",{attrs:{id:"_3-4-验证-maven-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-验证-maven-安装"}},[a._v("#")]),a._v(" 3.4 验证 Maven 安装")]),a._v(" "),t("p",[a._v("打开命令行窗口，输入入 mvn –v 执行，若执行类似如下效果即代表安装成功。")]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/maveninstall.png",alt:""}})])]),a._v(" "),t("h2",{attrs:{id:"四、maven入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、maven入门"}},[a._v("#")]),a._v(" 四、Maven入门")]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/mavencommon.png",alt:""}})])]),a._v(" "),t("p",[a._v("把事先准备好的 Maven 项目，在命令行下输入命令试下：")]),a._v(" "),t("ul",[t("li",[a._v("mvn compile：编译")]),a._v(" "),t("li",[a._v("mvn clean：清除")]),a._v(" "),t("li",[a._v("mvn test：测试")]),a._v(" "),t("li",[a._v("mvn package：打包")]),a._v(" "),t("li",[a._v("mvn install：打包，本地仓库也放一份")])]),a._v(" "),t("h2",{attrs:{id:"五、maven-设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、maven-设置"}},[a._v("#")]),a._v(" 五、Maven 设置")]),a._v(" "),t("h3",{attrs:{id:"_5-1-本地仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-本地仓库"}},[a._v("#")]),a._v(" 5.1 本地仓库")]),a._v(" "),t("p",[a._v("运行过 Maven 命令才会在你的用户目录生成一个 .m2 目录，该目录下有个目录名 repository，这个就是所谓的本地仓库，主要存放是一些下载的 jar 文件。")]),a._v(" "),t("p",[a._v("本地仓库默认位置在用户目录/.m2/repository，本地仓库不建议在系统盘，最佳实践：")]),a._v(" "),t("ul",[t("li",[a._v("将 Maven 根目录的 conf/settings.xml 拷贝到 .m2 中，作为个人 Maven 配置文件；")]),a._v(" "),t("li",[a._v("在 settings.xml 文件中 localRepository 修改本地仓库的位置。")])]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token prolog"}},[a._v('<?xml version="1.0" encoding="UTF-8"?>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("settings")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("xmlns")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://maven.apache.org/SETTINGS/1.0.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("xsi")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.w3.org/2001/XMLSchema-instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("xsi:")]),a._v("schemaLocation")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 本地仓库地址 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("localRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("你本地仓库的目录位置"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("localRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("settings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("h3",{attrs:{id:"_5-2-配置中央仓库镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-配置中央仓库镜像"}},[a._v("#")]),a._v(" 5.2 配置中央仓库镜像")]),a._v(" "),t("p",[a._v("在有网情况下，官方中央仓库服务器在国外，所以很大可能出现下载失败的问题，所以我们配置一个中央仓库的镜像来降低下载失败的概率。")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token prolog"}},[a._v('<?xml version="1.0" encoding="UTF-8"?>')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("settings")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("xmlns")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://maven.apache.org/SETTINGS/1.0.0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("xsi")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.w3.org/2001/XMLSchema-instance"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[t("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("xsi:")]),a._v("schemaLocation")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 本地仓库地址 --\x3e")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("localRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("你本地仓库的目录位置"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("localRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirrors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 阿里仓库镜像 --\x3e")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirror")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("alimaven"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("aliyun maven"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("http://maven.aliyun.com/nexus/content/groups/public/"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirrorOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("central"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirrorOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirror")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirrors")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("settings")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br")])]),t("h2",{attrs:{id:"六、idea-配置maven"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#六、idea-配置maven"}},[a._v("#")]),a._v(" 六、IDEA 配置Maven")]),a._v(" "),t("p",[a._v("配置安装的 Maven，设置 setttings.xml 和本地仓库。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/image-20230524144123087.png",alt:""}}),t("br")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/Mavensettinginidea2.png",alt:""}}),t("br")]),a._v(" "),t("h2",{attrs:{id:"七、maven-构建javase-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#七、maven-构建javase-项目"}},[a._v("#")]),a._v(" 七、Maven 构建JavaSE 项目")]),a._v(" "),t("h3",{attrs:{id:"_7-1-创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-创建项目"}},[a._v("#")]),a._v(" 7.1 创建项目")]),a._v(" "),t("p",[t("strong",[a._v("步骤1：选择建的是 Maven 项目")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/image-20230524171744936.png",alt:""}}),t("br")]),a._v(" "),t("p",[a._v("确定完之后点击 Finish，之后工具会打开解析项目，要等一会儿。")]),a._v(" "),t("p",[t("strong",[a._v("步骤2：pom.xml 文件")])]),a._v(" "),t("p",[a._v("用于填写项目信息，打包方式，添加依赖及插件等。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/image-20230524172106316.png",alt:""}}),t("br")]),a._v(" "),t("p",[t("strong",[a._v("步骤3：添加依赖")])]),a._v(" "),t("p",[a._v("所谓建索引，就对本地仓库的依赖建立索引，若本地仓库存在 10 个依赖，那么在添加的时候可以搜索得出来，很方便在 pom.xml 添加。但注意搜索得出来是本地仓库已有的前提下。而这个索引在 IDEA 开发工具会自动建好，直接使用即可。(idea 有的版本无法搜索到)")]),a._v(" "),t("p",[t("strong",[a._v("索引提示")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/adddependences1.png",alt:""}}),t("br")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/image-20230524172927035.png",alt:""}}),t("br")]),a._v(" "),t("p",[t("strong",[a._v("填写依赖名称")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/adddependences3.png",alt:""}}),t("br")]),a._v(" "),t("p",[t("strong",[a._v("填写依赖版本")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/adddependences4.png",alt:""}}),t("br")]),a._v(" "),t("p",[t("strong",[a._v("填写依赖的作用域")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/adddependences5.png",alt:""}}),t("br")]),a._v(" "),t("p",[t("strong",[a._v("刷新依赖")])]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/image-20230524173147724.png",alt:""}})]),t("br")]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/image-20230524173230492.png",alt:""}})])]),a._v(" "),t("p",[t("strong",[a._v("验证依赖添加成功")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/adddependences7.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"_7-2-依赖获取方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-依赖获取方式"}},[a._v("#")]),a._v(" 7.2 依赖获取方式")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://mvnrepository.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("搜索依赖的网站"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("p",[t("strong",[a._v("步骤1：在搜索栏中输入要添加的依赖")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/seachdependencebysite1.png",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("步骤2：选择所要的依赖和其版本")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/seachdependencebysite2.png",alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/seachdependencebysite3.png",alt:""}})]),a._v(" "),t("p",[t("strong",[a._v("步骤3：拷贝对应配置到 pom.xml 中")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/seachdependencebysite4.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"_7-3-使用-maven-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-使用-maven-命令"}},[a._v("#")]),a._v(" 7.3 使用 Maven 命令")]),a._v(" "),t("p",[a._v("在 Maven Projects 窗口，双击对应命令即可：")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/usermavencmdinidea.png",alt:""}}),t("br")]),a._v(" "),t("h2",{attrs:{id:"八、maven-构建web-项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、maven-构建web-项目"}},[a._v("#")]),a._v(" 八、Maven 构建Web 项目")]),a._v(" "),t("h3",{attrs:{id:"_8-1-创建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1-创建项目"}},[a._v("#")]),a._v(" 8.1 创建项目")]),a._v(" "),t("p",[t("strong",[a._v("选择建的是 Jakarta EE 项目")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/image-20230524173808651.png",alt:""}}),t("br")]),a._v(" "),t("p",[a._v("确定后之后点击 Next。")]),a._v(" "),t("p",[t("strong",[a._v("选择使用JavaEE8 版本")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/image-20230524174008518.png",alt:""}}),t("br")]),a._v(" "),t("h3",{attrs:{id:"_8-2-配置-tomcat-插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2-配置-tomcat-插件"}},[a._v("#")]),a._v(" 8.2 配置 Tomcat 插件")]),a._v(" "),t("p",[a._v("在 pom.xml 中删除war插件，不需要，然后添加tomcat插件")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugins")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.apache.tomcat.maven"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("tomcat7-maven-plugin"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("2.1"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("80"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 端口 --\x3e")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("/"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("path")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 上下路径 --\x3e")]),a._v("\n                "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("uriEncoding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("UTF-8"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("uriEncoding")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("\x3c!-- 针对 GET 方式乱码处理 --\x3e")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("configuration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("plugins")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("build")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br")])]),t("h3",{attrs:{id:"_8-3-启动项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-3-启动项目"}},[a._v("#")]),a._v(" 8.3 启动项目")]),a._v(" "),t("p",[t("em",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/startproject.png",alt:""}})])]),a._v(" "),t("h2",{attrs:{id:"九、概念解释"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#九、概念解释"}},[a._v("#")]),a._v(" 九、概念解释")]),a._v(" "),t("h3",{attrs:{id:"_9-1-坐标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-坐标"}},[a._v("#")]),a._v(" 9.1 坐标")]),a._v(" "),t("h4",{attrs:{id:"_9-1-1-数学中的坐标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-1-数学中的坐标"}},[a._v("#")]),a._v(" 9.1.1 数学中的坐标")]),a._v(" "),t("p",[a._v("在空间中，使用 X、Y、Z 三个向量可以唯一的定位空间中的任意一个点。")]),a._v(" "),t("h4",{attrs:{id:"_9-1-2-maven-中的坐标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-1-2-maven-中的坐标"}},[a._v("#")]),a._v(" 9.1.2 Maven 中的坐标")]),a._v(" "),t("p",[a._v("标识项目或者依赖在仓库中的位置。主要由下面构成：")]),a._v(" "),t("ul",[t("li",[a._v("groupId：项目名称，一般使用公司或组织域名倒写，域名具有唯一性，区分不同公司；")]),a._v(" "),t("li",[a._v("artifactId：项目中 Maven 项目/模块名称，区分同一个公司的项目；")]),a._v(" "),t("li",[a._v("version：项目版本，区分同一个项目不同时期的特点。")])]),a._v(" "),t("h3",{attrs:{id:"_9-2-依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-依赖"}},[a._v("#")]),a._v(" 9.2 依赖")]),a._v(" "),t("p",[a._v("配置项目所要依赖的 jar，在 pom.xml 使用 dependency 元素配置，通过坐标先从本地仓库找，若没有再从远程仓库找。")]),a._v(" "),t("h4",{attrs:{id:"_9-2-1-scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-1-scope"}},[a._v("#")]),a._v(" 9.2.1 scope")]),a._v(" "),t("p",[a._v("Maven 在编译，测试，运行的时候，各需要一套 classpath（比如编译的时候会有编译的 classpath，测试的时候会有测试的 classpath）。scope 表明该依赖的项目和三个 classpath 的关系，即表示依赖什么阶段起作用，什么阶段不起作用。")]),a._v(" "),t("p",[a._v("scope 主要可选值：")]),a._v(" "),t("ul",[t("li",[a._v("compile：默认，适用于所有阶段，会随着项目一起发布，在编译，测试，运行时都有效；")]),a._v(" "),t("li",[a._v("provided：编译和测试阶段使用；典型的如 servlet-api.jar，打包时不需要，容器来提供；")]),a._v(" "),t("li",[a._v("runtime：测试和运行阶段使用，用于接口和实现分离，典型的如 jdbc 具体驱动实现；")]),a._v(" "),t("li",[a._v("test：测试阶段使用，不会随项目发布，如 junit。")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/langfeiyes/images-khub/scopeofdependence.png",alt:""}})]),a._v(" "),t("h4",{attrs:{id:"_9-2-2-传递性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-2-传递性"}},[a._v("#")]),a._v(" 9.2.2 传递性")]),a._v(" "),t("p",[a._v("Maven 的依赖是具有传递性的，比如 A -> B，B -> C，那么 A 间接的依赖于 C，这就是依赖的传递性，其中 A 对于 B 是第一直接依赖，B 对于 C 是第二直接依赖，C 为 A 的传递性依赖。依赖的传递性可以解决依赖繁琐的问题。")]),a._v(" "),t("h2",{attrs:{id:"十、小结与作业"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十、小结与作业"}},[a._v("#")]),a._v(" 十、小结与作业")]),a._v(" "),t("h3",{attrs:{id:"_10-1-小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-1-小结"}},[a._v("#")]),a._v(" 10.1 小结")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("了解 Maven 是什么，为什么要使用 Maven。")])]),a._v(" "),t("li",[t("p",[a._v("掌握 Maven 安装及配置。")])]),a._v(" "),t("li",[t("p",[a._v("熟悉 Maven 项目目录结构，知道什么类型文件放到什么目录里。")])]),a._v(" "),t("li",[t("p",[a._v("掌握在开发工具中搭建基于 Maven 构建 JavaSE 项目。")])]),a._v(" "),t("li",[t("p",[a._v("掌握在开发工具中搭建基于 Maven 构建 JavaWeb 项目。")])])]),a._v(" "),t("h3",{attrs:{id:"_10-2-作业"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-2-作业"}},[a._v("#")]),a._v(" 10.2 作业")]),a._v(" "),t("ul",[t("li",[a._v("画标准 Maven 项目树状结构image，并标识什么目录里面放置什么文件。")]),a._v(" "),t("li",[a._v("完成 Maven 安装及配置。")]),a._v(" "),t("li",[a._v("完成在开发工具中搭建 Maven 构建 JavaSE 项目，编写编写一个测试类，打印当前系统时间。")]),a._v(" "),t("li",[a._v("完成在开发工具中使用 Maven 构建 JavaWeb 项目，能处理路径为 /hello 请求 ，响应 HTML 格式内容，页面显示 Hello Maven。")]),a._v(" "),t("li",[a._v("完成对之前 Web CRUD 项目进行改造，使用 Maven 来构建。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);