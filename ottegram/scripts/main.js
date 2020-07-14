const DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]',
  DETAIL_TITLE_SELECTOR = '[data-image-role="title"]',
  THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';

function setDetail(imgUrl, titleText) {
  const detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imgUrl);
  const detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  thumbnail.getAttribute('detail-image-title');
}

function setDetailsFromThumb(thumbnail) {
  setDetail(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  thumb.addEventListener('click', e => {
    e.preventDefault();
    setDetailsFromThumb(thumb);
  });
}
