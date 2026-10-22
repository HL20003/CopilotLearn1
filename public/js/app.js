// Gói zip chứa toàn bộ file demo (tạo bằng demo-files/_gen/sync_site_files.py)
const DEMO_ZIP_URL = 'files/copilot-workshop-demo-files.zip';

// File demo cho buổi học. url là đường dẫn trong thư mục files/ của site (tải về với tên đầy đủ),
// hoặc link ngoài (SharePoint) mở ở tab mới.
// Trong Markdown, viết [tên file](#file-<id>) để link tới file tương ứng.
const demoFiles = [
    { id: 'contract', name: 'Hợp đồng Dịch vụ Tổ chức Sự kiện (dự thảo).docx', desc: 'Lab 2 - Word', icon: 'word', url: 'files/hop-dong-dich-vu-to-chuc-su-kien.docx' },
    { id: 'handbook', name: 'Sổ tay Chính sách Nội bộ.docx', desc: 'Lab 2 - Word, Lab 8 - Agent Builder (knowledge source)', icon: 'word', url: 'files/so-tay-chinh-sach-noi-bo.docx' },
    { id: 'policy-sample', name: 'SAMPLE Chính sách Bảo mật Thông tin.docx', desc: 'Lab 2 - Word (phần mở rộng)', icon: 'word', url: 'files/sample-chinh-sach-bao-mat-thong-tin.docx' },
    { id: 'business', name: 'Báo cáo Kết quả Kinh doanh Q3 2026.xlsx', desc: 'Lab 1 - Copilot Chat, Lab 3 - Excel, Lab 7 - Researcher', icon: 'excel', url: 'files/bao-cao-ket-qua-kinh-doanh-q3-2026.xlsx' },
    { id: 'plan', name: 'Kế hoạch Hoạt động 2027 (dự thảo).docx', desc: 'Lab 1 - Copilot Chat, Lab 4 - PowerPoint', icon: 'word', url: 'files/ke-hoach-hoat-dong-2027.docx' },
];

// Danh sách module và file markdown tương ứng
const modules = {
    'module-1': { title: 'Module 1 - Giới thiệu Copilot và chuẩn bị', file: 'labs/module-1/index.md' },
    'module-2': { title: 'Module 2 - Viết prompt hiệu quả', file: 'labs/module-2/index.md' },
    'module-3': { title: 'Module 3 - Personalization in Copilot', file: 'labs/module-3/index.md' },
    'lab-1':    { title: 'Lab 1 - Copilot Chat', file: 'labs/lab-1/index.md' },
    'lab-2':    { title: 'Lab 2 - Copilot trong Word', file: 'labs/lab-2/index.md' },
    'lab-3':    { title: 'Lab 3 - Copilot trong Excel', file: 'labs/lab-3/index.md' },
    'lab-4':    { title: 'Lab 4 - Copilot trong PowerPoint', file: 'labs/lab-4/index.md' },
    'lab-5':    { title: 'Lab 5 - Copilot trong Outlook', file: 'labs/lab-5/index.md' },
    'lab-6':    { title: 'Lab 6 - Copilot trong Teams', file: 'labs/lab-6/index.md' },
    'lab-7':    { title: 'Lab 7 - Researcher Agent', file: 'labs/lab-7/index.md' },
    'lab-8':    { title: 'Lab 8 - Agent Builder in Copilot Chat', file: 'labs/lab-8/index.md' },
    'wrap':     { title: 'Tổng kết', file: 'labs/wrap/index.md' }
};

// Tải và hiển thị một module
async function loadModule(key, section) {
    const mod = modules[key];
    if (!mod) return;
    const content = document.getElementById('module-content');

    try {
        const res = await fetch(mod.file, { cache: 'no-cache' });
        if (!res.ok) throw new Error(`Không tải được ${mod.file}`);
        content.innerHTML = marked.parse(await res.text());
        processCustomBlocks(content);
    } catch (err) {
        content.innerHTML = `<blockquote class="note"><p>Không tải được nội dung <code>${mod.file}</code>.
            Hãy mở trang qua một web server (ví dụ VS Code Live Server) thay vì mở trực tiếp file.</p><p>${escapeHtml(err.message)}</p></blockquote>`;
    }

    updateSidebar(key);
    showView('module');
    // Cuộn tức thì (CSS smooth scroll bị ngắt khi vừa đổi nội dung), chừa chỗ cho header cố định
    const target = section && document.getElementById(section);
    const top = target ? target.getBoundingClientRect().top + window.scrollY - 80 : 0;
    window.scrollTo({ top, behavior: 'instant' });
}

// Chuyển blockquote đặc biệt thành thẻ TIP / NOTE / PROMPT
function processCustomBlocks(content) {
    content.querySelectorAll('h2, h3').forEach(h => { h.id = slugify(h.textContent); });

    content.querySelectorAll('blockquote').forEach(bq => {
        const html = bq.innerHTML;
        if (html.includes('[!TIP]')) {
            bq.className = 'tip';
            bq.innerHTML = html.replace(/\[!TIP\]/g, '').trim();
        } else if (html.includes('[!NOTE]')) {
            bq.className = 'note';
            bq.innerHTML = html.replace(/\[!NOTE\]/g, '').trim();
        } else if (html.includes('<strong>PROMPT:</strong>')) {
            const inner = html.replace(/<p><strong>PROMPT:<\/strong><\/p>/g, '').replace(/<strong>PROMPT:<\/strong>/g, '').trim();
            bq.insertAdjacentHTML('afterend', buildPromptCard(inner));
            bq.remove();
        }
    });

    content.querySelectorAll('p').forEach(p => {
        if (p.textContent.trim() === '[download-files]') p.outerHTML = buildDownloadBlock();
    });

    // Ảnh: bọc trong <figure>, chú thích lấy từ alt
    content.querySelectorAll('img').forEach(img => {
        const figure = document.createElement('figure');
        figure.className = 'content-figure';
        img.classList.add('content-img');
        // marked bọc ảnh trong <p>; thay cả <p> nếu nó chỉ chứa ảnh
        const parent = img.parentElement;
        (parent.tagName === 'P' && parent.childNodes.length === 1 ? parent : img).replaceWith(figure);
        figure.appendChild(img);
        if (img.alt) {
            const caption = document.createElement('figcaption');
            caption.textContent = img.alt;
            figure.appendChild(caption);
        }
    });

    // [tên file](#file-<id>) -> link SharePoint của file đó
    content.querySelectorAll('a[href^="#file-"]').forEach(a => {
        const file = demoFiles.find(f => `#file-${f.id}` === a.getAttribute('href'));
        if (!file) return;
        // File chưa có link SharePoint: giữ nguyên chữ, bỏ liên kết
        if (file.url === '#') {
            a.removeAttribute('href');
            a.title = 'File demo đang được cập nhật';
            return;
        }
        a.href = file.url;
        if (isLocalFile(file)) {
            a.setAttribute('download', file.name);
        } else {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
        }
        a.classList.add('file-link');
    });
}

// Thẻ prompt có nút sao chép
function buildPromptCard(innerHtml) {
    const tmp = document.createElement('div');
    tmp.innerHTML = innerHtml;
    // textContent bỏ mất số thứ tự của <ol>, nên thêm lại
    tmp.querySelectorAll('ol').forEach(ol => {
        Array.from(ol.children).forEach((li, i) => li.prepend(`${ol.start + i}. `));
    });
    const plainText = tmp.textContent.trim();

    return `<div class="prompt-card">
        <div class="prompt-card-header">
            <span class="prompt-label">Prompt</span>
            <button class="copy-btn" data-copy="${escapeAttr(plainText)}" aria-label="Sao chép prompt">
                <span class="copy-label">Sao chép</span>
            </button>
        </div>
        <div class="prompt-body">${innerHtml}</div>
    </div>`;
}

// Khối tải file demo
function buildDownloadBlock() {
    const colors = { excel: '#107c10', word: '#2b579a', powerpoint: '#d24726', pdf: '#b30b00', image: '#5c2d91' };
    const letters = { excel: 'X', word: 'W', powerpoint: 'P', pdf: 'PDF', image: 'IMG' };
    const items = demoFiles.map(f => {
        const placeholder = f.url === '#';
        const linkAttrs = placeholder ? ''
            : isLocalFile(f) ? `download="${escapeAttr(f.name)}"` : 'target="_blank" rel="noopener noreferrer"';
        return `<a href="${escapeAttr(f.url)}" class="download-item${placeholder ? ' download-item--placeholder' : ''}" ${linkAttrs}>
            <span class="download-icon" style="background:${colors[f.icon]};color:#fff;font-weight:700;font-size:${letters[f.icon].length > 1 ? 11 : 16}px">${letters[f.icon]}</span>
            <span class="download-info">
                <span class="download-name">${escapeHtml(f.name)}</span>
                <span class="download-desc">${escapeHtml(f.desc)}</span>
            </span>
        </a>`;
    }).join('');

    return `<div class="download-block">
        <div class="download-block-header">
            <span>File demo cho buổi học</span>
            <a class="folder-btn" href="${escapeAttr(DEMO_ZIP_URL)}" download="File demo Copilot Workshop.zip">⬇ Tải tất cả (.zip)</a>
        </div>
        <p class="download-block-hint">Bấm vào từng file để tải về, sau đó tải lên <strong>OneDrive</strong> của anh/chị trước khi bắt đầu Lab. Xem <a href="#module-1/cach-tai-file-word-excel-ve-may">cách tải file về và đưa lên OneDrive</a>.</p>
        <div class="download-list">${items}</div>
    </div>`;
}


// Sao chép prompt (dùng event delegation)
document.addEventListener('click', async e => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const text = btn.dataset.copy;
    try {
        await navigator.clipboard.writeText(text);
    } catch {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        ta.remove();
    }
    btn.classList.add('copied');
    btn.querySelector('.copy-label').textContent = 'Đã sao chép!';
    setTimeout(() => {
        btn.classList.remove('copied');
        btn.querySelector('.copy-label').textContent = 'Sao chép';
    }, 2000);
});

// File nằm trong site (không phải link ngoài như SharePoint)
function isLocalFile(file) {
    return !/^https?:/i.test(file.url);
}

function escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/\n/g, '&#10;');
}

function updateSidebar(activeKey) {
    document.getElementById('module-nav').innerHTML = Object.entries(modules)
        .map(([key, mod]) => `<a href="#${key}" class="${key === activeKey ? 'active' : ''}">${mod.title}</a>`)
        .join('');
}

function showView(name) {
    document.getElementById('home-view').classList.toggle('active', name === 'home');
    document.getElementById('module-view').classList.toggle('active', name === 'module');
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', name === 'home' && link.dataset.view === 'home');
    });
}

// Điều hướng bằng hash: #lab-1 mở lab, #module-1/<section> mở lab và cuộn tới mục đó
function route() {
    const [key, section] = location.hash.replace('#', '').split('/');
    if (modules[key]) loadModule(key, section);
    else showView('home');
}

// "Cách tải file Word/Excel về máy" -> "cach-tai-file-word-excel-ve-may"
function slugify(text) {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'D')
        .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        history.pushState(null, '', location.pathname);
        showView('home');
        if (link.dataset.view === 'agenda') document.querySelector('.agenda-section').scrollIntoView();
        else window.scrollTo(0, 0);
    });
});

window.addEventListener('hashchange', route);
route();
