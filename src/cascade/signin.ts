export default function signin() {
  const emailInput = document.getElementById('email');
  const submitButton = document.getElementById('submit');
  const errorMessage = document.getElementById('form-error');
  const customCheckbox = document.getElementById('checkmark');
  const defaultCheckbox = document.getElementById('check');
  const iconSuccess = document.getElementById('icon-success');
  const header = document.getElementById('header');
  const subheader = document.getElementById('subheader')

  // Функция для проверки правильности email
  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function checkInput() {
    const emailValue = emailInput.value;
    const isCheckboxChecked = defaultCheckbox.checked;

    if (isValidEmail(emailValue) && isCheckboxChecked) {
      // Email правильный и чекбокс активирован, можно выполнять действия
      errorMessage.style.display = 'none';
      emailInput.classList.remove('error');

      setTimeout(function() {
        const submitButton = document.getElementById('submit-trigger');
        submitButton.click();
        iconSuccess.style.display = 'block'
        header.innerHTML = 'Thank you'
        subheader.innerHTML = 'Thanks for subscribing. You\'re on the list to be the first in the know when our product drops. Stay tuned for exclusive updates and offers.'
      }, 1000);



    } else if (!isValidEmail(emailValue) && isCheckboxChecked) {
      // Email неправильный, но чекбокс активирован
      errorMessage.style.display = 'block';
      emailInput.classList.add('error');
      console.log('error: неправильный email');

    } else if (isValidEmail(emailValue) && !isCheckboxChecked) {
      // Email правильный, но чекбокс не активирован
      customCheckbox.classList.add('check-error');
      console.log('error: чекбокс не активирован');
    } else {
      // Email неправильный и чекбокс не активирован
      errorMessage.style.display = 'block';
      emailInput.classList.add('error');
      customCheckbox.classList.add('check-error');
      console.log('error: неправильный email и чекбокс не активирован');
    }
  }

  // Обработчик события при клике на кнопку
  submitButton.addEventListener('click', () => {
    checkInput();
  });

  // Обработчик события при изменении состояния чекбокса
  customCheckbox.addEventListener('change', () => {
    customCheckbox.classList.remove('check-error')
    errorMessage.style.display = 'none';
    emailInput.classList.remove('error');
  });

  emailInput.addEventListener('input', function () {
    errorMessage.style.display = 'none';
    emailInput.classList.remove('error');
    customCheckbox.classList.remove('error')
  });
}
