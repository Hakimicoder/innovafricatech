const yearRadio = document.getElementById('year');
const yearLabel = document.querySelector('.year');
const annuel = document.querySelector('.pip2');

const monthRadio = document.getElementById('month');
const monthLabel = document.querySelector('.month');
const mois = document.querySelector('.pip');

yearRadio.addEventListener('change', () => {
    yearLabel.classList.add('active');
    monthLabel.classList.remove('active');
    annuel.style.display = 'block';
    mois.style.display = 'none';
    monthRadio.checked = false;
});

monthRadio.addEventListener('change', () => {
    monthLabel.classList.add('active');
    yearLabel.classList.remove('active');
    mois.style.display = 'block';
    annuel.style.display = 'none';
    yearRadio.checked = false;
});