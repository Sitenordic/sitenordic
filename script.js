var faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(function(question) {
  question.addEventListener('click', function() {
    var faq = this.parentNode;
    var isOpen = faq.classList.contains('open');
    closeAllFaqs();
    if (!isOpen) {
      faq.classList.add('open');
    }
  });
});

// Close all FAQ boxes
function closeAllFaqs() {
  var openFaqs = document.querySelectorAll('.faq.open');
  openFaqs.forEach(function(faq) {
    faq.classList.remove('open');
  });
}