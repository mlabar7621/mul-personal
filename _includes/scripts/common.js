(function () {
  var $root = document.getElementsByClassName('root')[0];
  if (window.hasEvent('touchstart')) {
    $root.dataset.isTouch = true;
    document.addEventListener('touchstart', function(){}, false);
  }
})()

document.addEventListener('click', function(e) {
  const menuElements = Array.from(document.getElementsByClassName('toggle-menu'));
  
  // Check if the clicked target is inside any of the toggle-menu elements
  if (!menuElements.some(menu => menu.contains(e.target))) {
    console.log('Clicked outside of toggle-menu');
    menuElements.forEach(element => {
      element.classList.remove('open');
    });
  }
});

//for dropdown menus on tablets
if(window.matchMedia("(hover: none)").matches) {
  const link = document.querySelector('.pc-only');
  link.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('This link is now unclickable.');
  });
}

function toggleNavPC(menu) {
  if(!menu.classList.contains('open')){
    const elements = [...document.querySelectorAll('.toggle-menu')]; 
    elements.forEach(element => {
      element.classList.remove('open');
    });
  }
  menu.classList.toggle('open');
}

function toggleNavMobile(menu) {
    menu.classList.toggle('open');
}
