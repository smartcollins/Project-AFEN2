

// myHumbuger menu

const hamburger = document.getElementById('hamburger');

const navUl = document.getElementById('nav-ul');


hamburger.addEventListener('click',()=>{
  navUl.classList.toggle('show')
})


// myDropdowns

const dropdown = document.getElementById('dropdown')
const dropMenu = document.getElementById('dropdown-menu')

dropdown.addEventListener('click',()=>{
  dropMenu.classList.toggle('show')
})

// Dark Mode

function dark() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}



//show and hide dropdown list item on button click

function show_hide() {
         var click = document.getElementById("list-items");
         if(click.style.display ==="none") {
            click.style.display ="block";
         } else {
            click.style.display ="none";
         } 
      }

