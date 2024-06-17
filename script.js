const signUpCard = document.querySelector('.signUpCardContainer');
const thanksCard = document.querySelector('.thankYou');
const emailInput = document.querySelector('.emailInput');
const subBtn = document.querySelector('.subBtn');
const dismiss = document.querySelector('.dismiss');
const errorText = document.querySelector('.emailError');

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function subscribe(e) {
  e.preventDefault();

  const emailValue = emailInput.value.trim();

  if (isValidEmail(emailValue)) {
    signUpCard.classList.add('hidden');
    thanksCard.classList.remove('hidden');
  } else {
    errorText.classList.remove('hidden');
    emailInput.classList.add(
      'emailInputError',
      'animate__animated',
      'animate__shakeX'
    );
  }
}

function goBack(e) {
  e.preventDefault();
  signUpCard.classList.remove('hidden');
  thanksCard.classList.add('hidden');
  errorText.classList.add('hidden');
  emailInput.classList.remove(
    'emailInputError',
    'animate__animated',
    'animate__shakeX'
  );
  emailInput.setAttribute('disabled', 'true');
  subBtn.innerText = 'You have already subscribed, thanks!';
  subBtn.style.backgroundColor = '#ff6257';
  subBtn.classList.add('animate__animated', 'animate__shakeX');
}
subBtn.addEventListener('click', subscribe);
dismiss.addEventListener('click', goBack);
