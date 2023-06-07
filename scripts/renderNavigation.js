// отрисовка меню:
import { createElement } from "./helper.js";


const nav = document.querySelector('.nav');
//const burger = createBurgerMenu(nav);


export const renderNavigation = ()=> {
      nav.textContent = '';
      const btnSignUp = createElement('button',{
            className: 'nav__btn btn',
            textContent: 'Зарегитсрироваться'
      });


      btnSignUp.addEventListener('click', () => {
            console.log('Зарегитсрироваться'); // создание модалки
      });


      const btnLogin = createElement('button',{
            className: 'nav__btn btn',
            textContent: 'Войти'
      });


      btnLogin.addEventListener('click', () => {
            console.log('Войти');
      });

      nav.append(btnSignUp, btnLogin);
}



