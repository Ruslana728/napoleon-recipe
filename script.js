const image = document.querySelector('.card img');

// Функція для анімації зображення
function animateImage() {
    image.style.transition = 'transform 0.5s'; // Додаємо плавний перехід
    image.style.transform = 'scale(1.1)'; // Збільшуємо зображення
    setTimeout(() => {
        image.style.transform = 'scale(1)'; // Повертаємо до початкового розміру
    }, 500); // Затримка на 500 мілісекунд
}

// Додаємо подію для анімації при наведенні курсору на зображення
image.addEventListener('mouseover', animateImage);

// Отримуємо елемент відео
const video = document.querySelector('iframe');

// Функція для анімації відео
function animateVideo() {
    video.style.transition = 'transform 0.5s'; // Додаємо плавний перехід
    video.style.transform = 'scale(1.1)'; // Збільшуємо відео
    setTimeout(() => {
        video.style.transform = 'scale(1)'; // Повертаємо до початкового розміру
    }, 500); // Затримка на 500 мілісекунд
}

// Додаємо подію для анімації при наведенні курсору на відео
video.addEventListener('mouseover', animateVideo);

const header = document.querySelector('h1');

// Функція для анімації заголовка
function animateHeader() {
    header.style.transition = 'transform 0.5s, color 0.5s'; // Додаємо плавний перехід
    header.style.transform = 'scale(1.1)'; // Збільшуємо заголовок
    header.style.color = '#FF5733'; // Змінюємо колір заголовка

    // Повертаємо до початкового стану
    setTimeout(() => {
        header.style.transform = 'scale(1)'; // Повертаємо до початкового розміру
        header.style.color = ''; // Повертаємо початковий колір
    }, 500); // Затримка на 500 мілісекунд
}

// Додаємо подію для анімації при наведенні курсору на заголовок
header.addEventListener('mouseover', animateHeader);