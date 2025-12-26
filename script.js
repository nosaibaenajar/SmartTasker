// 1. Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// in login page

function login(event) {
  event.preventDefault(); // يمنع إعادة تحميل الصفحة

  const username = document.getElementById("username").value;

  if (username.toLowerCase().includes("admin")) {
    window.location.href = "manager.html";
  } else {
    window.location.href = "employee.html";
  }
}

// home page status counter

document.addEventListener("DOMContentLoaded",()=>{
  let d=0; // no counting happend
  const c=document.querySelectorAll(".counter"),
        s=document.querySelector(".stats-container");

  // scrolling moniter
  new IntersectionObserver(([e],o)=>{
    // if you not in stats section || d=1 
    if(!e.isIntersecting||d) return;
    d=1;
    c.forEach(x=>{
      let n=0,t=+x.dataset.target,
      i=setInterval(()=>{
        n+=Math.max(1,t/20|0);
        x.textContent=n>=t?t:n;
        n>=t&&clearInterval(i);
      },50);
    });
    o.disconnect();
  },{threshold:.4}).observe(s);
});

// manager pages: add task & add employee enter

// e=event
document.addEventListener("keydown", e => {
  if (e.key !== "Enter") return;

  //known the element
  const el = e.target;
  if (!el.form) return;
 const fields = Array.from(el.form.elements)
  .filter(el => !el.matches("button, [type=submit]"));

  //`known` the current index 
  const i = fields.indexOf(el);

  if (fields[i + 1]) {
    e.preventDefault();
    fields[i + 1].focus();
  } else {
    // آخر حقل → امنع أي تصرف
    e.preventDefault();
  }
});

