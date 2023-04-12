// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

// Створення галереї
function createGallery (arr, listEl) {
    const markup = arr.map(({ preview, original, description }) => 
        `<li class="gallery__item">
           <a class="gallery__link" href="${original}">
             <img class="gallery__image" src="${preview}" alt="${description}"/>
           </a>
        </li>`
    ).join("");
    listEl.insertAdjacentHTML("beforeend", markup);
}
createGallery(galleryItems, gallery);


// Лайтбокс
const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionSelector: 'img', captionDelay: 250, captionsData: 'alt'});