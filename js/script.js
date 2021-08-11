//price__switcher
let switcher = document.getElementById("switcher");
let switcherActive = document.getElementById("switcher_active");
let proPrice = document.getElementById("pro");
let businessPrice = document.getElementById("business");

switcher.onclick = function(){
    switcher.style.backgroundColor = "#fff";
    switcher.style.color = "#005FEC";
    switcherActive.style.backgroundColor = "#E6EFFE";
    switcherActive.style.color = "#18216D";
    proPrice.innerHTML = "5$<span>/mo</span>";
    businessPrice.innerHTML = "10$<span>/mo</span>";
}
switcherActive.onclick = function(){
    switcherActive.style.backgroundColor = "#fff";
    switcherActive.style.color = "#005FEC";
    switcher.style.backgroundColor = "#E6EFFE";
    switcher.style.color = "#18216D";
    proPrice.innerHTML = "49$<span>/mo</span>";
    businessPrice.innerHTML = "99$<span>/mo</span>";
}

//smooth-scroll
let anchors = document.querySelectorAll('header a[href*="#"]');

for(anchor of anchors){
    if(anchor){
        anchor.addEventListener('click', function(event){
            event.preventDefault();
            anchorId = this.getAttribute('href');
            document.querySelector(anchorId).scrollIntoView({
                behavior : 'smooth', block : 'start'
            })
        })
    }
}

//mobile-scrolling-menu
let mobileMenu = document.getElementById("sliding-mobile-menu");
let burgerBtn = document.getElementById("burger");
let closeBtn = document.getElementById("close");


burgerBtn.onclick = function(){
    mobileMenu.style.right = "0";
}
closeBtn.onclick = function(){
    mobileMenu.style.right = "-200px";
}