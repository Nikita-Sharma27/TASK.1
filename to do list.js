// let's get the objects 
let input = document.querySelector('#addtask');
let btn = document.querySelector('#btn');
let list = document.querySelector('#ul');
let el = document.getElementsByTagName('li');
//we will create function that will allow us to add task 
/*btn.addEventListener('click', ({
console.log("hiii")

let txt = input.value;
if (txt == '') {
    alert('You must Write something');
} else {
    let li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = '';
}
});*/
function button(e) {
    let txt = input.value;
    if (txt == '') {
        alert('You must Write something');
    } else {
        let li = document.createElement('li');
        li.innerHTML = txt;
        list.insertBefore(li, list.childNodes[0]);
        input.value = '';
    }
}

//functin that will allow us markthe object done 
list.addEventListener('click', e => {
    if (e.target.tagName == 'LI') {
        e.target.classList.toggle('checked')
    }
});