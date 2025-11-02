const viewAll=document.getElementById("viewAll");
window.openModalM = function () {
        viewAll.classList.remove('hidden');
};
window.closeModalM = function () {
        viewAll.classList.add('hidden');
};

const head = document.getElementById('head');
  head.style.top = '0';
const btn = document.getElementById('btn');
  btn.addEventListener("click", () => {
    btn.textContent = "Hide";
  });
  btn.addEventListener("onmuseout", () => {
    return ;
  });
const btnadd=document.getElementById("btnadd");
window.ButtonaddOpen=function(){
  btnadd.classList.remove('hidden');
  btnadd.classList.add('fixed');
};
window.ButtonaddClose = function () {
      btnadd.classList.add('hidden');
};
const jepor=document.getElementById("jepor");
window.porOpen=function(){
  jepor.classList.remove('hidden');
  jepor.classList.add('fixed');
};
window.porClose = function () {
  jepor.classList.add('hidden');
};


