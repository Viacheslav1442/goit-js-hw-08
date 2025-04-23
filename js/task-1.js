// Знаходимо елемент з id="categories" — це контейнер усіх категорій
const num = document.querySelector("#categories");

// Знаходимо всі елементи з класом "item" — кожен з них є окремою категорією
const foundLi = document.querySelectorAll(".item");

// Отримуємо кількість знайдених категорій
const foundLiLength = foundLi.length;

// Формуємо текстове повідомлення з кількістю категорій
const resultCategories = "Number of categories: " + foundLiLength;

// Виводимо в консоль кількість категорій
console.log(resultCategories);

// Перебираємо кожен елемент категорії (кожен .item)
foundLi.forEach((li) => {
    // Виводимо назву категорії (перший дочірній елемент — це h2)
    console.log("Category: " + li.firstElementChild.textContent);

    // Виводимо кількість елементів в категорії (дітей останнього дочірнього елемента — це список)
    console.log("Elements: " + li.lastElementChild.children.length);

    // Перетворюємо дочірні елементи списку (li) в масив
    const list = Array.from(li.lastElementChild.children);

    // Додаємо кожному <li> клас "list-style"
    list.forEach((item) => {
        item.classList.add("list-style");
    });

    // Знаходимо всі заголовки категорій (h2)
    const categoryList = document.querySelectorAll("h2");

    // Додаємо кожному заголовку клас "classList-style"
    categoryList.forEach((elem) => {
        elem.classList.add("classList-style");
    });
});