
    const modal = document.getElementById("loginModal");
    const closeBtn = document.querySelector(".close");
    const links = document.querySelectorAll(".linkMe a");

    // Åbn modal ved klik på link
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Forhindrer standard link-adfærd
            modal.style.display = "flex";
            setTimeout(() => modal.classList.add("show"), 10);
        });
    });

    // Luk modal ved klik på luk-knappen
    closeBtn.addEventListener("click", function () {
        modal.classList.add("hide");
        setTimeout(() => {
            modal.classList.remove("show", "hide");
            modal.style.display = "none";
        }, 400);
    });

    // Luk modal, hvis brugeren klikker udenfor
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.add("hide");
            setTimeout(() => {
                modal.classList.remove("show", "hide");
                modal.style.display = "none";
            }, 400);
        }
    });
