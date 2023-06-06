let menuBtn = document.querySelector('.menu_btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
menu.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
document.addEventListener('click', e => {
    let target = e.target;
let its_menu = target == menu;
let its_hamburger = target == menuBtn;
let menu_is_active = menu.classList.contains('active');
let line_burg1 = target == document.querySelector('.line_burg1');
let line_burg2 = target == document.querySelector('.line_burg2');
let line_burg3 = target == document.querySelector('.line_burg3');
let line_burg4 = target == document.querySelector('.line_burg4');

if (!its_menu && !its_hamburger && menu_is_active && !line_burg1
    && !line_burg2
    && !line_burg3
    && !line_burg4) {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
}

}
)
// ДОБАВИТЬ КЛАСС FILLTE ДЛЯ РАЗМЫТИЯ
let activ1=document.querySelector('.act1');
let activ2=document.querySelector('.act2');
let activ3=document.querySelector('.act3');
let block1=document.querySelectorAll('div.acti1');
let block2=document.querySelectorAll('div.acti2');
let block3=document.querySelectorAll('div.acti3');

    activ1.addEventListener('click',function () {
        for (let i=0; i<5;i++){
           if (block1[i]) {block1[i].classList.remove('fillt');}
            if (block1[i]) { block2[i].classList.remove('fillt')}
            if (block3[i]) {block3[i].classList.remove('fillt');}
        }
        for (let i=0; i<5;i++){
            if (block1[i]) block1[i].classList.add('fillt') ;
        }

    }
)
activ2.addEventListener('click',function () {
    for (let i=0; i<5;i++){
        if (block1[i]) {block1[i].classList.remove('fillt')}
        if (block1[i]) { block2[i].classList.remove('fillt')}
        if (block3[i]) {block3[i].classList.remove('fillt')}
    }
    for (let i=0; i<5;i++){
        if (block2[i])  block2[i].classList.add('fillt') ;
    }

    }
)
activ3.addEventListener('click',function () {
    for (let i=0; i<5;i++){
        if (block1[i]) {block1[i].classList.remove('fillt');}
        if (block1[i]) { block2[i].classList.remove('fillt')}
        if (block3[i]) {block3[i].classList.remove('fillt')}
    }
    for (let i=0; i<5;i++){
        if (block3[i])  block3[i].classList.add('fillt') ;
    }
    }
)
