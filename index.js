import{a as p,S as f,i as a}from"./assets/vendor-C3lJ7lpQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="51685894-420173baf9b205d39b44ad1de",y="https://pixabay.com/api/";async function g(i){const r={q:i,key:m,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:s,comments:u,downloads:d})=>`<li class="gallery-item">
    <a href="${n}">
    <img src="${o}" alt="${e}" />
    </a>
    <div class="info">
    <p>Likes<br>${t}</p>
    <p>Views<br>${s}</p>
    <p>Comments<br>${u}</p>
    <p>Downloads<br>${d}</p>
    </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function q(){l.classList.add("hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async i=>{i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){a.warning({title:"Attention",message:"Please enter a search query!",position:"topRight"});return}L(),w();try{const o=await g(r);if(o.hits.length===0){a.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{q()}});
//# sourceMappingURL=index.js.map
