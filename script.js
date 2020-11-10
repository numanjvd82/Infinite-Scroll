// const ACCESS_KEY = '-b_oJE4wk2MGezLiyigKasF2udkEaXeUK8marfT5luk';
// const count = '1';
const apiUrl = `https://picsum.photos/v2/list?page=${Math.floor(
  Math.random() * 11
)}&limit=12
`;

const imageContainer = document.getElementById('img-container');
const loader = document.getElementById('loader');

let photosArray = [];

const setAttribute = (element, attributes) => {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

const displayPhotos = () => {
  photosArray.forEach((photo) => {
    const item = document.createElement('a');
    setAttribute(item, {
      href: photo.url,
      target: '_blank',
    });
    item.classList.add('img-container');
    const imgEl = document.createElement('img');
    setAttribute(imgEl, {
      src: photo.download_url,
      title: photo.author,
    });
    imgEl.classList.add('img');
    item.appendChild(imgEl);
    console.log(item);
  });
};

async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
    console.log(photosArray);
  } catch (error) {
    console.log(error);
  }
}

getRandomPhoto();
