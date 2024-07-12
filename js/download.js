function getProfileData() {
    return {
        nome: document.getElementById('nome').innerText,
        email: document.getElementById('email').innerText,
        telefone: document.getElementById('telefone').innerText,
        localizacao: document.getElementById('localizacao').innerText,
        linkedin: document.getElementById('linkedin').href,
        github: document.getElementById('github').href,
        classe: document.getElementById('classe-select').value
    };
}

function downloadJSON(obj, filename) {
    const jsonStr = JSON.stringify(obj, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.querySelector('.edit-profile').addEventListener('click', () => {
    const profileData = getProfileData();
    downloadJSON(profileData, 'profileData.json');
});
