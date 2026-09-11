(() => {
  const pathname = location.pathname;
  const filename = pathname.split('/').pop() || 'index.html';

  const addLink = (container, href, text, className = '') => {
    if (!container || [...container.querySelectorAll('a')].some(a => a.getAttribute('href') === href)) return;
    const a = document.createElement('a');
    a.href = href;
    a.textContent = text;
    if (className) a.className = className;
    container.appendChild(a);
  };

  if (filename === 'index.html' || filename === '') {
    const nav = document.querySelector('nav');
    addLink(nav, 'tools.html', 'Tools');
    addLink(nav, 'baseline.html', 'Baseline');
  }

  if (filename === 'tools.html') {
    const topbar = document.querySelector('.topbar');
    addLink(topbar, 'baseline.html', '144k Baseline', 'btn');
  }

  const TOOL_MAP = {
    'stands-pair': 'stands',
    'pry-bar': 'pry',
    'impact-sockets': 'impact-sockets',
    'floor-jack': 'jack',
    'stands-second': 'second-stands',
    'wheel-chocks': 'chocks',
    'torque-half': 'torque',
    'impact-high': 'impact',
    'multimeter': 'meter',
    'trim-tools': 'trim',
    'crimper': 'crimper',
    'deadening-roller': 'deadening-kit',
    'rivnut': 'rivnut'
  };

  try {
    if (filename === 'tools.html') {
      const detailKey = 'forever-z-tools-v1';
      let detail = {};
      try { detail = JSON.parse(localStorage.getItem(detailKey) || '{}'); } catch (_) {}

      Object.entries(TOOL_MAP).forEach(([detailId, mainId]) => {
        const mainKey = `forever-z-nismo-v1:tool:${mainId}`;
        const box = document.querySelector(`[data-tool="${detailId}"]`);
        if (!box) return;
        if (!Object.prototype.hasOwnProperty.call(detail, detailId)) {
          const mainValue = localStorage.getItem(mainKey);
          if (mainValue !== null) {
            box.checked = mainValue === '1';
            detail[detailId] = box.checked;
          }
        }
        localStorage.setItem(mainKey, box.checked ? '1' : '0');
        box.addEventListener('change', () => {
          localStorage.setItem(mainKey, box.checked ? '1' : '0');
        });
      });
      localStorage.setItem(detailKey, JSON.stringify(detail));
    }

    if (filename === 'index.html' || filename === '') {
      let detail = {};
      try { detail = JSON.parse(localStorage.getItem('forever-z-tools-v1') || '{}'); } catch (_) {}
      Object.entries(TOOL_MAP).forEach(([detailId, mainId]) => {
        if (!Object.prototype.hasOwnProperty.call(detail, detailId)) return;
        const box = document.querySelector(`[data-tool="${mainId}"]`);
        if (box && box.checked !== !!detail[detailId]) {
          box.checked = !!detail[detailId];
          box.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    }
  } catch (_) {}

  const style = document.createElement('style');
  style.textContent = `
    #fz-data-dock{position:fixed;right:12px;bottom:12px;z-index:9999;display:flex;align-items:center;gap:7px;padding:8px;border:1px solid #303844;border-radius:14px;background:rgba(9,13,19,.94);box-shadow:0 12px 34px rgba(0,0,0,.35);backdrop-filter:blur(12px);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    #fz-data-dock span{font-size:10px;color:#9ca7b7;padding:0 4px}
    #fz-data-dock button{border:1px solid #303844;background:#111720;color:#eef1f5;border-radius:10px;padding:7px 9px;font-size:10px;font-weight:800;cursor:pointer}
    #fz-data-dock button:hover{border-color:#6e3d44}
    @media(max-width:620px){#fz-data-dock{left:8px;right:8px;justify-content:center}#fz-data-dock span{display:none}}
  `;
  document.head.appendChild(style);

  const dock = document.createElement('div');
  dock.id = 'fz-data-dock';
  dock.innerHTML = '<span>Entries save on this browser</span><button type="button" data-backup>Backup</button><button type="button" data-restore>Restore</button><input type="file" accept="application/json" hidden>';
  document.body.appendChild(dock);

  const input = dock.querySelector('input');
  dock.querySelector('[data-backup]').addEventListener('click', () => {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith('forever-z-')) data[key] = localStorage.getItem(key);
    }
    const payload = { version: 1, exportedAt: new Date().toISOString(), origin: location.origin, data };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `forever-z-backup-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  dock.querySelector('[data-restore]').addEventListener('click', () => input.click());
  input.addEventListener('change', async () => {
    const file = input.files && input.files[0];
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      if (!parsed || !parsed.data || typeof parsed.data !== 'object') throw new Error('Invalid backup');
      if (!confirm('Restore Forever Z local data from this backup? Current local entries with the same keys will be overwritten.')) return;
      Object.entries(parsed.data).forEach(([k, v]) => {
        if (k.startsWith('forever-z-') && typeof v === 'string') localStorage.setItem(k, v);
      });
      location.reload();
    } catch (_) {
      alert('That file does not look like a valid Forever Z backup.');
    } finally {
      input.value = '';
    }
  });
})();