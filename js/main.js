// 1. 初始化当前语言 (增强版)
let currentLang = (() => {
    // A. 检查 URL 参数 (?lang=zh)
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    if (langParam && i18nData[langParam]) return langParam;

    // B. 检查本地存储
    const savedLang = localStorage.getItem('swiftconvert_lang');
    if (savedLang && i18nData[savedLang]) return savedLang;

    // C. 【新增】检查浏览器默认设置
    // navigator.languages 获取的是一个数组，按优先级排列
    const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
    for (let lang of browserLangs) {
        const shortLang = lang.split('-')[0]; // 处理 zh-CN 或 en-US
        if (i18nData[shortLang]) {
            return shortLang;
        }
    }

    // D. 最终保底：英语
    return 'en';
})();

/**
 * 核心翻译函数
 * 负责扫描 DOM 中的 data-i18n 并应用翻译，同时同步 UI 状态
 */
function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    
    // 翻译所有带 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (i18nData[lang] && i18nData[lang][key]) {
            el.innerHTML = i18nData[lang][key];
        }
    });

    // --- 同步 UI 控件状态 (解决动态加载后的衔接问题) ---

    // 1. 同步桌面端导航栏切换按钮的文字
    const langBtnText = document.getElementById('lang-btn-text');
    if (langBtnText) {
        langBtnText.innerText = lang === 'en' ? '中文' : 'English';
    }

    // 2. 同步移动端下拉框的值
    const langSelectMobile = document.getElementById('lang-select-mobile');
    if (langSelectMobile) {
        langSelectMobile.value = lang;
    }
    
    localStorage.setItem('swiftconvert_lang', lang);
}

/**
 * 动态加载组件并初始化全站交互逻辑
 */
async function initSite() {
    // 1. 并行加载 Nav 和 Footer (使用 Promise.all 提升加载速度)
    const containers = [
        { id: 'nav-placeholder', path: 'nav.html' },
        { id: 'footer-placeholder', path: 'footer.html' }
    ];

    await Promise.all(containers.map(async (item) => {
        const el = document.getElementById(item.id);
        if (el) {
            try {
                const res = await fetch(item.path);
                if (res.ok) {
                    el.innerHTML = await res.text();
                }
            } catch (err) {
                console.error(`Failed to load component: ${item.path}`, err);
            }
        }
    }));

    // 2. 【核心修复】组件加载完成后，立即应用翻译
    // 这确保了动态插入的 footer 和 nav 也能被翻译
    applyLanguage(currentLang);

    // --- 3. 移动端菜单开关逻辑 ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuPath = document.getElementById('menu-path');

    if (menuBtn && mobileMenu) {
        menuBtn.onclick = () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            if (!isHidden) {
                menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                menuPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        };
    }

    // --- 4. 移动端语言下拉框逻辑 ---
    const langSelectMobile = document.getElementById('lang-select-mobile');
    if (langSelectMobile) {
        langSelectMobile.onchange = (e) => {
            applyLanguage(e.target.value);
            
            // 切换后自动平滑收起菜单
            if (mobileMenu) mobileMenu.classList.add('hidden');
            if (menuPath) menuPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        };
    }

    // --- 5. 桌面端语言切换按钮逻辑 ---
    // 因为 nav.html 是动态加载的，必须在 initSite 内部重新寻找并绑定
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.onclick = (e) => {
            e.preventDefault();
            // 切换语言
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            applyLanguage(newLang);
        };
    }
}

// 启动初始化
document.addEventListener('DOMContentLoaded', initSite);
