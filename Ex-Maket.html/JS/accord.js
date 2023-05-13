/*находим все нужные нам headingElem*/
let allElems = document.querySelectorAll('.type_1 .headingElem');
/*прогоняем из через цикл*/
allElems.forEach((elem)=>{
    /*вешаем на каждый элемент обработчик на событие click*/
    elem.addEventListener('click', function(){
        /*у нажатого элемента получаем родителя*/
        let parentElem = this.parentNode;
        /*находим элемент с контентом*/
        let contentBlock = parentElem.querySelector('.descElem')
        /*аналогичная проверка на наличие класса active*/
        if(contentBlock.classList.contains("active")) {
            contentBlock.classList.remove('active');
        }
        else {
            contentBlock.classList.add('active');
        }
    })
})