const viewAll=document.getElementById("viewAll");
window.openModalM = function () {
    if (!viewAll) return;
        viewAll.classList.remove('hidden');
};
window.closeModalM = function () {
    if (!viewAll) return;
        viewAll.classList.add('hidden');
};
// head.style.position="fixed";
// head.style.width="100%";
// head.style.height="25vh";
// head.style.backgroundColor="white";
// head.style.marginTop="0";

const head = document.getElementById('head');
      window.addEventListener('scroll', function () {
        if (window.pageYOffset >= 0&&head) {
          head.style.position = 'fixed';
          head.style.top = '0';
          head.style.width = '100%';
          head.style.height='18vh';
          
        }
    });
