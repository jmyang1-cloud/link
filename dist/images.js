document.querySelectorAll('.picture img').forEach(img => {
 const box = img.parentElement;
 function finish() {
  box.classList.remove('is-loading');
  box.classList.toggle('is-error', img.naturalWidth === 0);
 }
 img.addEventListener('load', finish);
 img.addEventListener('error', finish);
 if (img.complete) finish();
 else box.classList.add('is-loading');
});
