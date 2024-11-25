import{A as J,a as G,i as y}from"./assets/vendor-Bwt5MwBX.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const _ of n.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&s(_)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const E=new J(".faq-accordion-box",{openOnInit:[0],collapse:!0,elementClass:"faq-accordion-item",triggerClass:"faq-accordion-trigger",panelClass:"faq-accordion-panel",beforeOpen:e=>{document.querySelectorAll(".faq-accordion-item").forEach(c=>c.classList.remove("accordion-active")),e.classList.add("accordion-active")},beforeClose:e=>{e.classList.remove("accordion-active")}}),l=document.querySelectorAll(".faq-accordion-item");l[0].classList.add("accordion-active");l.forEach(e=>{const t=e.querySelector(".faq-accordion-trigger");let c=e===l[0];t.addEventListener("click",()=>{c?(E.close(Array.from(l).indexOf(e)),e.classList.remove("accordion-active"),c=!1):c=t.getAttribute("aria-expanded")==="true"})});const L="https://portfolio-js.b.goit.study/api/reviews";let a=0,i=[],r=v();const P=document.querySelector(".reviews-list"),p=document.querySelector(".slider-button-prev"),j=document.querySelector(".slider-button-next"),M=p.querySelector(".icon-button-swipe"),D=j.querySelector(".icon-button-swipe");async function w(){try{i=(await G.get(L)).data,d(i),g()}catch{y.error({title:"Error",message:"Failed to load reviews. Please try again later."}),k()}}function v(){const e=window.innerWidth;return e>=1280?2:(e>=768,1)}function d(e){const c=e.slice(a,a+r).map(s=>`
      <li class="review-item">
          <p class="author-feedback">${s.review}</p>
            <div class="avatar-text-container">
             <img class="review-avatar" src="${s.avatar_url}" alt="${s.author}" />
             <h3 class="name-author">${s.author}</h3>
          </div>
        </div>
      </li>
    `).join("");P.innerHTML=c}function k(){P.innerHTML='<p class="no-reviews">Not found</p>'}function g(){const e=a===0,t=a+r>=i.length;p.disabled=e,j.disabled=t,p.classList.toggle("disabled",e),j.classList.toggle("disabled",t),M.classList.toggle("icon-disabled",e),D.classList.toggle("icon-disabled",t)}function C(){p.addEventListener("click",()=>{a>0&&(a-=r,d(i),g())}),j.addEventListener("click",()=>{a+r<i.length&&(a+=r,d(i),g())}),window.addEventListener("resize",()=>{const e=v();e!==r&&(r=e,a=0,d(i),g())})}function T(){w(),C()}document.addEventListener("DOMContentLoaded",()=>{T()});const I="/Project_JS_G03/assets/icons-_PiHl8y4.svg",B="/Project_JS_G03/assets/Financ-mob.1x-CzhkS1vU.jpg",N="/Project_JS_G03/assets/Financ-mob.2x-CqmUeJBj.jpg",F="/Project_JS_G03/assets/Financ-tab.1x-Bp68NPmN.jpg",O="/Project_JS_G03/assets/Financ-tab.2x-CuZL2YGn.jpg",R="/Project_JS_G03/assets/Wallet-desc.1x-CWdUHd9a.jpg",A="/Project_JS_G03/assets/Wallet-desc.2x-D2rXQQPI.jpg",W="/Project_JS_G03/assets/Diet-mob.1x-BEFXhU2y.jpg",q="/Project_JS_G03/assets/Diet-mob.2x-Bej7_w9J.jpg",u="/Project_JS_G03/assets/Diet-tab.1x-Y-ctFb9b.jpg",m="/Project_JS_G03/assets/Diet-desc.1x-C_gRDlSz.jpg",V="/Project_JS_G03/assets/Learn-mob.1x-Bwn_ts4H.jpg",$="/Project_JS_G03/assets/Learn-mob.2x-j0znq_FV.jpg",H="/Project_JS_G03/assets/Learn-tab.1x-DEOsArY4.jpg",U="/Project_JS_G03/assets/Learn-tab.2x-DYMDShIY.jpg",Y="/Project_JS_G03/assets/Learn-desc.1x-CZWW2T0K.jpg",z="/Project_JS_G03/assets/Learn-desc.2x-D8gHDEww.jpg",X="/Project_JS_G03/assets/Chego-mob.1x-DUoXsL2-.jpg",K="/Project_JS_G03/assets/Chego-mob.2x-6A0hG9f_.jpg",Q="/Project_JS_G03/assets/Chego-tab.1x-CTO88L--.jpg",Z="/Project_JS_G03/assets/Chego-tab.2x-CrHkdUsM.jpg",ee="/Project_JS_G03/assets/Chego-desc.1x-C6_NDABb.jpg",te="/Project_JS_G03/assets/Chego-desc.2x-szjIIX1T.jpg",se="/Project_JS_G03/assets/Mimino-mob.1x-YhIeRX94.jpg",oe="/Project_JS_G03/assets/Mimino-mob.2x-BeeLBZip.jpg",ce="/Project_JS_G03/assets/Mimino-tab.1x-Bj02k5mi.jpg",ne="/Project_JS_G03/assets/Mimino-tab.2x-gSHBa2mq.jpg",ae="/Project_JS_G03/assets/Mimino-desc.1x-D0zv5OJW.jpg",re="/Project_JS_G03/assets/Mimino-desc.2x-gCONWsJ1.jpg",ie="/Project_JS_G03/assets/vyshyvanka-mob.1x-C_4F-bAw.jpg",xe="/Project_JS_G03/assets/vyshyvanka-mob.2x-BTtwQAfZ.jpg",le="/Project_JS_G03/assets/vyshyvanka-tab.1x-10cmkcMP.jpg",de="/Project_JS_G03/assets/vyshyvanka-tab.2x-Vo5BT3pT.jpg",ge="/Project_JS_G03/assets/vyshyvanka-desc.1x-UWoWPoUB.jpg",pe="/Project_JS_G03/assets/vyshyvanka-desc.2x-CtNR8-U8.jpg",je="/Project_JS_G03/assets/Energy-mob.1x-CS32XtjI.jpg",_e="/Project_JS_G03/assets/Energy-mob.2x-DOxHnyat.jpg",ue="/Project_JS_G03/assets/Energy-tab.1x-q8125I1O.jpg",me="/Project_JS_G03/assets/Energy-tab.2x-OfnhaCWk.jpg",be="/Project_JS_G03/assets/Energy-desc.1x-DASyMKbu.jpg",Se="/Project_JS_G03/assets/Energy-desc.2x-CUBrKu_G.jpg",Pe="/Project_JS_G03/assets/Power-mob.1x-WKN677dq.jpg",ve="/Project_JS_G03/assets/Power-mob.2x-IevKyY8_.jpg",fe="/Project_JS_G03/assets/Power-tab.1x-IhYxTOQV.jpg",he="/Project_JS_G03/assets/Power-tab.2x-CJXIlUF6.jpg",Je="/Project_JS_G03/assets/Power-desc.1x-DfQicnIh.jpg",Ge="/Project_JS_G03/assets/Power-desc.2x-7f80idOj.jpg",ye="/Project_JS_G03/assets/Fresh-mob.1x-DrJ4r1Xu.jpg",Ee="/Project_JS_G03/assets/Fresh-mob.2x-CTbY6w26.jpg",Le="/Project_JS_G03/assets/Fresh-tab.1x-FJmm2daD.jpg",Me="/Project_JS_G03/assets/Fresh-tab.2x-BcBj-uTC.jpg",De="/Project_JS_G03/assets/Fresh-desc.1x-Dz3E7P8E.jpg",we="/Project_JS_G03/assets/Fresh-desc.2x-CwOAy7d_.jpg",ke="/Project_JS_G03/assets/first%20screen-mob.1x-lPgM2G60.jpg",Ce="/Project_JS_G03/assets/first%20screen-mob.2x-BtymLBxc.jpg",Te="/Project_JS_G03/assets/first%20screen-tab.1x-d6Q_W2Or.jpg",Ie="/Project_JS_G03/assets/first%20screen-tab.2x-DVrE9wZB.jpg",Be="/Project_JS_G03/assets/first%20screen-desc.1x-DfL_pRDO.jpg",Ne="/Project_JS_G03/assets/first%20screen-desc.2x-U0gduW4B.jpg",b=[{images:{360:{"1x":B,"2x":N},768:{"1x":F,"2x":O},1280:{"1x":R,"2x":A}},stack:"React, JavaScript, Node JS, Git",title:"WALLET WEBSERVICE",link:"#"},{images:{360:{"1x":W,"2x":q},768:{"1x":u,"2x":u},1280:{"1x":m,"2x":m}},stack:"React, JavaScript, Node JS, Git",title:"GREEN HARVEST WEBSERVICE",link:"#"},{images:{360:{"1x":V,"2x":$},768:{"1x":H,"2x":U},1280:{"1x":Y,"2x":z}},stack:"React, JavaScript, Node JS, Git",title:"ENGLISH EXCELLENCE WEBSERVICE",link:"#"},{images:{360:{"1x":X,"2x":K},768:{"1x":Q,"2x":Z},1280:{"1x":ee,"2x":te}},stack:"React, JavaScript, Node JS, Git",title:"CHEGO JEWELRY WEBSITE",link:"#"},{images:{360:{"1x":se,"2x":oe},768:{"1x":ce,"2x":ne},1280:{"1x":ae,"2x":re}},stack:"React, JavaScript, Node JS, Git",title:"MIMINO WEBSITE",link:"#"},{images:{360:{"1x":ie,"2x":xe},768:{"1x":le,"2x":de},1280:{"1x":ge,"2x":pe}},stack:"React, JavaScript, Node JS, Git",title:"VYSHYVANKA VIBES LANDING PAGE",link:"#"},{images:{360:{"1x":je,"2x":_e},768:{"1x":ue,"2x":me},1280:{"1x":be,"2x":Se}},stack:"React, JavaScript, Node JS, Git",title:"ENERGY FLOW WEBSERVICE",link:"#"},{images:{360:{"1x":Pe,"2x":ve},768:{"1x":fe,"2x":he},1280:{"1x":Je,"2x":Ge}},stack:"React, JavaScript, Node JS, Git",title:"POWER PULSE WEBSERVICE",link:"#"},{images:{360:{"1x":ye,"2x":Ee},768:{"1x":Le,"2x":Me},1280:{"1x":De,"2x":we}},stack:"React, JavaScript, Node JS, Git",title:"Fruitbox online store",link:"#"},{images:{360:{"1x":ke,"2x":Ce},768:{"1x":Te,"2x":Ie},1280:{"1x":Be,"2x":Ne}},stack:"React, JavaScript, Node JS, Git",title:"STARLIGHT STUDIO LANDING PAGE",link:"#"}];let x=0;const S=3,Fe=document.getElementById("projects-list"),f=document.getElementById("load-more");f.addEventListener("click",h);function Oe(e){const{images:t,stack:c,title:s,link:o}=e;return`
    <li>
      ${`
    <picture class="picture">
      <source srcset="${t[1280]["1x"]} 1x, ${t[1280]["2x"]} 2x" media="(min-width: 1280px)">
      <source srcset="${t[768]["1x"]} 1x, ${t[768]["2x"]} 2x" media="(min-width: 768px)">
      <source srcset="${t[360]["1x"]} 1x, ${t[360]["2x"]} 2x" media="(max-width: 767px)">
      <img src="${t[1280]["1x"]}" alt="${s}" loading="lazy">
    </picture>
  `}
      <div class="info">
        <p class="stack">${c}</p>
        <div class="info-text">
        <h3 class="title">${s}</h3>
        <a href="${o}" class="link-visit" target="_blank">
          <span class="text-visit">VISIT</span>
              <svg class="icon-arrow" width="24" height="24">
              <use href="${I}#icon-diagonal-arrow-up"></use>
                      </svg>
        </a>
      </div>
      </div>
    </li>
  `}function h(){b.slice(x,x+S).forEach(t=>{const c=Oe(t),s=document.createElement("li");s.innerHTML=c,Fe.appendChild(s)}),x+=S,x>=b.length&&(f.style.display="none")}h();(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),body:document.body,menuLinks:document.querySelectorAll('[data-menu] a[href^="#"]')},t=()=>{const s=e.menu.classList.toggle("is-open");e.openMenuBtn.setAttribute("aria-expanded",s),s?e.body.classList.add("no-scroll"):e.body.classList.remove("no-scroll")},c=s=>{const o=s.currentTarget.getAttribute("href"),n=document.querySelector(o);n&&(t(),n.scrollIntoView({behavior:"smooth"}))};e.openMenuBtn.addEventListener("click",t),e.closeMenuBtn.addEventListener("click",t),e.menuLinks.forEach(s=>{s.addEventListener("click",c)}),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(e.menu.classList.remove("is-open"),e.openMenuBtn.setAttribute("aria-expanded",!1),e.body.classList.remove("no-scroll"))})})();
//# sourceMappingURL=index.js.map
