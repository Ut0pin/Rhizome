document.addEventListener("DOMContentLoaded", function () {
    const circle = document.getElementById("circle");

    document.addEventListener("mousemove", function (e) {
        const x = e.clientX - circle.clientWidth / 2;
        const y = e.clientY - circle.clientHeight / 2;

        circle.style.transform = `translate(${x}px, ${y}px)`;
    });
});
