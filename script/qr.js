var qrcode = new QRCode(document.getElementById('qrcode'), {
  text: 'http://jindo.dev.naver.com/collie',
  width: 150,
  height: 150,
  colorDark: '#282829',
  colorLight: '#ffffff',
  correctLevel: QRCode.CorrectLevel.H,
});
