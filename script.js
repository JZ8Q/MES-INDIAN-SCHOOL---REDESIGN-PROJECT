
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
    const progress = document.querySelector(".progress");
    const homePage = document.getElementById("Home-Page");

    if (!loader || !progress || !homePage) return;

    let startTime = null;
    const duration = 1200;

    function animate(timestamp) {
        if (startTime === null) startTime = timestamp;

        const elapsed = timestamp - startTime;
        const percentage = Math.min(elapsed / duration, 1);

        progress.style.width = (percentage * 100) + "%";

        if (percentage < 1) {
            requestAnimationFrame(animate);
        } else {
            progress.style.width = "100%";

            setTimeout(() => {
                homePage.style.display = "block";
                document.body.style.overflow = "auto";
                document.body.style.background = "white";

                requestAnimationFrame(() => {
                    homePage.classList.add("show");
                    loader.classList.add("exit");
                });

                setTimeout(() => {
                    loader.style.display = "none";
                }, 800);

            }, 300);
        }
    }

    requestAnimationFrame(animate);
});
