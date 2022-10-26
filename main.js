const discountBtn = document.querySelector('.discount-btn');
const couponContainer = document.querySelector('.coupon-container');
const closeBtn = document.querySelector('.coupon-container .close');

discountBtn.addEventListener('click', () => {
  couponContainer.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  couponContainer.classList.remove('active');
});