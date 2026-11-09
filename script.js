/* ==========================================
   DIGITAL TASK TOGGLE
========================================== */

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
            researchInfo.style.maxHeight = researchInfo.scrollHeight + "px";

            musicButton.classList.add("active");
            musicButton.setAttribute("aria-expanded", "true");
        }

    });

}


/* ==========================================
   GROUP INFORMATION TOGGLE
========================================== */

document.querySelectorAll(".group-dropdown").forEach(dropdown => {

    const trigger = dropdown.querySelector(".group-trigger");
    const content = dropdown.querySelector(".group-content");

    trigger.addEventListener("click", () => {

        const isOpen = trigger.getAttribute("aria-expanded") === "true";

        trigger.setAttribute("aria-expanded", String(!isOpen));
        dropdown.classList.toggle("active", !isOpen);
        content.hidden = isOpen;

        // resize the parent task panel so it doesn't clip the group list
        const taskContent = dropdown.closest(".task-content");
        if (taskContent) {
            taskContent.style.maxHeight = taskContent.scrollHeight + "px";
        }
    });

});
