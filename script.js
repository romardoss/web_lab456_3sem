let currentPageIndex = 0;
const page_0 = document.getElementById('page_0');
const page_1 = document.getElementById('page_1');
const page_2 = document.getElementById('page_2');
const page_3 = document.getElementById('page_3');
const page_4 = document.getElementById('page_4');
const page_5 = document.getElementById('page_5');
const page_6 = document.getElementById('page_6');
const page_7 = document.getElementById('page_7');
const page_8 = document.getElementById('page_8');
const page_9 = document.getElementById('page_9');
const page_10 = document.getElementById('page_10');
const page_results = document.getElementById('page_results');
const pageList = [page_0, page_1, page_2, page_3, page_4, page_5, page_6, page_7, page_8, page_9, page_10, page_results ]

let question1 = {
    1: "Для розмітки таблиці структури сайту",
    2: "Для керування властивостями шрифту",
    3: "Для розмальовування об'єктів"
}
let question2 = {
    1: "display",
    2: "background",
    3: "margin",
    4: "font-style"
}
let question3 = {
    1: "align-content",
    2: "justify-content",
    3: "color",
    4: "flex-direction",
    5: "place-self"
}
let question4 = {
    1: ".a{<br><p>grid-area: b1;</p>}<br>",
    2: ".b{<br><p>grid-area: b2;</p>}<br>",
    3: ".c{<br><p>grid-area: b3;</p>}<br>",
    4: ".d{<br><p>grid-area: b4;</p>}<br>"
}
let question5 = {
    1: "Елемент має початок на першому рядку та кінець на третьому",
    2: "Елемент протяжністю від першого до третього рядка",
    3: "Елемент починаєтти у ься на першому рядку та має протяжність у два рядки"
}

function generateQuestion1(){
    const label1 = document.getElementById('for_radio_1');
    const label2 = document.getElementById('for_radio_2');
    const label3 = document.getElementById('for_radio_3');
    let q = question1;
    label1.innerHTML = `${q[1]}`
    label2.innerHTML = `${q[2]}`
    label3.innerHTML = `${q[3]}`
}
function generateQuestion2(){
    const label1 = document.getElementById('for_radio_4');
    const label2 = document.getElementById('for_radio_5');
    const label3 = document.getElementById('for_radio_6');
    const label4 = document.getElementById('for_radio_7');
    let q = question2;
    label1.innerHTML = `${q[1]}`
    label2.innerHTML = `${q[2]}`
    label3.innerHTML = `${q[3]}`
    label4.innerHTML = `${q[4]}`
}
function generateQuestion3(){
    const label1 = document.getElementById('for_check_1');
    const label2 = document.getElementById('for_check_2');
    const label3 = document.getElementById('for_check_3');
    const label4 = document.getElementById('for_check_4');
    const label5 = document.getElementById('for_check_5');
    let q = question3;
    label1.innerHTML = `${q[1]}`
    label2.innerHTML = `${q[2]}`
    label3.innerHTML = `${q[3]}`
    label4.innerHTML = `${q[4]}`
    label5.innerHTML = `${q[5]}`
}
function generateQuestion4(){
    document.getElementById('drag-and-drop-answers').style.display = 'inline-block';
    document.getElementById('template-grid').style.display = 'inline-block';
    document.getElementById('block-1').style.display = 'inline-block';
    document.getElementById('block-2').style.display = 'inline-block';
    document.getElementById('block-3').style.display = 'inline-block';
    document.getElementById('block-4').style.display = 'inline-block';

    const label1 = document.getElementById('drag1');
    const label2 = document.getElementById('drag2');
    const label3 = document.getElementById('drag3');
    const label4 = document.getElementById('drag4');
    let q = question4;
    label1.innerHTML = `${q[1]}`
    label2.innerHTML = `${q[2]}`
    label3.innerHTML = `${q[3]}`
    label4.innerHTML = `${q[4]}`
}
function generateQuestion5(){
    const options = `<option value="none-option"></option>
    <option value="grid-row-start-end">grid-row-start: 1; grid-row-end: 3;</option>
    <option value="grid-row-/-">grid-row: 1 / 3;</option>
    <option value="grid-row-/span">grid-row: 1 / span 2;</option>`;
    const select1 = document.getElementById('option-question1');
    const select2 = document.getElementById('option-question2');
    const select3 = document.getElementById('option-question3');
    const label1 = document.getElementById('for_option-question1');
    const label2 = document.getElementById('for_option-question2');
    const label3 = document.getElementById('for_option-question3');
    let q = question5;
    select1.innerHTML = options;
    select2.innerHTML = options;
    select3.innerHTML = options;
    label1.innerHTML = `${q[1]}`;
    label2.innerHTML = `${q[2]}`;
    label3.innerHTML = `${q[3]}`;
}



function nextPage(){
    pageList[currentPageIndex].style.display = 'none';
    currentPageIndex++;
    pageList[currentPageIndex].style.display = 'inline-block';
    if(currentPageIndex == 1){
        generateQuestion1();
    }
    else if (currentPageIndex == 2){
        generateQuestion2();
    }
    else if (currentPageIndex == 3){
        generateQuestion3();
    }
    else if(currentPageIndex == 4){
        generateQuestion4();
    }
    else if(currentPageIndex == 5){
        generateQuestion5();
    }
    if(currentPageIndex == 7){
        document.getElementById('implement-css-answers').style.display = 'inline-block';
        document.getElementById('template-grid-css-implementation').style.display = 'inline-block';
        document.getElementById('block-5').style.display = 'inline-block';
        document.getElementById('block-6').style.display = 'inline-block';
        document.getElementById('block-7').style.display = 'inline-block';
        document.getElementById('block-8').style.display = 'inline-block';
        implementCSS();
    }
}

/*function prevPage(){
    pageList[currentPageIndex].style.display = 'none';
    currentPageIndex--;
    pageList[currentPageIndex].style.display = 'inline-block';
}*/

function closePage(){
    close();
}

///////////////////////////////////////////////////
let user;

function makeUser(name, surname){
    return {
        name,
        surname
    }
};

function newTestUser(){
    user = makeUser(document.getElementById('entryNameInput').value, );
    //alert(user.name + " " + user.surname);
}


////////////////////////////////////////////////////
//Реалізація drag and drop
const dragItems = document.querySelectorAll(".dragItem");

const block1 = document.querySelector(".block-1");
const block2 = document.querySelector(".block-2");
const block3 = document.querySelector(".block-3");
const block4 = document.querySelector(".block-4");
const dropZones = [block1, block2, block3, block4];


dragItems.forEach(dragItems => {
    dragItems.addEventListener('dragstart', handlerDragStart);
    dragItems.addEventListener('dragend', handlerDragEnd);
    dragItems.addEventListener('drag', handlerDrag);
})

dropZones.forEach(dropZones => {
    dropZones.addEventListener('dragenter', handlerDragEnter);
    dropZones.addEventListener('dragleave', handlerDragLeave);
    dropZones.addEventListener('dragover', handlerDragOver);
    dropZones.addEventListener('drop', handlerDrop);
})

function handlerDragStart(event){
    event.dataTransfer.setData("dragItem", this.dataset.item);
    this.classList.add("dragging");
}

function handlerDragEnd(event){
    this.classList.remove("dragging");
}

function handlerDrag(event){
    //console.log("drag");
}

function handlerDragEnter(event){
    event.preventDefault();
    this.classList.add("border-entering");
}

function handlerDragLeave(event){
    this.classList.remove("border-entering");
}

function handlerDragOver(event){
    event.preventDefault();
    //console.log("over");
}

function handlerDrop(event){
    const dragFlag = event.dataTransfer.getData("dragItem");
    const dragItem = document.querySelector(`[data-item="${dragFlag}"]`)
    //console.log("drop");
    this.classList.remove("border-entering");
    dragItem.classList.add("draged");
    this.append(dragItem);
}


///////////////////////////////////////////////////
//Питання з втіленням css коду
function implementCSS(){
    let newCSS = document.getElementById('textarea1').value;
    //console.log(newCSS);
    const gridToChange = document.getElementsByClassName('template-grid-css-implementation')[0];
    gridToChange.style.cssText = `${newCSS}`;
}