let btnShow = document.querySelector('#btn_show');
let btnClose = document.querySelector('#btn_cls');
let containerResult = document.querySelector('.wrapper__hideContainer');



btnShow.addEventListener('click', showResult);
btnClose.addEventListener('click', hideResult);

function showResult() {
    containerResult.style.display = 'block';
}

function hideResult() {
    containerResult.style.display = 'none';
}
