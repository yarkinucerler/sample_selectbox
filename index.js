/**
 * Created by Yarkin UCERLER on 8.07.2018.
 */

'use strict';

let currentFocus = 0;

document.addEventListener('click', function (e) {
    const target = e.target;
    const container = document.querySelector('.select');

    if(!container.contains(target)) {
        closeAllLists()
    }
});

for(let item of document.querySelectorAll('.select-list-item')) {
    item.addEventListener('click', function () {
        document.getElementById("select-input").value = this.innerHTML;
        closeAllLists();
    });
}

const focusAction = (e) => {
    console.log('is focus');
    document.querySelector('#select-list').style.display = 'block';
};

const blurAction = function (e) {
    console.log('is blur');

    const target = e.target;
    const container = document.querySelector('.select');

    if(!container.contains(target)) {
        closeAllLists()
    }
};

const keydownAction = (e) => {
    let x = document.getElementById("select-list");
    if (x) x = x.getElementsByTagName("li");
    if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
    } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
    } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
        }
    }
};

const addActive = (x) => {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("active");
};

const removeActive = (x) => {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
};

const closeAllLists = () => {
    document.getElementById("select-list").style.display = 'none';
};