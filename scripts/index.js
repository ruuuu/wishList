import { renderNavigation } from "./renderNavigation.js";
import { createHero } from "./createHero.js";


const app = document.querySelector('.app');


const handleHomePage = () => {            // загрука главвной станицы
      app.textContent = '';

      renderNavigation();                 // отсриовка меню
      const section = createHero();       // отрисовка секции hero
      app.append(section);
}




const init = () => {                            // отсюда все начинается

      handleHomePage();
};


init();