"use strict";new Swiper(".product-similarity",{direction:"horizontal",speed:800,slidesPerView:4,spaceBetween:32,slidesPerGroup:4,a11y:{containerRoleDescriptionMessage:"Вы находитесь в разделе схожие товары",slideLabelMessage:"Выбрана товар"},breakpoints:{320:{spaceBetween:16,slidesPerView:2,slidesPerGroup:2},768:{spaceBetween:32,slidesPerView:2,slidesPerGroup:2},1024:{spaceBetween:32,slidesPerView:3,slidesPerGroup:3},1920:{spaceBetween:32,slidesPerView:4,slidesPerGroup:4}},navigation:{nextEl:".button-container-next",prevEl:".button-container-prev",currentClass:"button-slider-current"}});