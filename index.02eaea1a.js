!function(){function e(e){var t="https://api.thecatapi.com/v1/images/search",n=new URLSearchParams({breed_ids:e,api_key:"live_2VrTbC1Mlr95oeEVFBGNGPWxg20l4hpQCguoe15EkphFYNLKzhakciPpW9vKVat0"});"".concat(t,"?").concat(n);return fetch("".concat(t,"?").concat(n)).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}var t=document.querySelector("select.breed-select"),n=document.querySelector("div.cat-info"),c=document.querySelector("p.loader"),a=document.querySelector("p.error");fetch("https://api.thecatapi.com/v1/breeds").then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){return e.map((function(e){var n=e.id,c=e.name;t.classList.remove("hide_show");var a=document.createElement("option");a.value=n,a.text=c,t.append(a)}))})).catch((function(e){console.log(e),a.classList.remove("hide_show")})).finally((function(){return c.classList.add("hide_show")})),t.addEventListener("change",(function(){n.classList.add("hide_show"),c.classList.remove("hide_show"),a.classList.add("hide_show"),e(t.options[t.selectedIndex].value).then((function(e){return e.map((function(e){var t=e.breeds,c=e.url;n.classList.remove("hide_show");var a='<img src="'.concat(c,'" alt="').concat(t[0].name,'" width="600" />\n      <div class="description">\n        <h2 class="name">').concat(t[0].name,'</h2>\n        <p class="name_descr">').concat(t[0].description,'</p>\n        <p class="temperament"><span>Temperament: </span>').concat(t[0].temperament,"</p>\n      </div>");n.innerHTML=a}))})).catch((function(e){console.log(e),a.classList.remove("hide_show")})).finally((function(){return c.classList.add("hide_show")}))}))}();
//# sourceMappingURL=index.02eaea1a.js.map
