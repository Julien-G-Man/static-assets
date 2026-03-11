const BASE_PATH = 'public'; 

const assets = {
    social: ['facebook.png', 'gmail.png', 'instagram.png', 'linkedin.png', 'telegram.png', 'telegram2.png', 'tiktok.png', 'twitter.png', 'youtube.png', 'snapchat.png'],
    logos: ['canva.png', 'valuenetwork.png', 'founderslens.png', 'kce_logo_transparent.png', 'kce_logo.jpeg', 'knust-logo.png', 'KSB logo.png', 'lamla_logo.png', 'pivota_logo.png', 'zonda_logo.png'],
    enactus: ['carisca.png', 'enactus-knust-logo-black.png', 'enactus-logo-black.png', 'kbi.png', 'knustLogo.png', 'map.png', 'Origami.png', 'enactus_tshirt_black.jpeg', 'enactus_tshirt_blue.jpg.jpeg', 'enactus_tshirt_gray.jpg.jpeg', 'enactus_tshirt_grey_with_white_elements.jpg.jpeg']
};

const enactusShirts = new Set([
    'enactus_tshirt_black.jpeg',
    'enactus_tshirt_blue.jpg.jpeg',
    'enactus_tshirt_gray.jpg.jpeg',
    'enactus_tshirt_grey_with_white_elements.jpg.jpeg'
]);

function createCard(name, folder) {
    const fileName = name.split('/').pop();
    // Construct the path carefully
    const fullPath = folder ? `/${BASE_PATH}/${folder}/${name}` : `/${BASE_PATH}/${name}`;
    const card = document.createElement('div');
    card.className = 'asset-card';
    card.innerHTML = `
        <div class="preview">
            <img src="${fullPath}" alt="${name}" onerror="this.src='https://via.placeholder.com/150/0f172a/FFFFFF?text=Asset+NotFound'">
        </div>
        <div class="info">
            <h3 class="name">${fileName.split('.')[0].replace(/_/g, ' ').toUpperCase()}</h3>
            <div class="actions">
                <button class="btn-copy" onclick="copyUrl('${fullPath}')">COPY URL</button>
                <a href="${fullPath}" download="${fileName}" class="btn-download">DOWNLOAD</a>
            </div>
        </div>
    `;
    return card;
}

// Render groups
Object.keys(assets).forEach(key => {
    const grid = document.getElementById(`${key}-grid`);
    const defaultFolder = key === 'enactus' ? 'logos/enactus' : (key === 'social' ? 'icons/social' : 'logos');
    assets[key].forEach(file => {
        const folder = key === 'enactus' && enactusShirts.has(file) ? 'shirts' : defaultFolder;
        grid.appendChild(createCard(file, folder));
    });
});

function copyUrl(path) {
    // This ensures it copies the full domain + the path
    const url = window.location.origin + path;
    navigator.clipboard.writeText(url).then(() => {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.navbar');
navToggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', isOpen);
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
});

// Search Feature
document.getElementById('assetSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.asset-card').forEach(card => {
        const name = card.querySelector('.name').innerText.toLowerCase();
        card.style.display = name.includes(term) ? 'block' : 'none';
    });
});