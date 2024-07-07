document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');
  const firstFaqItem = faqItems[0];

  // 最初のFAQを開く
  firstFaqItem.classList.add('open');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {

      // クリックされたFAQを開く
      item.classList.add('open');
    });
  });
});
