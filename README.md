# static-fanohm

## 项目coding统一临时标准

### css coding format

1. 所有命名小写字母、数字，并用中划线组成
2. 标签属性值用("")
3. img 标签必须要有alt属性
4. 标签中最好不要用style
5. 遵循语义化标签使用规则，有利于SEO
6. 尽量不缩写，除非一看就明白的单词
7. 文件必须用UTF-8编码
8. css 嵌套最好不要超过4层，如若超过用名称前面加域，并提出来
9. ID 用驼峰法命名
10. 每一条规则的大括号 { 前添加空格，结尾的{ 必须单独一行
11. 规则与规则之间空行，规则内部不空行
12. 链接的样式请严格按照如下顺序添加： a:link -> a:visited -> a:hover -> a:active
13. 每个声明结束都应该带一个分号，不管是不是最后一个声明
14. 合并margin、padding、border的-left/-top/-right/-bottom的设置
15. 如果可以，颜色尽量用三位字符表示，例如#AABBCC写成#ABC
16. 字体最好用偶数大小
17. 在保持代码解耦的前提下，尽量合并重复的样式
18. 选择器应该在满足功能的基础上尽量简短，减少选择器嵌套，查询消耗。但是一定要避免覆盖全局样式设置
19. 字体值大小小于1时省略小数点前面的0，如：bad->font-size: 0.8rem, good->font-size: .8rem


** css 布局命名统一 **

1. *-wrap 表示外部布局块
2. header 用于最外层头部header
3. nav 导航条
4. *-content 表示内容
5. footer 用于外层footer
6. *-main 用于主要内容
7. *-row 表示行
8. *-col 表示列
9. *-menu 菜单
10. *-submenu 子菜单
11. *-sidebar 侧边栏
12. *-title 标题
13. 以下可选常用命名： page、wrap、layout、header(head)、footer、
	content(cont)、menu、nav、main、submain、sidebar(side)、logo、banner、
	title(tit)、popo(pop)、icon、note、btn、txt、iblock、window(win)、tips等

** css 其他规范 **

1. 不要轻易改动全站级CSS和通用CSS库。改动后，要经过全面测试
2. 尽量不要在CSS中使用!important
3. 层级(z-index)必须清晰明确，页面弹窗、气泡为最高级（最高级为999），不同弹窗气泡之间可在三位数之间调整；普通区块为10-90内10的倍数；区块展开、弹出为当前父层级上个位增加，禁止层级间盲目攀比
4. 三级页面标准：
	A级－交互和视觉完全符全设计的要求
    B级－视觉上允许有所差异，但不破坏页面的整体效果
    C级－可忽略设计上的细节，但不防碍使用

##前端管理规范建议
1.一定要有前端leader，并且需要让leader review 每一次项目成员提交的代码，而不只是看实际的效果是否合格，不合格的代码（js, css, html）都需要返回去重写。保证项目代码的干净和最优状态
2.前端项目需要增加项目leader review code 的时间。项目流程：拿到设计图 -> 分析需求 -> 搭建框架 -> 分配工作 -> 检查代码是否合格 -> 测试 -> 提交代码
