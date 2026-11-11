
// MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

menuToggle.addEventListener("click", () => {

  const isOpen =
    menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute(
    "aria-expanded",
    String(!isOpen)
  );

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Open navigation" : "Close navigation"
  );

  primaryNav.classList.toggle("is-open", !isOpen);

});


// CLOSE MOBILE MENU AFTER CLICKING A LINK

primaryNav.querySelectorAll("a").forEach((link) => {

  link.addEventListener("click", () => {

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.setAttribute(
      "aria-label",
      "Open navigation"
    );

    primaryNav.classList.remove("is-open");

  });

});


// PRODUCT CATEGORY FILTERING

const filterButtons =
  document.querySelectorAll(".filter-button");

const productCards =
  document.querySelectorAll(".product-card");


filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const selectedCategory = button.dataset.filter;

    // Update active filter button
    filterButtons.forEach((item) => {

      const isSelected = item === button;

      item.classList.toggle("is-active", isSelected);

      item.setAttribute(
        "aria-pressed",
        String(isSelected)
      );

    });


    // Display products belonging to selected category
    productCards.forEach((card) => {

      const shouldShow =
        selectedCategory === "all" ||
        card.dataset.category === selectedCategory;

      card.classList.toggle("is-hidden", !shouldShow);

    });

  });

});


// TESTIMONIAL CAROUSEL

const quotes = document.querySelectorAll(".quote");

const currentQuote =
  document.querySelector("#quote-current");

const previousButton =
  document.querySelector("#quote-prev");

const nextButton =
  document.querySelector("#quote-next");

let activeQuote = 0;


function showQuote(index) {

  activeQuote =
    (index + quotes.length) % quotes.length;

  quotes.forEach((quote, quoteIndex) => {

    quote.classList.toggle(
      "is-visible",
      quoteIndex === activeQuote
    );

  });

  currentQuote.textContent =
    String(activeQuote + 1).padStart(2, "0");

}


previousButton.addEventListener("click", () => {

  showQuote(activeQuote - 1);

});


nextButton.addEventListener("click", () => {

  showQuote(activeQuote + 1);

});


// AUTOMATIC COPYRIGHT YEAR

document.querySelector("#year").textContent =
  new Date().getFullYear();
