function showSection(sectionId) {
    // Piilota osiot
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Näytä osio
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // Päivitä
    window.location.hash = sectionId;
}

function loadSectionFromHash() {
    // Hae ankkuri
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
    } else {
        showSection('etusivu');
    }
}

// Värit
let selectedColor1 = '';
let selectedColor2 = '';

// Aseta värit
function setColor(color) {
    if (!selectedColor1) {
        selectedColor1 = color;
        document.getElementById('color-box1').style.backgroundColor = color;
    } else {
        selectedColor2 = color;
        document.getElementById('color-box2').style.backgroundColor = color;
    }
}

// Tyhjennä värit
function clearColors() {
    selectedColor1 = '';
    selectedColor2 = '';
    document.getElementById('color-box1').style.backgroundColor = '#FFFFFF';
    document.getElementById('color-box2').style.backgroundColor = '#FFFFFF';
}

// Lataa osio
window.addEventListener('load', loadSectionFromHash);