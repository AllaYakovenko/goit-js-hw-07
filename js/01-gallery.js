import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGallaryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGallaryCardsMarkup(galleryItems) { 
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
                        alt="${description}"
                    />
                </a>
            </div>`;
        })
        .join('');
}

let instance;
function onGalleryContainerClick(event) { 
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') { 
        return;
    }   
        
    instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}">`,
        {
            onclose: (instance) => { 
                document.removeEventListener('keydown', closeOnEsc);
            }, 
            onShow: (instance) => { 
                document.addEventListener('keydown', closeOnEsc);
            }
        });

    instance.show();

    function closeOnEsc(event) { 
        if (event.key !== 'Escape') { 
            return;
        }
        instance.close();
    }
}
