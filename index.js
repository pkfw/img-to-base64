function convertImageToBase64() {
  const image = document.getElementById('image');
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0);

  const base64 = canvas.toDataURL('image/png');

  return base64;
}