"use strict";window.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".header-category");t.querySelector(".header-category__title").addEventListener("click",(function(){"active"===t.getAttribute("data-state")?t.setAttribute("data-state",""):t.setAttribute("data-state","active")})),document.getElementById("lines").addEventListener("change",(function(){this.value.length?this.classList.add("header-bottom__input:active"):this.classList.remove("header-bottom__input:active")}))}));