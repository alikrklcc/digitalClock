let saat=document.getElementById("saat");
let dakika=document.getElementById("dakika");
let saniye=document.getElementById("saniye");
let ara=document.querySelector(".ara");
let red=document.getElementById("red");
let bg=document.getElementById("clock");
let divTime=document.querySelectorAll(".time");

// HER SANIYE BIR DIV SEÇİYOR VE O DIVE BG COLOR ATAMASI YAPILIYOR //
// BAZEN 2-3 KERE AYNI DIV SECILDIGI ICIN DIGER DIVLER DEFAULT RENK GREEN OLARAK KALIYOR //

function divTimee(){

    let renk1=getRandomColor();
    let renk2=getRandomColor();  

    divTime[Math.floor(Math.random()*divTime.length)].style.background=`linear-gradient(180deg, ${renk1}, ${renk2})`
}



function getRandomColor(){
    let arkaplanlar=[
        "red","blue","green","orange","white","black","orangered","aqua","cyan","purple","pink","#e7f26d","#7d5c10","#8278de","#e667f2",
        "#c88cdd","#f98cbb","whitesmoke","goldenrod","gold","#632402","#13818e","#8066ca","#963d3a","#46083c","#4cab8c","#f69e03"
    ];
    let randomArkaplan=arkaplanlar[Math.floor(Math.random()*arkaplanlar.length)];
   
    return randomArkaplan;
    

}



function tarihGoster(){
    let renk1=getRandomColor();
    let renk2=getRandomColor();
    divTimee();

    bg.style.background=`linear-gradient(90deg, ${renk1}, ${renk2})`;
    ara.style.color=renk1;
    red.style.color=renk2;
    const tarihim=new Date();
    saat.innerHTML=tarihim.getHours();
    dakika.innerHTML=tarihim.getMinutes();
    saniye.innerHTML=tarihim.getSeconds();
    if(saniye.innerHTML<10){
        saniye.innerHTML=`0${tarihim.getSeconds()}`;
    }

    if(dakika.innerHTML<10){
        dakika.innerHTML=`0${tarihim.getMinutes()}`;
    }

    if(saat.innerHTML<10){
        saat.innerHTML=`0${tarihim.getHours()}`
    }
  
}
  

setInterval(tarihGoster,1000);
