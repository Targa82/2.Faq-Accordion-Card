const btn = document.querySelectorAll(".question");

btn.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const target = e.currentTarget.nextElementSibling;
    const button = item.querySelector(".btn");

    if (item.style.borderBottom === "none") {
      item.style.borderBottom = "1px solid var(--color-divider-lgrey)";
    } else {
      item.style.borderBottom = "none";
    }

    if (item.style.fontWeight === "bold") {
      item.style.fontWeight = "normal";
    } else {
      item.style.fontWeight = "bold";
    }

    btn.forEach(function (close) {
      if (close !== item) {
        close.nextElementSibling.classList.remove("active");
        close.style.borderBottom = "1px solid var(--color-divider-lgrey)";
        close.style.fontWeight = "normal";
        close.querySelector(".btn").classList.remove("active");
      }
    });

    button.classList.toggle("active");
    target.classList.toggle("active");
  });
});
