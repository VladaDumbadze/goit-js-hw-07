import { galleryItems } from './gallery-items.js';




const markup =
    galleryItems
        .map(({original, preview, description}) => `
        <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`)
        .join('');

 


function onPicClick(event) {
    window.addEventListener('keydown', keyEsc);
    event.preventDefault();
    const isPic = event.target.classList.contains("gallery__image");
    if (!isPic) return;
    const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute("data-source")}"> `)
    instance.show()

    function keyEsc(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
}
const galleryBox = document.querySelector(".gallery");
galleryBox.insertAdjacentHTML('beforeend', markup);
 
galleryBox.addEventListener(`click`, onPicClick)
    
console.log(galleryItems);