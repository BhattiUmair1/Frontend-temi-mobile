code = '6f0f7318-eb27-4144-8b73-12c876e6f3a2';

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

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM geladen');
  qrcode(code);
});
