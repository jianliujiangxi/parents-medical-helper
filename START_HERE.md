# 从这里开始

## 方案 A：30 秒先看效果（不需要 Node/npm）

直接打开：

```text
demo/index.html
```

这是一个零依赖离线演示版，已经包含：

- 7步问答
- 6条核心路径
- 江西→广州默认场景
- 急诊、已住院未备案、已自费出院
- 官方入口
- 长辈模式
- 办事卡
- 打印/保存 PDF
- 复制文字版

它主要用于快速查看产品交互，不是最终发布形态。

## 方案 B：运行正式 Nuxt 工程

先安装 Node.js 20 或 22，然后在项目根目录：

```bash
npm install
npm run dev
```

浏览器打开终端给出的本地地址。

## 发布前检查

```bash
npm run test
npm run typecheck
npm run check:policy
npm run generate
```

如需联网检查官方链接：

```bash
npm run check:links
```

静态产物：

```text
.output/public/
```

把这个目录部署到静态托管即可。

## 你下一步最应该改什么

不要先改 UI。

优先打开：

```text
data/policy-facts.json
data/sources.json
data/actions.ts
```

把你进一步核验的江西具体统筹地区规则补进去，同时给每条规则增加测试用例。
