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

        /* ==========================================
   RESEARCH INFORMATION TOGGLE
========================================== */

const researchTrigger =
    document.querySelector(".research-trigger-button");

const researchHidden =
    document.querySelector(".research-hidden");


if (researchTrigger && researchHidden) {

    researchTrigger.addEventListener("click", () => {

        const isOpen =
            researchHidden.classList.contains("open");

        if (!isOpen) {

            researchHidden.classList.add("open");

            researchTrigger.classList.add("active");

            researchTrigger.setAttribute(
                "aria-expanded",
                "true"
            );

            researchHidden.style.maxHeight =
                researchHidden.scrollHeight + "px";

        } else {

            researchHidden.classList.remove("open");

            researchTrigger.classList.remove("active");

            researchTrigger.setAttribute(
                "aria-expanded",
                "false"
            );

            researchHidden.style.maxHeight = null;

        }

    });

}

    });

});
