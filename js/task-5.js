// Функція, яка генерує випадковий hex-код кольору
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215) // Випадкове число від 0 до 16777215
        .toString(16)                               // Перетворюємо число в шістнадцяткову систему
        .padStart(6, 0)}`;                          // Додаємо нулі спереду, якщо код коротший за 6 символів
}

// Знаходимо елемент, в якому буде відображатися код кольору (class="color")
const textColor = document.querySelector(".color");

// Знаходимо <body>, щоб змінювати його колір фону
const bodyColor = document.querySelector("body");

// Знаходимо кнопку з класом "change-color"
const color = document.querySelector(".change-color");

// Додаємо обробник події кліку по кнопці
color.addEventListener("click", () => {
    // Генеруємо випадковий колір
    const randomColor = getRandomHexColor();

    // Змінюємо колір фону сторінки на згенерований
    bodyColor.style.backgroundColor = randomColor;

    // Виводимо значення кольору в текстовий елемент
    textColor.textContent = randomColor;
});