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

    musicButton.addEventListener("click", () => {

        const isOpen = researchInfo.classList.contains("open");

        if (!isOpen) {

            researchInfo.classList.add("open");

            researchInfo.style.maxHeight =
                researchInfo.scrollHeight + "px";

            musicButton.classList.add("active");

            musicButton.setAttribute(
                "aria-expanded",
                "true"
            );

        } else {

            researchInfo.style.maxHeight = "0px";

            researchInfo.classList.remove("open");

            musicButton.classList.remove("active");

            musicButton.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

}
