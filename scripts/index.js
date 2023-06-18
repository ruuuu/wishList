import { renderNavigation } from "./renderNavigation.js";
import { createHero } from "./createHero.js";

export const router = Router();  // роутер director

const app = document.querySelector('.app');

const handleEditPageRoute = (id) => {

};


const handleEditProfileRoute = (login) => {
      
};


const handleUserRoute = (login) => {
      
};



const handleHomePage = () => {            // загрука главвной станицы
      app.textContent = '';

      renderNavigation();                 // отсриовка меню
      const section = createHero();       // отрисовка секции hero
      app.append(section);
}




const init = () => {                                        // отсюда все начинается
      let isMainPage = true;                          
      
      router.on('/', handleHomePage);                           // переход на главную станицу
      router.on('/editwish/newwish', handleEditPageRoute);          // переход на старнцу создания желания
      router.on('/editwish/:id', handleEditPageRoute);              // переход на страницу желания по его id
      router.on('/editprofile/:login', handleEditProfileRoute);         
      router.on('/user/:login', handleUserRoute);               // переход на станицу желаний  
      
      router.init();
      //handleHomePage();
      if(isMainPage){  // если первый раз загружаем станицу
            isMainPage = false;
            router.setRoute('/');
      }
};


init();