

  const regIcon = document.querySelector( '.header__info-item-login-icon' );

  function showLoginForm() {

    const form = document.querySelector ( '.form-container--loginer' );

    form.style.display = 'flex';  
  }

  regIcon.addEventListener( 'click', showLoginForm );

