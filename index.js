import{A as M,a as y,i as D}from"./assets/vendor-Bwt5MwBX.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&t(_)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();new M(".faq-accordion-box",{openOnInit:[0],collapse:!0,elementClass:"faq-accordion-item",triggerClass:"faq-accordion-trigger",panelClass:"faq-accordion-panel",beforeOpen:e=>e.classList.add("accordion-active"),beforeClose:e=>e.classList.remove("accordion-active")});const C="https://portfolio-js.b.goit.study/api/reviews";let a=0,i=[],r=f();const P=document.querySelector(".reviews-list"),b=document.querySelector(".slider-button-prev"),m=document.querySelector(".slider-button-next"),B=b.querySelector(".icon-button-swipe"),T=m.querySelector(".icon-button-swipe");async function I(){try{i=(await y.get(C)).data,d(i),x()}catch{D.error({title:"Error",message:"Failed to load reviews. Please try again later."}),R()}}function f(){const e=window.innerWidth;return e>=1280?2:(e>=768,1)}function d(e){const c=e.slice(a,a+r).map(t=>`
      <li class="review-item">
          <p class="author-feedback">${t.review}</p>
            <div class="avatar-text-container">
             <img class="review-avatar" src="${t.avatar_url}" alt="${t.author}" />
             <h3 class="name-author">${t.author}</h3>
          </div>
        </div>
      </li>
    `).join("");P.innerHTML=c}function R(){P.innerHTML='<p class="no-reviews">Not found</p>'}function x(){const e=a===0,s=a+r>=i.length;b.disabled=e,m.disabled=s,b.classList.toggle("disabled",e),m.classList.toggle("disabled",s),B.classList.toggle("icon-disabled",e),T.classList.toggle("icon-disabled",s)}function q(){b.addEventListener("click",()=>{a>0&&(a-=r,d(i),x())}),m.addEventListener("click",()=>{a+r<i.length&&(a+=r,d(i),x())}),window.addEventListener("resize",()=>{const e=f();e!==r&&(r=e,a=0,d(i),x())})}function N(){I(),q()}document.addEventListener("DOMContentLoaded",()=>{N()});const F="/Project_JS_G03/assets/icons-_PiHl8y4.svg",A="/Project_JS_G03/assets/Financ-mob.1x-vHQEaDd1.webp",O="/Project_JS_G03/assets/Financ-mob.2x-OkjmVnGg.webp",W="/Project_JS_G03/assets/Financ-tab.1x-iw-FMJ50.webp",$="/Project_JS_G03/assets/Financ-tab.2x-yqhzZaXK.webp",V="/Project_JS_G03/assets/Wallet-desc.1x-pj3QdsdG.webp",H="/Project_JS_G03/assets/Wallet-desc.2x-zOD8d82L.webp",z="/Project_JS_G03/assets/Diet-mob.1x-9QA_zadv.webp",Y="/Project_JS_G03/assets/Diet-mob.2x-CC2wEcvH.webp",X="/Project_JS_G03/assets/Diet-tab.1x-C1KwQXIe.webp",K="/Project_JS_G03/assets/Diet-tab.2x-DD_uqHd3.webp",Q="/Project_JS_G03/assets/Diet-desc.1x-Bjhi_3Ey.webp",Z="/Project_JS_G03/assets/Diet-desc.2x-q8xdn0RB.webp",U="/Project_JS_G03/assets/Learn-mob.1x-DkBItFMg.webp",ee="/Project_JS_G03/assets/Learn-mob.2x-BtDKarwL.webp",te="/Project_JS_G03/assets/Learn-tab.1x-Be7dQNn7.webp",se="/Project_JS_G03/assets/Learn-tab.2x-DlGDO7_I.webp",oe="/Project_JS_G03/assets/Learn-desc.1x-D1n_9FhL.webp",ce="/Project_JS_G03/assets/Learn-desc.2x-CpS6ttsk.webp",ne="/Project_JS_G03/assets/Chego-mob.1x-CXe2te-G.webp",ae="/Project_JS_G03/assets/Chego-mob.2x-tllwRRBk.webp",re="/Project_JS_G03/assets/Chego-tab.1x-Urq0Txmc.webp",ie="/Project_JS_G03/assets/Chego-tab.2x-LMDgAI5d.webp",le="/Project_JS_G03/assets/Chego-desc.1x-9iXgTq-c.webp",de="/Project_JS_G03/assets/Chego-desc.2x-COkNk-Nu.webp",xe="/Project_JS_G03/assets/Mimino-mob.1x-BAz6Q6Dh.webp",be="/Project_JS_G03/assets/Mimino-mob.2x-CAjZzZsc.webp",me="/Project_JS_G03/assets/Mimino-tab.1x-D0FPgkAT.webp",ue="/Project_JS_G03/assets/Mimino-tab.2x-CSpiZIRh.webp",pe="/Project_JS_G03/assets/Mimino-desc.1x-De5Y-esp.webp",_e="/Project_JS_G03/assets/Mimino-desc.2x-lLX_5P0L.webp",ge="/Project_JS_G03/assets/vyshyvanka-mob.1x--Lu3Jlzu.webp",Se="/Project_JS_G03/assets/vyshyvanka-mob.2x-yqWjZv8X.webp",we="/Project_JS_G03/assets/vyshyvanka-tab.1x-BL3J4p79.webp",he="/Project_JS_G03/assets/vyshyvanka-tab.2x-B3qm-oGK.webp",ve="/Project_JS_G03/assets/vyshyvanka-desc.1x-G4sPQdN0.webp",ye="/Project_JS_G03/assets/vyshyvanka-desc.2x-CraP4M9R.webp",Pe="/Project_JS_G03/assets/Energy-mob.1x-CDOwYsYU.webp",fe="/Project_JS_G03/assets/Energy-mob.2x-Ch4Mr5kV.webp",Ee="/Project_JS_G03/assets/Energy-tab.1x-Bnld6sMy.webp",Je="/Project_JS_G03/assets/Energy-tab.2x-De2ClfYq.webp",Ge="/Project_JS_G03/assets/Energy-desc.1x-aTSKQHKr.webp",Le="/Project_JS_G03/assets/Energy-desc.2x-CbJhxZQi.webp",je="/Project_JS_G03/assets/Power-mob.1x-CYcv2CKB.webp",ke="/Project_JS_G03/assets/Power-mob.2x-B6sNRzPA.webp",Me="/Project_JS_G03/assets/Power-tab.1x-Cu3aw60W.webp",De="/Project_JS_G03/assets/Power-tab.2x-J1XP6j4F.webp",Ce="/Project_JS_G03/assets/Power-desc.1x-0bGvYqXt.webp",Be="/Project_JS_G03/assets/Power-desc.2x-C0ncJPih.webp",Te="/Project_JS_G03/assets/Fresh-mob.1x-B19wgwuY.webp",Ie="/Project_JS_G03/assets/Fresh-mob.2x-CZceOTuR.webp",Re="/Project_JS_G03/assets/Fresh-tab.1x-JcWuW24m.webp",qe="/Project_JS_G03/assets/Fresh-tab.2x-VHiNPVET.webp",Ne="/Project_JS_G03/assets/Fresh-desc.1x-DVBHJS8v.webp",Fe="/Project_JS_G03/assets/Fresh-desc.2x-B_7c2M7W.webp",Ae="/Project_JS_G03/assets/first%20screen-mob.1x-4XOUkzuL.webp",Oe="/Project_JS_G03/assets/first%20screen-mob.2x-BYsTCF4S.webp",We="/Project_JS_G03/assets/first%20screen-tab.1x-qeajsS42.webp",$e="/Project_JS_G03/assets/first%20screen-tab.2x-B5RElZRO.webp",Ve="/Project_JS_G03/assets/first%20screen-desc.1x-D1PDa5Ho.webp",He="/Project_JS_G03/assets/first%20screen-desc.2x-D8PhIWGx.webp",w=[{images:{360:{"1x":A,"2x":O},768:{"1x":W,"2x":$},1280:{"1x":V,"2x":H}},stack:"React, JavaScript, Node JS, Git",title:"WALLET WEBSERVICE",link:"#"},{images:{360:{"1x":z,"2x":Y},768:{"1x":X,"2x":K},1280:{"1x":Q,"2x":Z}},stack:"React, JavaScript, Node JS, Git",title:"GREEN HARVEST WEBSERVICE",link:"#"},{images:{360:{"1x":U,"2x":ee},768:{"1x":te,"2x":se},1280:{"1x":oe,"2x":ce}},stack:"React, JavaScript, Node JS, Git",title:"ENGLISH EXCELLENCE WEBSERVICE",link:"#"},{images:{360:{"1x":ne,"2x":ae},768:{"1x":re,"2x":ie},1280:{"1x":le,"2x":de}},stack:"React, JavaScript, Node JS, Git",title:"CHEGO JEWELRY WEBSITE",link:"#"},{images:{360:{"1x":xe,"2x":be},768:{"1x":me,"2x":ue},1280:{"1x":pe,"2x":_e}},stack:"React, JavaScript, Node JS, Git",title:"MIMINO WEBSITE",link:"#"},{images:{360:{"1x":ge,"2x":Se},768:{"1x":we,"2x":he},1280:{"1x":ve,"2x":ye}},stack:"React, JavaScript, Node JS, Git",title:"VYSHYVANKA VIBES LANDING PAGE",link:"#"},{images:{360:{"1x":Pe,"2x":fe},768:{"1x":Ee,"2x":Je},1280:{"1x":Ge,"2x":Le}},stack:"React, JavaScript, Node JS, Git",title:"ENERGY FLOW WEBSERVICE",link:"#"},{images:{360:{"1x":je,"2x":ke},768:{"1x":Me,"2x":De},1280:{"1x":Ce,"2x":Be}},stack:"React, JavaScript, Node JS, Git",title:"POWER PULSE WEBSERVICE",link:"#"},{images:{360:{"1x":Te,"2x":Ie},768:{"1x":Re,"2x":qe},1280:{"1x":Ne,"2x":Fe}},stack:"React, JavaScript, Node JS, Git",title:"Fruitbox online store",link:"#"},{images:{360:{"1x":Ae,"2x":Oe},768:{"1x":We,"2x":$e},1280:{"1x":Ve,"2x":He}},stack:"React, JavaScript, Node JS, Git",title:"STARLIGHT STUDIO LANDING PAGE",link:"#"}];let l=0;const h=3,ze=document.getElementById("projects-list"),E=document.getElementById("load-more");E.addEventListener("click",J);function Ye(e){const{images:s,stack:c,title:t,link:o}=e;return`
  <ul>
    <li>
      ${`
    <picture class="picture">
      <source srcset="${s[1280]["1x"]} 1x, ${s[1280]["2x"]} 2x" media="(min-width: 1280px)" width="1008" height="580">
      <source srcset="${s[768]["1x"]} 1x, ${s[768]["2x"]} 2x" media="(min-width: 768px)" width="704" height="404">
      <source srcset="${s[360]["1x"]} 1x, ${s[360]["2x"]} 2x" media="(max-width: 767px)" width="320" height="184">
      <img src="${s[1280]["1x"]}" alt="${t}" loading="lazy">
    </picture>
  `}
      <div class="info">
        <p class="stack">${c}</p>
        <div class="info-text">
        <h3 class="title">${t}</h3>
        <a href="${o}" class="link-visit" target="_blank">
          <span class="text-visit">VISIT</span>
              <svg class="icon-arrow" width="24" height="24">
              <use href="${F}#icon-diagonal-arrow-up"></use>
                      </svg>
        </a>
      </div>
      </div>
    </li>
    </ul>
  `}function J(){w.slice(l,l+h).forEach(s=>{const c=Ye(s),t=document.createElement("li");t.innerHTML=c,ze.appendChild(t)}),l+=h,l>=w.length&&(E.style.display="none")}J();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.body,menuLinks:document.querySelectorAll('[data-menu] a[href^="#"]')},s=()=>{const t=e.menu.classList.toggle("is-open");e.openMenuBtn.setAttribute("aria-expanded",t),t?e.body.classList.add("no-scroll"):e.body.classList.remove("no-scroll")},c=t=>{const o=t.currentTarget.getAttribute("href"),n=document.querySelector(o);n&&(s(),n.scrollIntoView({behavior:"smooth"}))};e.openMenuBtn.addEventListener("click",s),e.closeMenuBtn.addEventListener("click",s),e.menuLinks.forEach(t=>{t.addEventListener("click",c)}),window.matchMedia("(min-width: 768px)").addEventListener("change",t=>{t.matches&&(e.menu.classList.remove("is-open"),e.openMenuBtn.setAttribute("aria-expanded",!1),e.body.classList.remove("no-scroll"))})})();const G=document.querySelector(".form"),Xe=document.querySelector(".form_input"),Ke=document.querySelector(".form_message"),Qe=document.getElementById("input_error"),L=document.getElementById("success-icon-input"),Ze=document.getElementById("message_error"),j=document.getElementById("success-icon-message"),v=document.querySelector(".form-btn"),g=document.getElementById("myModal"),Ue=document.querySelector(".modal_close-icons"),et=document.querySelector(".modal_title"),tt=document.querySelector(".modal_text"),st="https://portfolio-js.b.goit.study/api/requests";Xe.addEventListener("change",e=>k(e,Qe,L));Ke.addEventListener("input",e=>k(e,Ze,j));G.addEventListener("submit",ot);Ue.addEventListener("click",S);window.addEventListener("keydown",e=>{e.key==="Escape"&&S()});window.addEventListener("click",e=>{e.target===g&&S()});function ot(e){e.preventDefault(),v.disabled=!0;const s=e.currentTarget.elements.email.value.trim(),c=e.currentTarget.elements.usermessage.value.trim();ct(s,c).then(t=>{et.textContent=t.data.title,tt.textContent=t.data.message,g.classList.add("is-open"),G.reset(),L.classList.add("visually-hidden"),j.classList.add("visually-hidden")}).catch(t=>{iziToast.error({title:"Error",message:`${t.message}`})}).finally(()=>v.disabled=!1)}async function ct(e,s){return await y.post(st,{email:e,comment:s})}function k(e,s,c){const t=e.target.value,o=e.target.validity.valid;t&&o?(e.target.style.color="#292929",s.classList.add("visually-hidden"),c.classList.remove("visually-hidden")):(e.target.style.color="#E74A3B",c.classList.add("visually-hidden"),s.classList.remove("visually-hidden"),t===""&&(e.target.style.color="#292929"))}function S(){g.classList.remove("is-open")}const u=document.getElementById("theme-toggle"),p=document.body;localStorage.getItem("dark-mode")==="enabled"?(p.classList.add("dark-mode"),u.checked=!0):(p.classList.remove("dark-mode"),u.checked=!1);u.addEventListener("change",()=>{u.checked?(p.classList.add("dark-mode"),localStorage.setItem("dark-mode","enabled")):(p.classList.remove("dark-mode"),localStorage.setItem("dark-mode","disabled"))});
//# sourceMappingURL=index.js.map
