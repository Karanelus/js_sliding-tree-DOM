function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t,e=document.querySelector(".tree"),n=document.querySelectorAll("li");(n=((function(t){if(Array.isArray(t))return r(t)})(t=n)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter(function(r){return r.querySelector("ul")})).forEach(function(r){if(r.hasChildNodes()){var t=r.firstChild,e=document.createElement("span");e.innerHTML=t.textContent,r.replaceChild(e,t)}}),e.addEventListener("click",function(r){var t=r.target.closest("span");if(t){var e=t.nextSibling.style;"none"!==e.display?e.display="none":e.display=""}});
//# sourceMappingURL=index.1a4816a9.js.map
