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

const researchButton =
    document.querySelector(".research-trigger-button");

const researchInfo =
    document.querySelector(".research-hidden");


if (researchButton && researchInfo) {

    researchButton.addEventListener("click", function () {

        const isOpen =
            researchButton.getAttribute("aria-expanded") === "true";


        if (isOpen) {

            researchInfo.style.maxHeight = "0px";

            researchInfo.classList.remove("open");

            researchButton.classList.remove("active");

            researchButton.setAttribute(
                "aria-expanded",
                "false"
            );

        } else {

            researchInfo.classList.add("open");

            researchInfo.style.maxHeight =
                researchInfo.scrollHeight + "px";

            researchButton.classList.add("active");

            researchButton.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

}
