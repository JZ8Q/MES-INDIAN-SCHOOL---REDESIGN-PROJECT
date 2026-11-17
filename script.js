
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
                loader.classList.add("exit");

                setTimeout(() => {
                    loader.style.display = "none";

                    homePage.style.display = "block";
                    document.body.style.overflowY = "auto";
                    document.body.style.overflowX = "hidden";
                    document.body.style.background = "#02091b";

                    requestAnimationFrame(() => {
                        homePage.classList.add("show");
                    });

                }, 800);

            }, 300);
        }
    }

    requestAnimationFrame(animate);
});


/* ================= HOMEPAGE SLIDESHOW ================= */

const backgroundImages = [
    "assets/slide1.jpg",
    "assets/slide2.jpg"
];

let currentImage = 0;

const homepage = document.getElementById("Home-Page");

// Preload the slideshow images
backgroundImages.forEach(src => {
    const img = new Image();
    img.src = src;
});

function changeBackground() {
    currentImage = (currentImage + 1) % backgroundImages.length;

    // Change ONLY the image variable.
    // The navy gradient remains untouched.
    homepage.style.setProperty(
        "--hero-slide",
        `url("${backgroundImages[currentImage]}")`
    );
}

setInterval(() => {
    if (homepage && homepage.classList.contains("show")) {
        changeBackground();
    }
}, 5000);
