   var list = document.querySelector('ul');
   list.addEventListener('click', function (e) {
      // ДЕЛЕГИРОВАНИЕ СОБЫТИЙ, target используется для делегирования событий
      if(e.target.tagName === "LI") {
         e.target.classList.toggle('checked');
      } else if(e.target.tagName === "SPAN") {
         // получаем родителя span, т.е. элемент списка и удалим его
         var div = e.target.parentNode;
         div.remove();
      }
   }, false);

   function newElement() {
      // СОЗДАЕ НОВЫЙ ЭЛЕМЕНТ li
      var li = document.createElement('li');
      // получаем значение поля input
      var inputValue = document.getElementById('toDoEl').value;
      // создаем новый текстовый узел на основе значений input
      var t = document.createTextNode(inputValue);
      //добавляем к тегу li значение input, т.е. сформировался элемент списка
      li.appendChild(t);
      if(inputValue == "") {
         alert("Введите ваше дело!");
      } else {
         // доавляем дело в список дел
         document.getElementById('list').appendChild(li);
      }
      // очищаем значение value инпута
      document.getElementById('toDoEl').value = "";
      // создаем элемент span
      var span = document.createElement('SPAN');
      // создаем текcт, который надоится в span
      var txt = document.createTextNode('X');
      // добавляем класс
      span.className = "close";
      // добавим крестик
      span.appendChild(txt);
      // теперь сформированный span добавим тегу li
      li.appendChild(span);
   }