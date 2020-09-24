let toggleMenu = document.getElementById('header-toggle-menu');
// let aside = document.querySelector('.aside-left')
// let asideAfterC = document.querySelector('navBarAfterClick')

toggleMenu.addEventListener('click', () =>
{
  let aside = document.querySelector('.aside-left')
  let asideAfterC = document.querySelector('.navBarAfterClick')
  if(aside.style.display == "none" && asideAfterC.style.display == "block")
  {
    aside.style.display = "grid"
    asideAfterC.style.display = "none"
  }
  else
  {
    aside.style.display = "none"
    asideAfterC.style.display = "block"
  }
})
