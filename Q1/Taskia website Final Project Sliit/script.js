window.onload = function() {
    var popup = document.querySelector('.popup');
    popup.classList.add('show');
  };

  function closePopup() {
    var popup = document.querySelector('.popup');
    popup.classList.remove('show');
  }

  window.addEventListener('scroll', function() {
    var button = document.querySelector('.back-to-top');
    if (window.pageYOffset > 100) {
      button.classList.add('show');
    } else {
      button.classList.remove('show');
    }
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  