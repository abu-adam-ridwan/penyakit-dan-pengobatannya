const pagination = document.querySelector(".pagination");
const backBtn = document.querySelector(".back-button");
const nextBtn = document.querySelector(".next-button");
const pageInfo = document.querySelector(".page-info");
const title = document.title;

fetch("../0-core/data/data.json")
  .then((response) => response.json())
  .then((result) => {
    const data = result.Data;
    let baseURL = "..";

    data.forEach((e, i, a) => {
      if (e.nama.toLowerCase() === title.toLowerCase()) {
        pageInfo.textContent = "Halaman " + (i + 1);
        if (i < 1) {
          backBtn.classList.add("unactivated");
          nextBtn.href = baseURL + "/" + a[i + 1].path + "/index.html";
        } else if (i + 1 === a.length) {
          backBtn.href = baseURL + "/" + a[i - 1].path + "/index.html";
          nextBtn.classList.add("unactivated");
        } else {
          backBtn.href = baseURL + "/" + a[i - 1].path + "/index.html";
          nextBtn.href = baseURL + "/" + a[i + 1].path + "/index.html";
        }
      }
    });
  });
