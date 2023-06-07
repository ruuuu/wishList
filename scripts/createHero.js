import { createElement } from "./helper.js";


// отрисовка секции Hero:
export const createHero = () => {   

      const section = createElement('section', {
            className: 'hero'
      });


      const container = createElement('div', {
            className: 'container hero__container'
      });

      const title = createElement('h1', {
            className: 'hero__title',
            textContent: 'WishList'
      });


      const description = createElement('p', {
            className: 'hero__descriptione',
            innerHTML: 'Никогда не&nbsp; поздно поставить новую цель или обрести новую мечту... '
      });


      const listSteps = createElement('ol', {
            className: 'hero__steps steps',
           
      });


      [
            'Создайте список желаний', 
            'Поделитесь ссылкой с&nbsp;друзьями', 
            'Получите желанный подарок'
      ].forEach((i) => {
            const step = createElement('li', {
                  className: 'steps__item',
                  innerHTML: i
            });

            listSteps.append(step);
      });

     
      container.append(title, description, listSteps);
      section.append(container);

      return section;
};


