let currentPageIndex = 0;
let score = 0;
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
    3: "Для розмальовування об'єктів",
    answer: "Для розмітки таблиці структури сайту",
}
let question2 = {
    1: "display",
    2: "background",
    3: "margin",
    4: "font-style",
    answer: "display",
}
let question3 = {
    1: "align-content",
    2: "justify-content",
    3: "place-self",
    4: "color",
    5: "flex-direction",
    answer: ["align-content", "justify-content", "place-self"],
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
    3: "Елемент починаєтти у ься на першому рядку та має протяжність у два рядки",
    'opt1': 'grid-row-start: 1; grid-row-end: 3;',
    'opt2': 'grid-row: 1 / 3;',
    'opt3': 'grid-row: 1 / span 2;',
}
let question6 = {
    1: "Мати різні пристрої при собі, щоб запускати сайт на них",
    2: "Інструмент для перевірки на різних пристроях у браузері",
    3: "Завантажити кілька віртуальних машин, де віртуальні пристрої матимуть різні розміри екранів",
    4: "Змінювати розміри вікна браузера",
    answer: "Інструмент для перевірки на різних пристроях у браузері",
}

function generateRadioQuestion(labels, question){
    for(i = 0; i < labels.length; i++){
        labels[i].innerHTML = `${question[i+1]}`;
    }
}
function generateQuestion3(){
    const q = question3;
    document.getElementById('for_check_1').innerHTML = `${q[1]}`
    document.getElementById('for_check_2').innerHTML = `${q[2]}`
    document.getElementById('for_check_3').innerHTML = `${q[3]}`
    document.getElementById('for_check_4').innerHTML = `${q[4]}`
    document.getElementById('for_check_5').innerHTML = `${q[5]}`
}
function generateQuestion4(){
    document.getElementById('drag-and-drop-answers').style.display = 'inline-block';
    document.getElementById('template-grid').style.display = 'inline-block';
    document.getElementById('block-1').style.display = 'inline-block';
    document.getElementById('block-2').style.display = 'inline-block';
    document.getElementById('block-3').style.display = 'inline-block';
    document.getElementById('block-4').style.display = 'inline-block';
    const q = question4;
    document.getElementById('drag1').innerHTML = `${q[1]}`
    document.getElementById('drag2').innerHTML = `${q[2]}`
    document.getElementById('drag3').innerHTML = `${q[3]}`
    document.getElementById('drag4').innerHTML = `${q[4]}`
}
function generateQuestion5(){
    const q = question5;
    const options = `<option value="none-option"></option>
    <option value="grid-row-start-end">${q['opt1']}</option>
    <option value="grid-row-/-">${q['opt2']}</option>
    <option value="grid-row-/span">${q['opt3']}</option>`;
    document.getElementById('option-question1').innerHTML = options;
    document.getElementById('option-question2').innerHTML = options;
    document.getElementById('option-question3').innerHTML = options;
    document.getElementById('for_option-question1').innerHTML = `${q[1]}`;
    document.getElementById('for_option-question2').innerHTML = `${q[2]}`;
    document.getElementById('for_option-question3').innerHTML = `${q[3]}`;
}

function generateResults(){
    const results = document.getElementById('results');
    results.innerHTML = `Твої результати: ${score}`
}

function logAnswerResult(isCorrect){
    if(isCorrect){
        score++;
    }
    console.log(`Score: ${score}/${pageList.length-2}`);
}

function checkRadioQuestion(elementsIndexes, question){
    let answers = [];
    for(i = 0; i < elementsIndexes.length; i++){
        answers.push(document.getElementById(`radio_${elementsIndexes[i]}`));
    }
    for(i = 0; i < answers.length; i++){
        let element = answers[i];
        if(element.checked){
            const name = document.getElementById(`for_${element.id}`);
            name.innerHTML === question.answer ? logAnswerResult(true) : logAnswerResult(false);
            break;
        }
    }
}

function checkAnswer3(){
    const answers = [];
    for(i = 0; i < 5; i++){
        answers.push(document.getElementById(`check_${i+1}`));
    }
    let answer = true;
    for(i = 0; i < answers.length; i++){
        const element = answers[i];
        const name = document.getElementById(`for_${element.id}`);
        if(element.checked && question3.answer.includes(name.innerHTML)){
            continue;
        }
        else if (element.checked){
            answer = false;
            break;
        }
        else if (!element.checked && question3.answer.includes(name.innerHTML)){
            answer = false;
            break;
        }
    }
    answer ? logAnswerResult(true) : logAnswerResult(false);
}

function checkAnswer4(){
    const answer1 = document.getElementById('block-1');
    const answer2 = document.getElementById('block-2');
    const answer3 = document.getElementById('block-3');
    const answer4 = document.getElementById('block-4');
    const dragBlock1 = document.getElementById('drag1');
    const dragBlock2 = document.getElementById('drag2');
    const dragBlock3 = document.getElementById('drag3');
    const dragBlock4 = document.getElementById('drag4');
    const q = question4;
    if(answer1.contains(dragBlock1) 
    && answer2.contains(dragBlock2) 
    && answer3.contains(dragBlock3) 
    && answer4.contains(dragBlock4)){
        logAnswerResult(true);
    }
    else{
        logAnswerResult(false);
    }
}

function checkAnswer5(){
    const q = question5;
    const selection1 = document.getElementById('option-question1');
    const selection2 = document.getElementById('option-question2');
    const selection3 = document.getElementById('option-question3');

    if(selection1.options[selection1.selectedIndex].text == q['opt1']
        && selection2.options[selection2.selectedIndex].text == q['opt2']
        && selection3.options[selection3.selectedIndex].text == q['opt3']){
            logAnswerResult(true);
    }
    else{
        logAnswerResult(false);
    }
}

function checkAnswer7(){
    const answer = document.getElementById('template-grid-css-implementation');
    if(answer.style.display == 'grid'
    && answer.style.backgroundColor == 'white'
    && answer.style.width == '501px'
    && answer.style.paddingBottom == '25px'
    && answer.style.rowGap == '30px'
    && answer.style.columnGap == '50px'){
        console.log("Correct!");
        score++;
    }
    console.log(`Score: ${score}/${pageList.length-2}`);
}

function checkAnswer9(){
    document.getElementById('enter-the-word').value == 'media' ? logAnswerResult(true) : logAnswerResult(false);
}

function checkAnswer10(){
    const selection = document.getElementById('select-media');
    selection.options[selection.selectedIndex].text == 'min-width' ? logAnswerResult(true) : logAnswerResult(false);
}

function checkAnswers(){
    if(currentPageIndex == 1){
        checkRadioQuestion([1, 2, 3], question1);
    }
    else if(currentPageIndex == 2){
        checkRadioQuestion([4, 5, 6, 7], question2);
    }
    else if(currentPageIndex == 3){
        checkAnswer3();
    }
    else if(currentPageIndex == 4){
        checkAnswer4();
    }
    else if(currentPageIndex == 5){
        checkAnswer5();
    }
    else if(currentPageIndex == 6){
        checkRadioQuestion([8, 9, 10, 11], question6)
    }
    else if(currentPageIndex == 7){
        checkAnswer7();
    }
    else if(currentPageIndex == 9){
        checkAnswer9();
    }
    else if(currentPageIndex == 10){
        checkAnswer10();
    }
}



function nextPage(){
    checkAnswers();
    pageList[currentPageIndex].style.display = 'none';
    currentPageIndex++;
    pageList[currentPageIndex].style.display = 'inline-block';
    if(currentPageIndex == 1){
        generateRadioQuestion([document.getElementById('for_radio_1'),
        document.getElementById('for_radio_2'),
        document.getElementById('for_radio_3')],
        question1);
    }
    else if (currentPageIndex == 2){
        generateRadioQuestion([document.getElementById('for_radio_4'),
        document.getElementById('for_radio_5'),
        document.getElementById('for_radio_6'),
        document.getElementById('for_radio_7')],
        question2);
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
    else if(currentPageIndex == 6){
        generateRadioQuestion([document.getElementById('for_radio_8'),
        document.getElementById('for_radio_9'),
        document.getElementById('for_radio_10'),
        document.getElementById('for_radio_11')],
        question6);
    }
    else if(currentPageIndex == 7){
        document.getElementById('implement-css-answers').style.display = 'inline-block';
        document.getElementById('template-grid-css-implementation').style.display = 'inline-block';
        document.getElementById('block-5').style.display = 'inline-block';
        document.getElementById('block-6').style.display = 'inline-block';
        document.getElementById('block-7').style.display = 'inline-block';
        document.getElementById('block-8').style.display = 'inline-block';
        implementCSS();
    }
    else if(currentPageIndex == pageList.length-1){
        generateResults();
    }

}

///////////////////////////////////////////////////
let user;

function makeUser(name, group){
    return {
        name,
        group
    }
};

function newTestUser(){
    const name = document.getElementById('entryNameInput').value;
    const group = document.getElementById('entryGroupInput').value;
    if(name.length >=2 && group.length >= 4){
        user = makeUser(name, group);
        nextPage(); 
    }
    else if(name.length < 2){
        alert('Ім\'я надто коротке');
    }
    else if(group.length < 4){
        alert('Назва групи надто коротка');
    }
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

function handlerDragEnter(event){
    event.preventDefault();
    this.classList.add("border-entering");
}

function handlerDragLeave(event){
    this.classList.remove("border-entering");
}

function handlerDragOver(event){
    event.preventDefault();
}

function handlerDrop(event){
    const dragFlag = event.dataTransfer.getData("dragItem");
    const dragItem = document.querySelector(`[data-item="${dragFlag}"]`)
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

////////////////////////////////////////////////////
//Надсилання результатів

function sendResults(){
    const messageTelegram = `Ім'я: ${user.name}
Група: ${user.group}
Оцінка: ${score}/${pageList.length-2}`

    const messageEmail = `Ім'я: ${user.name}<br>
Група: ${user.group}<br>
Оцінка: ${score}/${pageList.length-2}`

    sendEmail(messageEmail);
    sendTelegram(messageTelegram);
    alert('Успішно відправлено!');
}