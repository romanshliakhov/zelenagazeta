document.addEventListener("DOMContentLoaded", function () {
    const filterBtn = document.querySelector(".filter__btn");
    const filterClose = document.querySelector(".filter__close");
    const filter = document.querySelector(".filter");

    if (filterBtn && filter) {
        function handleClickOutside(event) {
            if (!filter.contains(event.target)) {
                filter.classList.remove("active");
            }
        }

        filterClose.addEventListener("click", function (event) {
            event.stopPropagation();
            filter.classList.remove("active");

            if (filter.classList.contains("active")) {
                document.addEventListener("click", handleClickOutside);
            } else {
                document.removeEventListener("click", handleClickOutside);
            }
        });

        filterBtn.addEventListener("click", function (event) {
            event.stopPropagation();
            filter.classList.toggle("active");

            if (filter.classList.contains("active")) {
                document.addEventListener("click", handleClickOutside);
            } else {
                document.removeEventListener("click", handleClickOutside);
            }
        });

        window.addEventListener("scroll", function () {
            const addPoint = filterBtn.offsetTop + 30; // Позиция для добавления класса
            if (window.scrollY > addPoint) {
                filter.classList.add("scroll");
            } else {
                filter.classList.remove("scroll");
            }
        });
    }
});
