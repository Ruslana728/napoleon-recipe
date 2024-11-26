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