

  // Get references to the menu elements
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

// Add a click event listener to the menu icon
menuIcon.addEventListener('click', () => {
  // Toggle the 'active' class on the menu element to show/hide it
  menu.classList.toggle('active');
});

// Add click event listeners to menu items
const menuItems = menu.querySelectorAll('a');
menuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the href attribute of the clicked link
    const targetPage = menuItem.getAttribute('href');

    // Redirect to the target page
    window.location.href = targetPage;

    // Close the mobile menu (optional)
    menu.classList.remove('active');
  });
});