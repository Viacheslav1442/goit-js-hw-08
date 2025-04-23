// Знаходимо поле вводу з id="name-input"
const test = document.querySelector("#name-input");

// Знаходимо span з id="name-output", куди буде виводитись текст
const outText = document.querySelector("#name-output");

// Додаємо слухача події на input (при введенні тексту)
test.addEventListener("input", () => {
    // Обрізаємо пробіли на початку та в кінці введеного значення
    const trimmedValue = test.value.trim();

    // Якщо щось введено (тобто не пустий рядок)
    if (trimmedValue) {
        // Виводимо введений текст у span та зберігаємо у змінну result
        const result = (outText.textContent = trimmedValue);
        console.log(result); // Виводимо у консоль
    } else {
        // Якщо поле порожнє, встановлюємо текст "Anonymous"
        const errorResult = (outText.textContent = "Anonymous");
        console.log(errorResult); // Виводимо у консоль
    }
});