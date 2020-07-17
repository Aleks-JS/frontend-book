// Declaring string variables
const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]',
  DETAIL_TITLE_SELECTOR = '[data-image-role="title"]',
  DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]',
  THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]',
  HIDDEN_DETAIL_CLASS = 'hidden-detail',
  TINY_EFFECT_CLASS = 'is-tiny',
  ESC_KEY = 27;

function setDetail(imgUrl, titleText) {
  const detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imgUrl);
  const detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  // return thumbnail.getAttribute('data-image-url');
  return thumbnail.dataset.imageUrl;
}

function titleFromThumb(thumbnail) {
  // return thumbnail.getAttribute('data-image-title');
  return thumbnail.dataset.imageTitle;
}

function setDetailsFromThumb(thumbnail) {
  setDetail(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function showDetails() {
  const frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(() => {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addThumbClickHandler(thumb) {
  thumb.addEventListener('click', e => {
    e.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  const thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR),
    thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

// Function for adding a class hiding a large image
function hideDetails() {
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler() {
  document.body.addEventListener('keyup', e => {
    e.preventDefault();
    console.log(e.keyCode);
    if (e.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

// Initializing events on the page
function initializeEvents() {
  const thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initializeEvents();
