const images = [
    {
        preview: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
        original: 'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
        description: 'Hokkaido Flower',
    },
    // ...інші об’єкти
];

const galleryList = document.querySelector('.gallery');

const galleryItems = images.map(({ preview, original, description }) => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
  `;
}).join('');

galleryList.innerHTML = galleryItems;

// Делегування подій
galleryList.addEventListener('click', event => {
    event.preventDefault();

    const img = event.target;

    if (img.nodeName !== 'IMG') return;

    const largeImageURL = img.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${largeImageURL}" alt="${img.alt}" />
  `);

    instance.show();
});