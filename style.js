const viewAll=document.getElementById("viewAll");
window.openModalM = function () {
    if (!viewAll) return;
        viewAll.classList.remove('hidden');
};
window.closeModalM = function () {
    if (!viewAll) return;
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