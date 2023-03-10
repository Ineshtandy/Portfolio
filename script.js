"use strict";

const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const btnsProjectLink = document.querySelectorAll(".project-link");

// const openModal = function () {
//   modal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

const closeModal = function (toBeChanged) {
  for (let i = 0; i < modal.length; i++) {
    if (modal[i].dataset.select == toBeChanged) {
      modal[i].classList.add("hidden");
      overlay.classList.add("hidden");
    }
  }
};

const openModal = function (toBeChanged) {
  // console.log(`did it work ${toBeChanged}`);

  for (let i = 0; i < modal.length; i++) {
    if (modal[i].dataset.select == toBeChanged) {
      modal[i].classList.remove("hidden");
      overlay.classList.remove("hidden");
    }
  }
};

//btnsCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", () => {
  // going through all the modals are removing from all
  for (let i = 0; i < modal.length; i++) {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  }
});

// btnsOpenModal.map(btn => {...}) this wont work becuase btnsopenmodal is a nodeList and not an array
// use another function inside addEventListener to call a function with param passed in to prevent it from calling
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", () => {
    openModal(btnsOpenModal[i].dataset.select);
  });
}

for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsCloseModal[i].addEventListener("click", () => {
    closeModal(btnsOpenModal[i].dataset.select);
  });
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// event delegation based on event bubbling (lang display navigation)
document
  .querySelector(".languagesDisplay")
  .addEventListener("click", function (el) {
    el.preventDefault();

    // matching strategy
    if (el.target.classList.contains("nav-link")) {
      const id = el.target.getAttribute("href");
      console.log(id);
      document.querySelector(`.${id}`).scrollIntoView({
        behavior: "smooth",
      });
    }
  });

document
  .querySelector(".contactsSection")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("contacts")) {
      const id = e.target.getAttribute("href");
      //opens a new window
      window.open(id, "_blank");
    }
  });

for (let i = 0; i < btnsProjectLink.length; i++) {
  btnsProjectLink[i].addEventListener("click", function (e) {
    e.preventDefault();

    const id = e.target.getAttribute("href");
    window.open(id, "_blank");
  });
}
