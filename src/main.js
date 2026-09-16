// FangNet Desktop hub — opens each service in its own native window.
// We use Tauri WebviewWindows (not iframes) because Lemmy/Nextcloud send
// X-Frame-Options headers that block embedding.

const { WebviewWindow } = window.__TAURI__.webviewWindow;

const SERVICES = {
  community: { title: "FangNet Community", url: "https://fangnet.me" },
  chat: { title: "FangNet Chat", url: "https://chat.fangnet.me" },
  cloud: { title: "FangNet Cloud", url: "https://cloud.fangnet.me" },
  fangos: { title: "FangOS", url: "https://os.fangnet.me" },
};

async function openService(key) {
  const svc = SERVICES[key];
  if (!svc) return;

  const existing = await WebviewWindow.getByLabel(key);
  if (existing) {
    await existing.setFocus();
    return;
  }

  new WebviewWindow(key, {
    url: svc.url,
    title: svc.title,
    width: 1280,
    height: 860,
    center: true,
  });
}

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => openService(card.dataset.service));
});
