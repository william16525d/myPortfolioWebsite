document.addEventListener("DOMContentLoaded", () => {
  // Select all elements to animate on scroll
  const scrollElements = document.querySelectorAll(".animate-on-scroll");

  // Check if element is in the viewport with offset
  const elementInView = (el, offset = 150) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) - offset
    );
  };

  // Add visible class to trigger animation
  const displayScrollElement = (element) => {
    element.classList.add("visible");
  };

  // Remove visible class when element is out of view
  const hideScrollElement = (element) => {
    element.classList.remove("visible");
  };

  // Loop through elements and toggle visibility class based on scroll
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 150)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };

  // Listen for scroll events
  window.addEventListener("scroll", handleScrollAnimation);

  // Run animation check on page load
  handleScrollAnimation();
});
