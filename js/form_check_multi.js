let getCheckbox = (name) => {
  let result = [];
  let elems = document.getElementsByName(name);

  console.log(elems);

  for (let i = 0; i < elems.length; i++) {
    if (elems[i].checked) {
      result.push(elems[i].value); 
    }
  }
  return result;
};

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log(getCheckbox('os'));
});

