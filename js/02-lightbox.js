import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGallaryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainer.addEventListener('click', onGalleryContainerClick);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGallaryCardsMarkup(galleryItems) { 
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img 
                    class="gallery__image" 
                    src="${preview}" 
                    alt="${description}"
                     />
                </a>
            </div>`;
        })
        .join('');
}

function onGalleryContainerClick(event) { 
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') { 
        return;
    }   
}

