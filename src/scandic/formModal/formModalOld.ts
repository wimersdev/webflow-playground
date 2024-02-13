//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
//THIS IS AN OLD VERSION OF FORM MODAL - DO NOT USE IT ON MAIN WEBSITE//
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//

document.addEventListener("DOMContentLoaded", function () {

  const language = document.documentElement.lang;
  const fetchUrl = language === 'no' ?
    'https://uploads-ssl.webflow.com/63ce5db05bcc4db992bb964a/650d9d5d576a590bf9167706_form-fields-no-2.txt' : null;

  const fetchData = fetchUrl ? fetch(fetchUrl).then(response => response.json()) : Promise.resolve(null);

  fetchData
    .then(formData => {
      const formModals = document.querySelectorAll('.form-modal');

      formModals.forEach((modal) => {
        const form = modal.querySelector(".form-main");
        const headingWrapper = modal.querySelector(".form-heading-wrapper");
        const errorWrapper = modal.querySelector(".form-error-wrapper");
        const successWrapper = modal.querySelector(".form-success-wrapper");

        const submitButton = modal.querySelector(".button-submit");
        const realSubmitButton = modal.querySelector(".form-submit");

        const heading = modal.querySelector(".form-heading");
        const subheading = modal.querySelector(".form-subheading");
        const nameInput = modal.querySelector(".form-input.name");
        const emailInput = modal.querySelector(".form-input.email");
        const jobInput = modal.querySelector(".form-input.job");
        const companyInput = modal.querySelector(".form-input.company");
        const textInput = modal.querySelector(".form-input.textarea");
        const checkboxInput = modal.querySelector(".form-checkbox");
        const checkboxLabel = modal.querySelector(".form-check-label");
        const terms = modal.querySelector(".form-terms");
        const submitText = modal.querySelector(".submit-text");

        const successHeading = modal.querySelector(".form-success-heading");
        const successMessage = modal.querySelector(".form-success-message");
        const successButton = modal.querySelector(".form-success-button");

        const errorHeading = modal.querySelector(".form-error-heading");
        const errorMessage = modal.querySelector(".form-error-message");
        const errorButton = modal.querySelector(".form-error-button");

        const nameError = modal.querySelector(".form-name-error");
        const emailError = modal.querySelector(".form-email-error");

        const hiddenField = modal.querySelector(".form-page");

        if (formData) {
          heading.innerHTML = formData['form-heading'];
          subheading.innerHTML = formData['form-subheading'];
          nameInput.placeholder = formData['form-name'];
          nameError.innerHTML = formData['form-name-error'];
          emailInput.placeholder = formData['form-email'];
          emailError.innerHTML = formData['form-email-error'];
          jobInput.placeholder = formData['form-job'];
          companyInput.placeholder = formData['form-company'];
          textInput.placeholder = formData['form-comments'];
          checkboxLabel.innerHTML = formData['form-checkbox'];
          terms.innerHTML = formData['form-terms'];
          submitText.innerHTML = formData['form-button'];

          successHeading.innerHTML = formData['form-success-heading'];
          successMessage.innerHTML = formData['form-success-message'];
          successButton.innerHTML = formData['form-success-button'];

          errorHeading.innerHTML = formData['form-error-heading'];
          errorMessage.innerHTML = formData['form-error-message'];
          errorButton.innerHTML = formData['form-error-button'];
        }

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

        submitButton.addEventListener("click", function (e) {
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

        nameInput.addEventListener("input", function () {
          nameInput.classList.remove("error");
          nameError.style.display = "none";
        });

        emailInput.addEventListener("input", function () {
          emailInput.classList.remove("error");
          emailError.style.display = "none";
        });

        checkboxInput.addEventListener("change", function () {
          checkboxLabel.classList.remove("error");
        });

        checkVisibility();
      });
    })
    .catch(error => console.error('Fetch error:', error));
});











