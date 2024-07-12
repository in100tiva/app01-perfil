document.addEventListener('DOMContentLoaded', () => {
    const profileContainer = document.querySelector('.profile-container');
    const infoLabels = document.querySelectorAll('.info-label');
    const infoLinks = document.querySelectorAll('.info-value a');
    const classeSelect = document.getElementById('classe-select');

    const classColors = {
        'front-end': 'var(--front-end-color)',
        'back-end': 'var(--back-end-color)',
        'mobile-android': 'var(--mobile-android-color)',
        'mobile-ios': 'var(--mobile-ios-color)',
        'devops': 'var(--devops-color)',
        'analista-dados': 'var(--analista-dados-color)'
    };

    function updateColors(selectedClass) {
        const selectedColor = classColors[selectedClass];
        if (selectedColor) {
            profileContainer.style.borderColor = selectedColor;
            infoLabels.forEach(label => {
                label.style.color = selectedColor;
            });
            infoLinks.forEach(link => {
                link.style.color = selectedColor;
            });
        } else {
            profileContainer.style.borderColor = 'transparent';
            infoLabels.forEach(label => {
                label.style.color = 'var(--primary-color)';
            });
            infoLinks.forEach(link => {
                link.style.color = 'var(--text-color)';
            });
        }
    }

    fetch('data/profileData.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('nome').innerText = data.nome;
            document.getElementById('email').innerText = data.email;
            document.getElementById('telefone').innerText = data.telefone;
            document.getElementById('localizacao').innerText = data.localizacao;
            document.getElementById('linkedin').href = data.linkedin;
            document.getElementById('linkedin').innerText = data.linkedin;
            document.getElementById('github').href = data.github;
            document.getElementById('github').innerText = data.github;
            document.getElementById('classe-select').value = data.classe;

            updateColors(data.classe);
        })
        .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

    classeSelect.addEventListener('change', (event) => {
        const selectedClass = event.target.value;
        updateColors(selectedClass);
    });
});
