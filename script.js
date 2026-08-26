const taskButtons = document.querySelectorAll(".task-button");


taskButtons.forEach(button => {

    button.addEventListener("click", () => {

        const taskItem = button.parentElement;

        const content = taskItem.querySelector(".task-content");


        taskItem.classList.toggle("active");


        if (taskItem.classList.contains("active")) {

            content.style.maxHeight = content.scrollHeight + "px";

        } else {

            content.style.maxHeight = "0";

        }

         });

});

/* ==========================================
   RESEARCH INFORMATION TOGGLE
========================================== */

const musicButton = document.querySelector(".music-button");
const researchInfo = document.querySelector(".research-hidden");

if (musicButton && researchInfo) {

    musicButton.addEventListener("click", function () {

        if (researchInfo.classList.contains("open")) {

            researchInfo.classList.remove("open");
            researchInfo.style.maxHeight = "0px";

            musicButton.classList.remove("active");
            musicButton.setAttribute("aria-expanded", "false");

        } else {

            researchInfo.classList.add("open");

            researchInfo.style.maxHeight =
                researchInfo.scrollHeight + "px";

            musicButton.classList.add("active");
            musicButton.setAttribute("aria-expanded", "true");

        }

    });

}

/* ==========================================
   HERO VINYL INTERACTION
========================================== */

const heroArt = document.querySelector(".hero-art");

if (heroArt) {

    heroArt.addEventListener("click", function () {

        heroArt.classList.toggle("vinyl-active");

    });

}
