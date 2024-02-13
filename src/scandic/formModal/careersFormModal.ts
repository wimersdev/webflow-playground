



//Modal form

function careersFormModal() {
  console.log("loaded")
  document.addEventListener("DOMContentLoaded", function() {

    const hdsButtons = document.querySelectorAll('.button.vacancy');
    let vacancyInput = document.getElementById('vacancy');

    hdsButtons.forEach(button=>{
        button.addEventListener('click', function() {
          let vacancyValue = button.getAttribute('vacancy');
          vacancyInput.value = vacancyValue;
          console.log(vacancyInput.value);
        });
      }
    );
        const formModals = document.querySelectorAll('.form-modal');

    formModals.forEach((modal) => {
      const form = modal.querySelector(".form-main");
      const headingWrapper = modal.querySelector(".form-heading-wrapper");
      const errorWrapper = modal.querySelector(".form-error-wrapper");
      const successWrapper = modal.querySelector(".form-success-wrapper");
      const nameError = modal.querySelector(".form-name-error");
      const emailError = modal.querySelector(".form-email-error");
      const hiddenField = modal.querySelector(".form-page");

      const nameInput = modal.querySelector(".form-input.name");
      const emailInput = modal.querySelector(".form-input.email");
      const checkboxInput = modal.querySelector(".form-checkbox");
      const checkboxLabel = modal.querySelector(".form-check-label");

      const submitButton = modal.querySelector(".button-submit");
      const realSubmitButton = modal.querySelector(".form-submit");

      hiddenField.value = document.title;

          function checkVisibility() {
            const errorStyle = window.getComputedStyle(errorWrapper);
            const successStyle = window.getComputedStyle(successWrapper);
            const isErrorVisible = errorStyle.display !== "none";
            const isSuccessVisible = successStyle.display !== "none";

            if (isErrorVisible || isSuccessVisible) {
              form.style.display = "none";
              headingWrapper.style.display = "none";
            } else {
              form.style.display = "flex";
              headingWrapper.style.display = "block";
            }
          }

          const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
              if (mutation.attributeName === "style") {
                checkVisibility();
              }
            });
          });

          observer.observe(errorWrapper, { attributes: true });
          observer.observe(successWrapper, { attributes: true });

          form.addEventListener("submit", function() {
            headingWrapper.classList.add("hidden");
          });

          submitButton.addEventListener("click", function(e) {
            e.preventDefault();
            let hasError = false;

            if (nameInput.value.trim() === "") {
              nameError.style.display = "block";
              nameInput.classList.add("error");
              hasError = true;
            }

            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!emailRegex.test(emailInput.value.trim())) {
              emailError.style.display = "block";
              emailInput.classList.add("error");
              hasError = true;
            }

            if (!checkboxInput.checked) {
              checkboxLabel.classList.add("error");
              hasError = true;
            }

            if (!hasError) {
              realSubmitButton.click();
            }
          });

          nameInput.addEventListener("input", function() {
            nameInput.classList.remove("error");
            nameError.style.display = "none";
          });

          emailInput.addEventListener("input", function() {
            emailInput.classList.remove("error");
            emailError.style.display = "none";
          });

          checkboxInput.addEventListener("change", function() {
            checkboxLabel.classList.remove("error");
          });

          checkVisibility();
        });


  });


}

export default careersFormModal








