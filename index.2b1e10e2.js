function e(e){const s="https://api.thecatapi.com/v1/images/search",t=new URLSearchParams({breed_ids:e,api_key:"live_2VrTbC1Mlr95oeEVFBGNGPWxg20l4hpQCguoe15EkphFYNLKzhakciPpW9vKVat0"});return fetch(`${s}?${t}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}const s=document.querySelector("select.breed-select"),t=document.querySelector("div.cat-info"),a=document.querySelector("p.loader"),n=document.querySelector("p.error");fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e.map((({id:e,name:t})=>{s.classList.remove("hide_show");const a=document.createElement("option");a.value=e,a.text=t,s.append(a)})))).catch((e=>{console.log(e),n.classList.remove("hide_show")})).finally((()=>a.classList.add("hide_show"))),s.addEventListener("change",(function(){t.classList.add("hide_show"),a.classList.remove("hide_show"),n.classList.add("hide_show"),e(s.options[s.selectedIndex].value).then((e=>e.map((({breeds:e,url:s})=>{t.classList.remove("hide_show");const a=`<img src="${s}" alt="${e[0].name}" width="600" />\n      <div class="description">\n        <h2 class="name">${e[0].name}</h2>\n        <p class="name_descr">${e[0].description}</p>\n        <p class="temperament"><span>Temperament: </span>${e[0].temperament}</p>\n      </div>`;t.innerHTML=a})))).catch((e=>{console.log(e),n.classList.remove("hide_show")})).finally((()=>a.classList.add("hide_show")))}));
//# sourceMappingURL=index.2b1e10e2.js.map
