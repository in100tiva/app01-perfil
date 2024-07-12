
const classeSelect = document.getElementById('classe-select');
const profileContainer = document.querySelector('.profile-container');

const classColors = {
    'front-end': 'var(--front-end-color)',
    'back-end': 'var(--back-end-color)',
    'mobile-android': 'var(--mobile-android-color)',
    'mobile-ios': 'var(--mobile-ios-color)',
    'devops': 'var(--devops-color)',
    'analista-dados': 'var(--analista-dados-color)'
};

classeSelect.addEventListener('change', (event) => {
    const selectedClass = event.target.value;
    if (selectedClass) {
        profileContainer.style.borderColor = classColors[selectedClass];
    } else {
        profileContainer.style.borderColor = 'transparent';
    }
});
