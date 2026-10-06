const button=document.querySelector('.menu');
const nav=document.querySelector('.nav-links');
if(button&&nav){
  button.addEventListener('click',()=>{
    nav.classList.toggle('open');
    button.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false');
  });
}
