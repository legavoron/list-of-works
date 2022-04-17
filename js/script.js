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


let objWork = {};

let temporaryElementValue = {
    length: 0,
    width: 0, 
    quantity: 1,
    work: 'none',
    square() {
        return (+this.length + +this.width) / 100 * +this.quantity;
    }
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


btnAdd.addEventListener('click', editTemporaryElementValue);

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

    console.log(temporaryElementValue);


    

}

errorMessageBlock.addEventListener('click', () => {
    hideElem(errorMessageBlock);
});

function checkParameters() {
    if (temporaryElementValue.work === 'none') {
        showErrorMessageBlock();
        errorMessage.innerHTML = 'Выберите работу';
    }
    
    if (temporaryElementValue.width === '') {
        showErrorMessageBlock();
        errorMessage.innerHTML = 'Укажите ширину';
    }

    if (temporaryElementValue.length === '') {
        showErrorMessageBlock()
        errorMessage.innerHTML = 'Укажите длину';
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
        quantity: 1,
        work: 'none'
    }
}

function clearValue() {
    lengthElem.value = '';
    widthElem.value = '';
    quantityElem = 1;

    hideColorWork.forEach(box => {
        hideElem(box);
    });
}

