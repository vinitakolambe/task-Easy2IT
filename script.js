console.log("JS Connected");

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const target = Number(counter.getAttribute("data-target"));
  let count = 0;

  const speed = 200; // lower = faster

  const updateCounter = () => {
    const increment = target / speed;

    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCounter();
});

const projectCards = document.querySelectorAll(".project-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

projectCards.forEach((card) => {
  observer.observe(card);
});

//projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    // remove zoom from other cards
    projectCards.forEach((c) => c.classList.remove("active"));

    // toggle zoom on clicked card
    card.classList.toggle("active");
  });
});

//projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  card.addEventListener("click", () => {
    // remove zoom from other cards
    projectCards.forEach((c) => c.classList.remove("active"));

    // toggle zoom on clicked card
    card.classList.toggle("active");
  });
});


