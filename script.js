const BASE_PATH = 'public'; 

const assets = {
    social: ['facebook.png', 'gmail.png', 'instagram.png', 'linkedin.png', 'telegram.png', 'telegram2.png', 'tiktok.png', 'twitter.png', 'youtube.png', 'snapchat.png'],
    logos: ['canva.png', 'valuenetwork.png', 'founderslens.png', 'kce_logo_transparent.png', 'kce_logo.jpeg', 'knust-logo.png', 'KSB logo.png', 'lamla_logo.png', 'pivota_logo.png', 'zonda_logo.png'],
    enactus: ['404One.jpg', 'carisca.png', 'enactus-knust-logo-black.png', 'enactus-logo-black.png', 'kbi.png', 'knustLogo.png', 'map.png', 'Origami.png']
};

function createCard(name, folder) {
    // Construct the path carefully
    const fullPath = `/${BASE_PATH}/${folder}/${name}`;
    const card = document.createElement('div');
    card.className = 'asset-card';
    card.innerHTML = `
        <div class="preview">
            <img src="${fullPath}" alt="${name}" onerror="this.src='https://via.placeholder.com/150/0f172a/FFFFFF?text=Asset+NotFound'">
        </div>
        <div class="info">
            <h3 class="name">${name.split('.')[0].replace(/_/g, ' ').toUpperCase()}</h3>
            <div class="actions">
                <button class="btn-copy" onclick="copyUrl('${fullPath}')">COPY URL</button>
                <a href="${fullPath}" download="${name}" class="btn-download">DOWNLOAD</a>
            </div>
        </div>
    `;
    return card;
}

// Render groups
Object.keys(assets).forEach(key => {
    const grid = document.getElementById(`${key}-grid`);
    const folder = key === 'enactus' ? 'logos/enactus' : (key === 'social' ? 'icons/social' : 'logos');
    assets[key].forEach(file => grid.appendChild(createCard(file, folder)));
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

// Search Feature
document.getElementById('assetSearch').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    document.querySelectorAll('.asset-card').forEach(card => {
        const name = card.querySelector('.name').innerText.toLowerCase();
        card.style.display = name.includes(term) ? 'block' : 'none';
    });
});