let mail = document.getElementById('mail');

mail.addEventListener('change', () => {
  if (mail.checked) {
    console.log(mail.value);
  } else {
    console.log('お知らせは配信されません');
  }
  // if (mail.checked) {
  //   console.log(mail.value);
  // } 
});