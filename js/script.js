let wrapper = document.querySelector('.wrapper');

let lengthElem = document.querySelector('#lengthElem');
let widthElem = document.querySelector('#widthElem');
let quantityElem = document.querySelector('#quantityElem');

let listContainersWorks = document.querySelectorAll('.works__workBlock');
let hideColorWork = document.querySelectorAll('.workBlock__none');

let containerResult = document.querySelector('.wrapper__hideContainer');

let btnShow = document.querySelector('#btn_show');
let btnClose = document.querySelector('#btn_cls');

let btnAdd = document.querySelector('#btn_add');
let btnReset = document.querySelector('#btn_reset');

let errorMessageBlock = document.querySelector('.errorMessageBlock');
let errorMessage = errorMessageBlock.querySelector('h1');

let hideElementBlock = document.querySelector('.hide__block_element_container');



quantityElem.value = 1;
let flag = true;

let works = {
    name: 'works',
    length: [],
    width: [], 
    quantity: [],
    work: [],
}

let temporaryElementValue = {
    name: 'temporaryElementValue',
    length: 0,
    width: 0, 
    quantity: 1,
    work: 'none',
}

let chooseWorks = {
    shlif: 'шлифовка',
    izol: 'шлифовка изолянта',
    grunt: 'шлифовка грунта',
    polir: 'полировка',
    pokrIzol: 'покрытие изолянтом',
    pokrGrunt: 'покрытие грунтом',
    pokras: 'покраска'
};


btnAdd.addEventListener('click', () => {
    editTemporaryElementValue();
    addParameters();
});

function editTemporaryElementValue() {
    temporaryElementValue.length = lengthElem.value;
    temporaryElementValue.width = widthElem.value;
    temporaryElementValue.quantity = quantityElem.value;

    
    hideColorWork.forEach((elem, i) => {
        if (elem.style.display === 'block') {
            let tempValueWork = listContainersWorks[i].id;
            temporaryElementValue.work = chooseWorks[tempValueWork];
        }
    });

    checkParameters();
}

errorMessageBlock.addEventListener('click', () => {
    hideElem(errorMessageBlock);
});


function addParameters() {
    if (flag) {
        works.length.push(temporaryElementValue.length);
        works.width.push(temporaryElementValue.width);
        works.quantity.push(temporaryElementValue.quantity);
        works.work.push(temporaryElementValue.work);
    }

        
    // console.log(works);
    clearValue();
    resetTemporaryElementValue();
    addNameToComplete();
}

function checkParameters() {
    flag = true;

    if (temporaryElementValue.work === 'none') {
        showErrorMessageBlock();
        errorMessage.innerHTML = 'Выберите работу';
        flag = false;
        resetTemporaryElementValue();
    }
    
    if (widthElem.value === '' || +widthElem.quantity <= 10) {
        showErrorMessageBlock();
        errorMessage.innerHTML = 'Укажите ширину';
        flag = false;
        resetTemporaryElementValue();
    }

    if (lengthElem.value === '' || +lengthElem.quantity <= 10) {
        showErrorMessageBlock()
        errorMessage.innerHTML = 'Укажите длину';
        flag = false;
        resetTemporaryElementValue();
    }

    if (lengthElem.quantity === '' || +lengthElem.quantity <= 0) {
        showErrorMessageBlock()
        errorMessage.innerHTML = 'Укажите длину';
        flag = false;
        resetTemporaryElementValue();
    }
}

function addNameToComplete() {
    
    cleanDiv(hideElementBlock);


    let obj = {};

    

    works.work.forEach((elem, i) => {
        if (obj[elem]) {
            let objWorks = {
                len: '',
                wid: '',
                quant: ''
            }
            objWorks.len = works.length[i];
            objWorks.wid = works.width[i];
            objWorks.quant = works.quantity[i];
            obj[elem].push(objWorks);
        } else {
            let objWorks = {
                len: '',
                wid: '',
                quant: ''
            }
            objWorks.len = works.length[i];
            objWorks.wid = works.width[i];
            objWorks.quant = works.quantity[i];

            obj[elem] = [];
            obj[elem].push(objWorks);
        }
    });

    let arrWorks = [];

    for (let key in obj) {
        arrWorks.push(key);
    }

    console.log(obj);

    for (let key in obj) {
        let blockWorkName = `<div class="hide__block_element">
                                <div class="hide__block_element_header">
                                <h4 class="hide_h4">${key}</h4>
                                </div>
                             </div>`;


        hideElementBlock.insertAdjacentHTML('beforeend', blockWorkName);

        for (let j = 0; j < obj[key].length; j ++) {
            let blockWorkValue = `<div class="hide__block_element_values">
                                    <h4 class="hide_h4_value">${obj[key][j].len}*${obj[key][j].wid}мм</h4>
                                    <h4 class="hide_h4_value">${obj[key][j].quant}шт</h4>
                                    <div class="hide_workValueContainer__icon">
                                        <img src="./image/bin.svg" alt="" id="${j}">
                                    </div>
                                </div>`; 

            hideElementBlock.insertAdjacentHTML('beforeend', blockWorkValue);
            


        }                   
                         
    }
    
}










// --------------------- Clic -> show hide color ------------------
listContainersWorks.forEach((elem, i) => {
    elem.addEventListener('click', () => {
        
        hideColorWork.forEach(box => {
            hideElem(box);
        });

        showElem(hideColorWork[i]);
    });
})



// ------------------------Show and hide container result -----------
btnShow.addEventListener('click', ()=> {
    showElem(containerResult);
});
btnClose.addEventListener('click', ()=> {
    hideElem(containerResult);
});

//  -------------------------- Additional functions ---------------
function showElem(elem) {
    elem.style.display = 'block';
}
function hideElem(elem) {
    elem.style.display = 'none';
}
function showErrorMessageBlock() {
    errorMessageBlock.style.display = 'flex';
}
// --------------------------------- Reset Element Value ----------

function resetTemporaryElementValue() {
    temporaryElementValue = {
        length: 0,
        width: 0, 
        quantity: 0,
        work: 'none'
    }
}

function clearValue() {
    lengthElem.value = '';
    widthElem.value = '';
    quantityElem.value = '1';


    hideColorWork.forEach(box => {
        hideElem(box);
    });

    flag = true;
}

function cleanDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

