document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuButton");
    const slideMenu = document.getElementById("slideMenu");

    const currentPath = window.location.pathname.split("/").pop();

    const homeBtn = document.getElementById("homeBtn");
    const detailBtn = document.getElementById("detailBtn");
    const controlBtn = document.getElementById("controlBtn");

    if (homeBtn && detailBtn && controlBtn) {
        // Clear previous color states
        homeBtn.classList.remove("bg-gray-600", "bg-orange-600", "hover:bg-orange-500");
        detailBtn.classList.remove("bg-gray-600", "bg-orange-600", "hover:bg-orange-500");
        controlBtn.classList.remove("bg-gray-600", "bg-orange-600", "hover:bg-orange-500");

        // Current page is orange, others are grey
        if (currentPath === "addDevice.html") {
            homeBtn.classList.add("bg-orange-600", "hover:bg-orange-500"); // Current
            detailBtn.classList.add("bg-gray-600");                         // Others
            controlBtn.classList.add("bg-gray-600");                         // Others
        } else if (currentPath === "deviceDetail.html") {
            detailBtn.classList.add("bg-orange-600", "hover:bg-orange-500"); // Current
            homeBtn.classList.add("bg-gray-600");                            // Others
            controlBtn.classList.add("bg-gray-600");                         // Others
        } else {
            // Default/Control Page
            controlBtn.classList.add("bg-orange-600", "hover:bg-orange-500");// Current
            homeBtn.classList.add("bg-gray-600");                            // Others
            detailBtn.classList.add("bg-gray-600");                         // Others
        }
    }

    // Handle sliding menu animation
    if (menuBtn && slideMenu) {
        menuBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (slideMenu.style.maxWidth && slideMenu.style.maxWidth !== "0px") {
                slideMenu.style.maxWidth = "0px";
                slideMenu.style.opacity = "0";
            } else {
                slideMenu.style.maxWidth = "280px";
                slideMenu.style.opacity = "1";
            }
        });
    }
});