let mail = document.getElementById('mail');

mail.addEventListener('change', () => {
  // 参考URL
  // https://developer.mozilla.org/ja/docs/Web/HTML/Element/input/checkbox#checked
  if (mail.checked) {
    console.log(mail.value);
  } else {
    console.log('お知らせは配信されません');
  }
  // if (mail.checked) {
  //   console.log(mail.value);
  // } 
});