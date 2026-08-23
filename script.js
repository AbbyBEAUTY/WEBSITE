const menu=document.querySelector('.menu');const links=document.querySelector('.links');if(menu&&links){menu.addEventListener('click',()=>links.classList.toggle('open'))}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>links?.classList.remove('open')));

const affiliateRegistry=window.ABI_AFFILIATE_LINKS||{};
document.querySelectorAll('[data-affiliate-key]').forEach(element=>{
  const entry=affiliateRegistry[element.dataset.affiliateKey];
  if(!entry||entry.status!=='active'||!entry.url)return;
  const link=document.createElement('a');
  for(const attribute of element.attributes){if(attribute.name!=='aria-disabled')link.setAttribute(attribute.name,attribute.value)}
  link.href=entry.url;
  link.rel='sponsored nofollow noopener';
  link.target='_blank';
  link.textContent=element.dataset.activeLabel||`Ver en ${entry.retailer}`;
  element.replaceWith(link);
});
