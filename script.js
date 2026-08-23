const menu=document.querySelector('.menu');const links=document.querySelector('.links');if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'))}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));
