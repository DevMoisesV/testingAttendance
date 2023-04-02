const navLinks = document.querySelectorAll('a');
const sections = document.querySelectorAll('main section');

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    sections.forEach((section) => {
      section.classList.add('hidden');
    });
    targetSection.classList.remove('hidden');

    // Remove the 'active' class from all links
    navLinks.forEach((navLink) => {
      navLink.classList.remove('active');
    });

    // Add the 'active' class to the clicked link
    link.classList.add('active');
  });
});
