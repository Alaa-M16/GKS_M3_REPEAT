// First task

const containsOnlyDigits = (input) => {
    const regExp = /^\d+$/;
    return regExp.test(input);
};

console.log(containsOnlyDigits("98765"));
console.log(containsOnlyDigits("9b765")); 


// Second task

const logEverySecond = () => {
    let counter = 1;
    setInterval(() => {
        console.log(`it have been a second: ${counter}`);
        counter++;
    }, 1000);
};

logEverySecond();

// Task 3


const countdown = () => {
    let num = 5;
    const timer = setInterval(() => {
        console.log(num);
        if (num === 15) {
            clearInterval(timer); 
        }
        num++;
    }, 1000);
};

countdown();


// Task 4 

const block = document.getElementById('colorBlock');

block.addEventListener('click', () => {
    block.classList.toggle('highlight'); 
});


// Task 5 

const xhr = new XMLHttpRequest();

xhr.open('GET', './person.json', true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jsonResponse = JSON.parse(xhr.responseText);
        console.log(`Name: ${jsonResponse.name}`);
        console.log(`Age: ${jsonResponse.age}`);
        console.log(`City: ${jsonResponse.city}`);
        console.log(`profession: ${jsonResponse.profession}`);
        console.log(`hobby: ${jsonResponse.hobby}`);
    }
};

xhr.send();

