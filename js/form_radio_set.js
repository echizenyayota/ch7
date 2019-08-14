let setRadioButton = (name, value) => {
  let elems = document.getElementsByName(name);
  for (let i = 0; i < elems.length; i++) {
    if (elems[i].value === value) {
      elems[i].checked = true;
    }
  }
};

setRadioButton('os', 'unix');