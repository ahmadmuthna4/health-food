// nav 
let btBar=document.querySelector(".bar");
let listNav=document.querySelector("#list-nav");
let closee=document.getElementById("close");
let viewMenu=document.getElementById("view-menu");
let closeMenu=document.getElementById("close-menu");
// form  home
let openForm=document.getElementById("open-form");
let closeForm=document.getElementById("close-form");
let openMas=document.getElementById("open-mas");
let boxForm=document.querySelector(".box");
let mas=document.querySelector(".mas");
// form feedback 
let openForm2=document.getElementById("open-form2");
let closeForm2=document.getElementById("close-form2");
let openMas2=document.getElementById("open-mas2");
let boxForm2=document.querySelector(".box2");
let mas2=document.querySelector(".mas2");
// form contackt 
let openForm3=document.getElementById("open-form3");
let closeForm3=document.getElementById("close-form3");
let openMas3=document.getElementById("open-mas3");
let boxForm3=document.querySelector(".box3");
let mas3=document.querySelector(".mas3");

// nav 
btBar.onclick=()=>{
    if (listNav.style.display=="none") {
        listNav.style.display="flex";
        listNav.style.maxWidth="150px";
        listNav.style.right="7px";
        viewMenu.style.display="none";
        closeMenu.style.display="block";
        console.log(1);
       
    }else{
        listNav.style.display="none";
        listNav.style.maxWidth="0";
        listNav.style.right="700px";
        viewMenu.style.display="block";
        closeMenu.style.display="none";
        console.log(2);    
    }
}
// form home
 
openForm.onclick=()=>{
    boxForm.style.display="flex";
   
}
closeForm.onclick=()=>{
    boxForm.style.display="none";
    mas.style.display="none";
   
}
openMas.onclick=()=>{
    mas.style.display="flex";
   
}
// form feedback
 
openForm2.onclick=()=>{
    boxForm2.style.display="flex";
   
}
closeForm2.onclick=()=>{
    boxForm2.style.display="none";
    mas2.style.display="none";
   
}
openMas2.onclick=()=>{
    mas2.style.display="flex";
   
}
// form contackt
 
openForm3.onclick=()=>{
    boxForm3.style.display="flex";
   
}
closeForm3.onclick=()=>{
    boxForm3.style.display="none";
    mas3.style.display="none";
   
}
openMas3.onclick=()=>{
    mas3.style.display="flex";
   
}
// change content feedbacks 
let arrowLeft=document.getElementById("arrow-left");
let arrowRight=document.getElementById("arrow-right");
let imgFeedbacks=document.getElementById("img-feedbacks");
let descriptionFeedbacks=document.getElementById("description-feedbacks");
let titelFeedbacks=document.getElementById("titel-feedbacks");
 const itemsFeedbacks = [
            {
                src: "images/fedback1.jpg",
                titel: "Martha ",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio ea esse quibusdam laborum nisi aut sed saepe, aliquam mollitia fuga quidem autem nobis illum deleniti quaerat consequuntur natus aperiam.",
            },
            {
                src: "images/fedback2.png",
                titel: "David ",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio ea esse quibusdam laborum nisi aut sed saepe, aliquam mollitia fuga quidem autem nobis illum deleniti quaerat consequuntur natus aperiam.",
            },
            {
                src: "images/fedback3.png",
                titel: "Ruby ",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio ea esse quibusdam laborum nisi aut sed saepe, aliquam mollitia fuga quidem autem nobis illum deleniti quaerat consequuntur natus aperiam.",
            },
            {
                src: "images/fedback4.png",
                titel: "Ruby ",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio ea esse quibusdam laborum nisi aut sed saepe, aliquam mollitia fuga quidem autem nobis illum deleniti quaerat consequuntur natus aperiam.",
            },
            {
                src: "images/fedback5.png",
                titel: "jacob ",
                desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio ea esse quibusdam laborum nisi aut sed saepe, aliquam mollitia fuga quidem autem nobis illum deleniti quaerat consequuntur natus aperiam.",
            },
        ]
        var count=0;
        imgFeedbacks.src=itemsFeedbacks[0].src;
        descriptionFeedbacks.innerHTML=itemsFeedbacks[0].desc;
        titelFeedbacks.innerHTML=itemsFeedbacks[0].titel;
     arrowRight.onclick=()=>{
         if (count<=3) {
            count++;
        }else{
            count=0;
        }
        imgFeedbacks.src=itemsFeedbacks[count].src;
        descriptionFeedbacks.innerHTML=itemsFeedbacks[count].desc;
        titelFeedbacks.innerHTML=itemsFeedbacks[count].titel;
        

}
     arrowLeft.onclick=()=>{
          if (count>0) {
            count--;
        }else{
            count=4;
        }
        imgFeedbacks.src=itemsFeedbacks[count].src;
        descriptionFeedbacks.innerHTML=itemsFeedbacks[count].desc;
        titelFeedbacks.innerHTML=itemsFeedbacks[count].titel;
         
        
}

// active pagination in mobile
let quere=window.matchMedia("(min-width: 361px) and (max-width: 768px)");
let quere2=window.matchMedia("(max-width: 360px)");

// scroll up && active pagination
let span = document.querySelector(".up");
let activePaginations=document.getElementsByClassName("active-pagination");

window.onscroll = function () {
if (quere.matches) {
 this.scrollY >= 0 &&this.scrollY <830 ? activePaginations[0].classList.add("active-paginations") : activePaginations[0].classList.remove("active-paginations");
  this.scrollY >= 831 &&this.scrollY <2892 ? activePaginations[1].classList.add("active-paginations") : activePaginations[1].classList.remove("active-paginations");
  this.scrollY >= 2893 &&this.scrollY<4568 ? activePaginations[2].classList.add("active-paginations") : activePaginations[2].classList.remove("active-paginations");
  this.scrollY >= 4569 && this.scrollY<5166? activePaginations[3].classList.add("active-paginations") : activePaginations[3].classList.remove("active-paginations");
  this.scrollY >= 5167 ? activePaginations[4].classList.add("active-paginations") : activePaginations[4].classList.remove("active-paginations");
}else if (quere2.matches) {
    
     this.scrollY >= 0 &&this.scrollY <725 ? activePaginations[0].classList.add("active-paginations") : activePaginations[0].classList.remove("active-paginations");
  this.scrollY >= 726 &&this.scrollY <2788 ? activePaginations[1].classList.add("active-paginations") : activePaginations[1].classList.remove("active-paginations");
  this.scrollY >= 2789 &&this.scrollY<4470 ? activePaginations[2].classList.add("active-paginations") : activePaginations[2].classList.remove("active-paginations");
  this.scrollY >= 4471 && this.scrollY<5082? activePaginations[3].classList.add("active-paginations") : activePaginations[3].classList.remove("active-paginations");
  this.scrollY >= 5083 ? activePaginations[4].classList.add("active-paginations") : activePaginations[4].classList.remove("active-paginations");
    
}else 
{
      this.scrollY >= 0 &&this.scrollY <619 ? activePaginations[0].classList.add("active-paginations") : activePaginations[0].classList.remove("active-paginations");
  this.scrollY >= 620 &&this.scrollY <1616 ? activePaginations[1].classList.add("active-paginations") : activePaginations[1].classList.remove("active-paginations");
  this.scrollY >= 1617 &&this.scrollY<2318 ? activePaginations[2].classList.add("active-paginations") : activePaginations[2].classList.remove("active-paginations");
  this.scrollY >= 2319 && this.scrollY<2980? activePaginations[3].classList.add("active-paginations") : activePaginations[3].classList.remove("active-paginations");
  this.scrollY >= 2982 ? activePaginations[4].classList.add("active-paginations") : activePaginations[4].classList.remove("active-paginations");

}    

  console.log(this.scrollY);

  this.scrollY >= 500 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};