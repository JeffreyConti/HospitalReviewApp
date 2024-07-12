let sliderOne = document.getElementById("myRangeOne");
let sliderTwo = document.getElementById("myRangeTwo");
let sliderThree = document.getElementById("myRangeThree");
let slideFour = document.getElementById("myRangeFour");

let outputOne = document.getElementById("demoOne");
let outputTwo = document.getElementById("demoTwo");
let outputThree = document.getElementById("demoThree");
let outputFour = document.getElementById("demoFour");


outputOne.innerHTML = sliderOne.value;
outputTwo.innerHTML = sliderTwo.value;
outputThree.innerHTML = sliderThree.value;
outputFour.innerHTML = slideFour.value;


sliderOne.oninput = function () {
    outputOne.innerHTML = this.value;
}
sliderTwo.oninput = function () {
    outputTwo.innerHTML = this.value;
}
sliderThree.oninput = function () {
    outputThree.innerHTML = this.value;
}
slideFour.oninput = function () {
    outputFour.innerHTML = this.value;
}

document.querySelector('main h2').addEventListener('click', () => {
    document.querySelector('main  h2').classList.toggle('clicked');
})

let button = document.querySelector('button');

button.addEventListener('click', () => {
    alert('Review Submitted');
});