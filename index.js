const dictionary = {
    'а': 'a',
    'б': 'b',    
    'в': 'v',    
    'г': 'g',    
    'д': 'd',
	'е': 'e',    
    'ё': 'e',    
    'ж': 'zh',   
    'з': 'z',    
    'и': 'i',
	'й': 'y',    
    'к': 'k',    
    'л': 'l',    
    'м': 'm',    
    'н': 'n',
	'о': 'o',    
    'п': 'p',    
    'р': 'r',    
    'с': 's',    
    'т': 't',
	'у': 'u',    
    'ф': 'f',    
    'х': 'h',    
    'ц': 'c',    
    'ч': 'ch',
	'ш': 'sh',   
    'щ': 'sch',  
    'ь': '',     
    'ы': 'y',    
    'ъ': '',
	'э': 'e',    
    'ю': 'yu',   
    'я': 'ya',
 
	'А': 'A',    
    'Б': 'B',    
    'В': 'V',    
    'Г': 'G',    
    'Д': 'D',
	'Е': 'E',    
    'Ё': 'E',    
    'Ж': 'Zh',   
    'З': 'Z',    
    'И': 'I',
	'Й': 'Y',    
    'К': 'K',    
    'Л': 'L',    
    'М': 'M',    
    'Н': 'N',
	'О': 'O',    
    'П': 'P',    
    'Р': 'R',    
    'С': 'S',    
    'Т': 'T',
	'У': 'U',    
    'Ф': 'F',    
    'Х': 'H',    
    'Ц': 'C',    
    'Ч': 'Ch',
	'Ш': 'Sh',   
    'Щ': 'Sch',  
    'Ь': '',     
    'Ы': 'Y',    
    'Ъ': '',
	'Э': 'E',    
    'Ю': 'Yu',   
    'Я': 'Ya'
 };

    // Получаю доступ к Кнопке!
 const button = document.querySelector('.enter');
   // Получаю доступ к инпуту!
 const input = document.querySelector('.enterText');

 input.addEventListener('keyup', function(enter) {
    if (enter.keyCode === 13) {
        enter.preventDefault();
        button.click();
    }
  })

 button.addEventListener('click', function (event) {
    console.log('JUST DO IT')

    // Получаю доступ к левому меню, и создаю новый див!  
  const leftMain = document.querySelector('.left-main');

    // Создаю новый ДИВ с классом left
  const leftNewDiv = document.createElement('div');
  leftNewDiv.className = 'left';
  leftNewDiv.innerText = '';
  leftNewDiv.style.borderTop = '2px solid #000000'
  
    // Создаю ДИВ для цифры
  const num = document.createElement('div');
  num.className = 'number';
  num.innerText = '';

    // Создаю ДИВ для текста
  const leftText = document.createElement('div');
  leftText.className = 'cyrillic';
  leftText.id = 'tooltip';
  leftText.innerText = input.value;   

    // Отправляю новую цифру и кирилик в новый див!
  leftNewDiv.appendChild(num);
  leftNewDiv.appendChild(leftText);

   // Отправляю готовый Див в left-main
  leftMain.appendChild(leftNewDiv);

   //   Создаю цикл для появления новой цифры!
  const numCount = document.getElementsByClassName('left')
  for (let i = 0; i < numCount.length; i++) {
    num.innerText = `${i + 1}`;
  }

    //------------------------------------------------------

  // Получаю доступ к правому меню, и создаю новый див!
  const rightMain = document.querySelector('.right-main');
  
  // Создаю новый ДИВ с классом right
  const rightNewDiv = document.createElement('div');
  rightNewDiv.className = 'right';
  rightNewDiv.innerText = '';
  rightNewDiv.style.borderTop = "2px solid #000000"

  // Создаю ДИВ для текста
  const rightText = document.createElement('div');
  rightText.className = 'latin';
  rightText.id = 'tooltip';
  rightText.innerText = translite(leftText.innerText);

  // Создаю IMG для крестика
  const iconDel = document.createElement('img');
  iconDel.className = 'deleteWord';
  iconDel.src = '/icons/CLEARALL.svg';

  // Отправляю латин и крестик в новый див!
  rightNewDiv.appendChild(rightText);
  rightNewDiv.appendChild(iconDel);
  
  // Отправляю готовый Див в rightMain
  rightMain.appendChild(rightNewDiv);
  

    //------------------------------------------------------

  // Функция больше 7 символов = ...
  let sevenChar = input.value;
  if (leftText.innerText.length > 7) {
    leftText.innerText = `${sevenChar.slice(0, 6)}...`;
    rightText.innerText = `${translite(sevenChar).slice(0, 6)}...`;
  
    // Создаю СПАН для подсказки
  const podskazka = document.createElement('span');
  podskazka.id = 'tooltiptext';
  podskazka.innerText = input.value;
  leftText.appendChild(podskazka);

  // Создаю СПАН для подсказки2
  const podskazka2 = document.createElement('span');
  podskazka2.id = 'tooltiptext';
  podskazka2.innerText = translite(input.value);
  rightText.appendChild(podskazka2);
 } 
    //------------------------------------------------------

 // Функция удаления всех блоков
  const clearAll = document.querySelector('.clear-all')
  clearAll.addEventListener('click', function (even) {
    leftNewDiv.remove();
    rightNewDiv.remove();
  })
  
    // Функция удаления строки
  iconDel.addEventListener('click', () => {
    leftNewDiv.remove();
    rightNewDiv.remove();
    const allNums = document.querySelectorAll('.number');
    for (let i = 0; i < allNums.length; i++) {
        allNums[i].textContent = i + 1;
    }

})
 input.value = '';

})
    // Функция транслита
 function translite (elem) {
    let res = '';
    for (let i = 0; i < elem.length; i++) {
        if (elem[i] in dictionary) {
            res += dictionary[elem[i]];
        } else {
            res += elem[i];
        }
    }
    return res;
}


