let currentPageIndex = 0;
let page_0 = document.getElementById('page_0');
let page_1 = document.getElementById('page_1');
let page_2 = document.getElementById('page_2');
let page_3 = document.getElementById('page_3');
let page_4 = document.getElementById('page_4');
let page_5 = document.getElementById('page_5');
let page_6 = document.getElementById('page_6');
let page_7 = document.getElementById('page_7');
let page_8 = document.getElementById('page_8');
let page_9 = document.getElementById('page_9');
let page_10 = document.getElementById('page_10');
let page_results = document.getElementById('page_results');
let pageList = [page_0, page_1, page_2, page_3, page_4, page_5, page_6, page_7, page_8, page_9, page_10, page_results ]

function nextPage(){
    pageList[currentPageIndex].style.display = 'none';
    currentPageIndex++;
    pageList[currentPageIndex].style.display = 'inline-block';
}

function prevPage(){
    pageList[currentPageIndex].style.display = 'none';
    currentPageIndex--;
    pageList[currentPageIndex].style.display = 'inline-block';
}

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