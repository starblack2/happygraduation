// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//Ketika Humberger Menu Di Klik
document.querySelector("#humberger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Klik Di Luar Sidebar Untuk Menghilangkan Nav
const Humberger = document.querySelector("#humberger-menu");

document.addEventListener("click", function (e) {
  if (!Humberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
