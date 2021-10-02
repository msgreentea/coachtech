// 一番上に戻すやつ
function scrollTop(elem) {
  const target = document.getElementById(elem);
  target.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

scrollTop('button');


// ハンバーガーメニュー
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const nav = document.getElementById("nav");
  nav.classList.toggle('in');
});


// アコーディオンパネル
const menu = document.getElementsByClassName("menu");
for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
}
function toggle() {
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
}

// タブ
const tabs = document.getElementsByClassName('tab-menu__item');
for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', tabSwitch);
}
function tabSwitch() {
  document.getElementsByClassName('active')[0].classList.remove('active');
  this.classList.add('active');
  document.getElementsByClassName('show')[0].classList.remove('show');
  const arrayTabs = Array.prototype.slice.call(tabs);
  const index = arrayTabs.indexOf(this);
  document.getElementsByClassName('tab-content__item')[index].classList.add('show');
};