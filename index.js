// let a = () => {
//   let b = window.scrollY
//   console.log(b);
//   if(b > 1000){
//     document.querySelector('body').classList.add('bg');
//   }  
//   else{
//     document.querySelector('body').classList.remove('bg');
//   }
// }

// document.addEventListener('scroll', a)


let burger = document.querySelector('.burger');
let links = document.querySelector('.links');

let switchButton = document.querySelector('.switch-button')
let dotButton = document.querySelector('.dot-button')

let body = document.querySelector('body')
let logoIMG = document.querySelector('.logo-img')

let switchBodyTheme = ()=>{
  body.classList.toggle('dark');
  body.classList.toggle('light');
  logoIMG.classList.toggle('dark');
}
let switchButtonTheme = ()=>{
  switchButton.classList.toggle('dark');
  switchButton.classList.toggle('light');
  dotButton.classList.toggle('dark');
  dotButton.classList.toggle('light');
}

burger.addEventListener('click', ()=>{
  links.classList.toggle('open');
})
switchButton.addEventListener('click', ()=>{
  dotButton.classList.toggle('right');
  switchButtonTheme()
  switchBodyTheme();
})