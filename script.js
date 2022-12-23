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
    alert(user.name + " " + user.surname);
}