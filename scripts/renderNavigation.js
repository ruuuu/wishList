// отрисовка меню:
import { createElement } from "./helper.js";
import { createBurgerMenu } from "./createBurgerMenu.js";
import { API_URL } from "./const.js";


const nav = document.querySelector('.nav');
createBurgerMenu(nav, 'nav--active');  // бургер дял мобилок


export const renderNavigation = ()=> {
      nav.textContent = '';

      const btnSignUp = createElement('button',{
            className: 'nav__btn btn',
            textContent: 'Зарегитсрироваться'
      });


      btnSignUp.addEventListener('click', () => {
            renderModal({                       // создание модалки
                  title: 'Регистрация',
                  description: 'введите ваши данные дя регистрации в WishList',
                  btnSubmit: 'Зарегистрироваться',
                  submitHandler: async (evt) => {                       // при  нажатии на Заргеиррирваться, вызовется эта фукнция. Она асинхронная тк отправляем данные  на сервер
                        const formData = new FormData(evt.target);      // встроенный контуктор форм, перелаем форму, в нашем случае это evt.target
                        const credentialss = {                          // даннеы отправляемые на серве храним в бъектк
                              login: formData.get('login'),
                              password: formData.get('password')
                        };

                        try{
                              const response = await fetch(`${API_URL}/register`, {      // отпрака данных на сервер
                                    method: 'POST',
                                    headers: {'Content-Type': 'application/json'},
                                    body: JSON.stringify(credentialss)  // из объекта превращаем в json
                              });  
                              console.log('response ', response);

                              if(response.ok){
                                    const data = response.json();  // из json в объект
                                    console.log('data from server ', data);
                              }else{
                                    console.log(await response.json());
                                    throw new Error('invalis credentials');
                              }
                        }
                        catch(error){

                        }

                  } 
            }); 
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



