let name = document.getElementById('name');
let profile = document.getElementById('profile');
let btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
  console.log(name.value);
  console.log(profile.value);
});
