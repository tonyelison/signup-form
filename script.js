const submitBtn = document.querySelector(".cta-container button");
submitBtn.addEventListener('click', () => {
  const invalidFields = document.querySelectorAll("form input:invalid")
  invalidFields.forEach((control) => control.classList.add('error'));
});

const formControls = document.querySelectorAll("form input");
formControls.forEach((control) => control.addEventListener('change', () => {
  if (control.checkValidity()) {
    control.classList.remove('error');
  }
}));