// main.js
window.addEventListener('load', ()=>{
/*주메뉴*/
// 각 li에 마우스 올리면 풀다운 메뉴 내려오고 보여야 됨
//키보드 탭으로 움직여야됨
const submenu = document.querySelectorAll(".gnb>ul>li>div")
console.log(submenu)
const gnbmenu = document.querySelectorAll(".gnb>ul>li")
const headerwrap = document.querySelector(".header_wrap");


// sub1.js
const stp1btn = document.querySelectorAll(".step1>ul>li")
const stp1btna = document.querySelector("step1>ul>li>a")
for(let i=0;i<stp1btn.length;i++){
stp1btn[i].addEventListener("click",e=>{
  e.preventDefault();
  stp1btn[i].firstElementChild.style.background = `#043285 url(images/ico_inquiry_on_0${i+1}.png) no-repeat 50% 35% `;
  stp1btn[i].firstElementChild.style.color =`#fff`;
}

)
}



for(let i=0;i<gnbmenu.length;i++){
  gnbmenu[i].addEventListener("mouseover", e=>{
    e.preventDefault;
    var ht = e.currentTarget.children[1].offsetHeight;
    headerwrap.style.height = `${70+ht}px`
    submenu[i].style.display = `block`;
  }
  )
  gnbmenu[i].addEventListener("mouseleave",e=>{
    e.preventDefault;
    submenu[i].style.display = `none`
    headerwrap.style.height = `70px`;

  })
  gnbmenu[i].children[0].addEventListener('focus', e=>{
    e.currentTarget.parentElement.style.display = `block`;
    var ht = e.currentTarget.nextElementSibling.offsetHeight;
    headerwrap.style.height = `${70+ht}px`
  })

  gnbmenu[i].children[0].addEventListener('blur',e=>{
    e.currentTarget.parentElement.style.display = `none`;
    headerwrap.style.height = `70px`
  })
}


/*검색박스*/
//검색버튼 누르면 검색박스 보이고
//닫기 버튼 누르면 검색 박스 안보이고
const btn_srch = document.querySelector(".btn_srch")
const srch_wrap= document.querySelector(".srch_wrap")
const btn_srch_close = document.querySelector(".btn_srch_close")


btn_srch.addEventListener("click",e=>{
  e.preventDefault;
  srch_wrap.style.display = `block`;
  document.body.style.overflow = "hidden";
})
btn_srch_close.addEventListener("click",e=>{
  e.preventDefault;
  srch_wrap.style.display = `none`;
  document.body.style.overflow = "unset";
})

// 오토배너
const btnPrev = document.querySelector(".btn_prev")
const btnNext = document.querySelector(".btn_next")
const slide = document.querySelectorAll("li.slide")
const slideRoll = document.querySelectorAll(".slide_roll li")
console.log(slideRoll)
let bnnNum=0
let lastNum = document.querySelectorAll(".slide_wrap > li").length - 1;
// // next 버튼
//li.slide.active
//.slide_roll>ul>li.on>a

function activation(index, list){
  for(let el of list){
    el.classList.remove("on", "active");
  }
  list[index].classList.add("on","active");
}

btnNext.addEventListener("click", e=>{
    e.preventDefault;
    bnnNum++;
    if(bnnNum>lastNum) bnnNum = 0;
    activation(bnnNum,slide);
    activation(bnnNum,slideRoll);

    // slide.forEach(item =>{
    //   item.classList.remove("active");
    // });
    // slide[bnnNum].classList.add("active");

    // slideRoll.forEach(idx=>{
    //   idx.classList.remove("on");

    // });
    // slideRoll[bnnNum].classList.add("on")
    

  });


// prev버튼
btnPrev.addEventListener("click",e=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum<0) bnnNum=lastNum;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
})

//오토배너 5초마다
function autoBanner(){
  //next버튼 눌렀을때
  bnnNum++;
  if(bnnNum>lastNum) bnnNum=0;
  activation(bnnNum,slide);
  activation(bnnNum,slideRoll);
  autoBnn = setTimeout(autoBanner,5000);//재귀함수
}
let autoBnn = setTimeout(autoBanner,5000)//최초호출

//배너 재생 멈춤 버튼
//배너멈추고 이미지 바뀌고
//다시 누르면 배너 재생 이미지 바뀌고
let flag = true;
const btnPlay = document.querySelector(".btn_play")

btnPlay.addEventListener("click",e=>{
  e.preventDefault();
  if(flag) {//멈춤
  btnPlay.classList.add("on")
  clearTimeout(autoBnn);
  flag = false;
}else{//재생
btnPlay.classList.remove("on");
autoBnn = setTimeout(autoBanner,5000);
flag=true;
}
})






//롤링버튼 클릭 해당배너 이동
for(let i=0; i<slideRoll.length;i++){
slideRoll[i].addEventListener("click",e=>{
  e.preventDefault();
  activation(i,slide);
  activation(i,slideRoll);

})}

// top버튼
// 클릭하면 스크롤이 맨위로 올라감
const btntop = document.querySelector(".btn_top")
btntop.addEventListener("click",e=>{
  e.preventDefault;
  window.scroll({
    top: 0,
    behavior : "smooth"
  })
  }
)
//스크롤을 움직이면 스크롤 위치에 따라서 탑버튼이 바뀜
window.addEventListener('scroll', ()=> {
  let scroll = document.querySelector(`html`).scrollTop;
  //let scroll = window.pageYOffset;
  console.log(scroll);
  if(scroll <= 0){
    btntop.classList.remove("on","ab");
  }else if(scroll > 2550){
    btntop.classList.add("ab");
    btntop.classList.add("on");
  }else{
    btntop.classList.remove("ab");
    btntop.classList.add("on")
  }

})

// sub1.js
// 스크롤시에 요소들 하나씩 보이게

function isElementVisible(element) {
  const elementPosition = element.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;
  return elementPosition < screenHeight;
}

function showOnScroll() {
  const scrollFadeElements = document.querySelectorAll(".scroll-fade");

  for (const element of scrollFadeElements) {
    if (isElementVisible(element)) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  }
}

window.addEventListener("scroll", showOnScroll);

// 페이지 로딩 시 첫 화면에 있는 요소가 보이도록 함
document.addEventListener("DOMContentLoaded", showOnScroll);

});




