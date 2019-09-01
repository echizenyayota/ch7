let getListBox = function(name) {
  let result = [];
  let elems = document.getElementById('os').options;

  for (let i = 0; i < elems.length; i++) {
    if (elems[i].selected) {
      result.push(elems[i].value);
    }
  }
  return result;
};

const os = document.getElementById('os');
os.addEventListener('change', () => {
  console.log(getListBox('os'));
});

