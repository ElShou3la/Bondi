// the Ul Activation

let ul_1 = document.getElementById("ul-1");
let ul_2 = document.getElementById("ul-2");
let ul_3 = document.getElementById("ul-3");
let ul_4 = document.getElementById("ul-4");
let ul_5 = document.getElementById("ul-5");

let list = document.querySelectorAll(".ul-chooise");
let list_array = Array.from(list);

ul_1.addEventListener(`click`, () => {
  for (let i = 0; i < list_array.length; i++) {
    list_array[i].classList.remove(`active`);
    ul_1.classList.add(`active`);
    list_array[i].classList.remove(`rounded-pill`);
    ul_1.classList.add(`rounded-pill`);
  }
});
ul_2.addEventListener(`click`, () => {
  for (let i = 0; i < list_array.length; i++) {
    list_array[i].classList.remove(`active`);
    ul_2.classList.add(`active`);
    list_array[i].classList.remove(`rounded-pill`);
    ul_2.classList.add(`rounded-pill`);
  }
});
ul_3.addEventListener(`click`, () => {
  for (let i = 0; i < list_array.length; i++) {
    list_array[i].classList.remove(`active`);
    ul_3.classList.add(`active`);
    list_array[i].classList.remove(`rounded-pill`);
    ul_3.classList.add(`rounded-pill`);
  }
});
ul_4.addEventListener(`click`, () => {
  for (let i = 0; i < list_array.length; i++) {
    list_array[i].classList.remove(`active`);
    ul_4.classList.add(`active`);
    list_array[i].classList.remove(`rounded-pill`);
    ul_4.classList.add(`rounded-pill`);
  }
});
ul_5.addEventListener(`click`, () => {
  for (let i = 0; i < list_array.length; i++) {
    list_array[i].classList.remove(`active`);
    ul_5.classList.add(`active`);
    list_array[i].classList.remove(`rounded-pill`);
    ul_5.classList.add(`rounded-pill`);
  }
});

for (let i = 0; i > list_array.length; i++) {
  console.log(i);
}

//  End Of ul Activation



// Start shuffle
let randomArray = Array.from({ length: 8 }, () =>
  Math.floor(Math.random() * 8)
);
// Array.from({length: 40}, () => Math.floor(Math.random() * 40));

let photos_Arr = document.querySelectorAll(".photo-shuffle");
let photosArray = Array.from(photos_Arr);

for (let i = 0; i < photosArray.length; i++) {
  for (let k = 0; k < 8; k++) {
    photosArray[i].setAttribute(`style` , `order:${randomArray[i]}`)
  }
}





