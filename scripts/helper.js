export const createElement = (tagName, attrubute) => {  // attrubute = { key: value,  key: value,  key: value}

      const elem = document.createElement(tagName);
      
      // for (const key in attrubute) {
      //       elem.setAttribute(key, attrubute[key]);
      // }

      // или так:
      Object.assign(elem, attrubute);  // добалеям элементу eleem свойства

      return elem; 
};