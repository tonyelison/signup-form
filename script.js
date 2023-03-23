const submitBtn = document.querySelector(".cta-container button");
submitBtn.addEventListener('click', () => {
  addErrorClass(document.querySelectorAll("form input:invalid"));
});

const formControls = document.querySelectorAll("form input");
formControls.forEach((control) => control.addEventListener('change', () => {
  if (control.checkValidity()) {
    control.classList.remove('error');
    removeErrorClass([control]);
  }
}));

function addErrorClass([...nodes]) {
  nodes.forEach((control) => control.classList.add('error'));
}

function removeErrorClass([...nodes]) {
  nodes.forEach((control) => control.classList.remove('error'));
}