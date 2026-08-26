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
   MUSIC NOTE TOGGLE
========================================== */

const musicButton = document.querySelector(".music-button");

if (musicButton) {

    musicButton.addEventListener("click", () => {

        const active = musicButton.classList.toggle("active");

        musicButton.setAttribute(
            "aria-pressed",
            active ? "true" : "false"
        );

    });

}

    });

}
