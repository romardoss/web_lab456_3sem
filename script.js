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

function nextPage(){
    pageList[currentPageIndex].style.display = 'none';
    currentPageIndex++;
    pageList[currentPageIndex].style.display = 'inline-block';
    if(currentPageIndex == 4){
        document.getElementById('drag-and-drop-answers').style.display = 'inline-block';
        document.getElementById('template-grid').style.display = 'inline-block';
        document.getElementById('block-1').style.display = 'inline-block';
        document.getElementById('block-2').style.display = 'inline-block';
        document.getElementById('block-3').style.display = 'inline-block';
        document.getElementById('block-4').style.display = 'inline-block';
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
    dragItem.classList.add("draged");
    this.append(dragItem);
}