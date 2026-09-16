# FangNet Desktop

A native desktop hub for Kiefer's self-hosted services, built with [Tauri v2](https://v2.tauri.app/).

The main window is a branded launcher with big buttons for each service:

- **Community** — https://fangnet.me (Lemmy)
- **Chat** — https://chat.fangnet.me (Stoat chat)
- **Cloud** — https://cloud.fangnet.me (Nextcloud)
- **FangOS** — https://os.fangnet.me (the distro site)

Clicking a button opens that service in its own dedicated native window
(Tauri `WebviewWindow` — not iframes, since Lemmy/Nextcloud send
`X-Frame-Options` headers that block embedding).

## Downloads

Windows (`.exe` installer), Linux (AppImage), and macOS (`.dmg`) builds are
produced automatically by GitHub Actions on every push to `main` — grab them
from the [Actions tab](../../actions/workflows/build.yml).

> **macOS note:** the `.dmg` is unsigned (hobby project, no Apple Developer
> account), so Gatekeeper will block it on first launch. Right-click the app
> and choose **Open**, then confirm, and it'll run fine after that.

## Local development

Requires the [Tauri v2 prerequisites](https://v2.tauri.app/start/prerequisites/)
(Rust + WebKitGTK on Linux, WebView2 on Windows):

```sh
cargo install tauri-cli --version "^2"
cd src-tauri
cargo tauri dev
```
