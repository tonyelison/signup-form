const submitBtn = document.querySelector(".cta-container button");
submitBtn.addEventListener('click', () => {
  const invalidControls = document.querySelectorAll("form input:invalid");
  invalidControls.forEach((control) => control.classList.add('error'));
});

const formControls = document.querySelectorAll("form input");
formControls.forEach((control) => control.addEventListener('change', () => {
  if (control.checkValidity()) {
    control.classList.remove('error');
  }
}));
