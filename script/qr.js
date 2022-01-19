let code;

const qrcode = (code) => {
  console.log(code);
  new QRCode(document.getElementById('qrcode'), {
    text: code,
    width: 150,
    height: 150,
    colorDark: '#282829',
    colorLight: '#ffffff',
    correctLevel: QRCode.CorrectLevel.H,
    image: 'Logo.png',
  });
};

const init = function () {
  console.log("init works")
  const params = new URLSearchParams(window.location.search)
  let code = params.get('qrcode')
  console.log(code)
  qrcode(code)
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM geladen');
  qrcode(code);
  init();
});
