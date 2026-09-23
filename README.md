# 波奇酱

Komari 监控主题。布局和数据沿用 [Gloria Universe](https://github.com/TonyStarkJr2021/komari-theme-Gloria-Universe)，视觉改成波奇酱：粉色玻璃卡片、霓虹粉夜里模式，以及四张明暗 / 桌面 / 手机背景。

这是粉丝向主题，和动画、漫画、音乐的权利人没有关系。背景图由主题作者提供。主题不内置音乐；歌曲名只作为节点标签，试听仍只播放管理员自己放进去、并且有权使用的音频。

基础工程是 [komari-theme-Glassmorphism](https://github.com/sanrokamlan-prog/komari-theme-Glassmorphism)，MIT。

## 背景

| 模式 | 桌面                      | 手机（宽度不超过 768px） |
| ---- | ------------------------- | ------------------------ |
| 明亮 | `boqi_white_desktop.webp` | `boqi_white_phone.webp`  |
| 夜里 | `boqi_dark_desktop.webp`  | `boqi_dark_phone.webp`   |

文件在 `public/images/bocchi/`。自定义背景留空时使用这四张。人物在画面左侧，右侧有一层遮罩，方便看卡片。

## 安装

1. 登录 Komari 后台。
2. 打开「设置 → 主题管理」。
3. 上传构建出的 `komari-theme-Bocchi-v*.zip`。
4. 启用 `Bocchi`。

不要上传源码压缩包。

## 本地开发

需要 Node.js `^20.19.0` 或 `>=22.12.0`。

```bash
pnpm install
pnpm run dev
pnpm run build
```

构建产物包含 `komari-theme.json`、`preview.png` 和 `dist/`。
