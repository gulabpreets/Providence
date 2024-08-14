

var swiper = new Swiper(".slider_section", {
    slidesPerView: 3.5,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // breakpoints: {
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 20,
    //   },
    //   768: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    //   1024: {
    //     slidesPerView: 4,
    //     spaceBetween: 50,
    //   },
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // ---------------------
  // ---------------------
  // Vertical Navbar
  // ---------------------
  // ---------------------

  document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.vNavContainer .NavElements');
    const sections = document.querySelectorAll('section[id]');

    function removeGlow() {
        navItems.forEach(item => {
            item.classList.remove('glow');
        });
    }

    function addGlow(sectionId) {
      removeGlow();
      const activeItem = document.querySelector(`.vNavContainer a[href="#${sectionId}"] .NavElements`);
      if (activeItem) {
          // Check the background color of the section
          const section = document.getElementById(sectionId);
          const sectionBgColor = getComputedStyle(section).backgroundColor;
          console.log("the color is", sectionBgColor);
          // Apply styles based on the background color
          if (sectionBgColor === 'rgba(0, 0, 0, 0)') {
              // Background is white: light blue for all, dark blue for active
              navItems.forEach(item => {
                  item.style.color = '#4555bd'; // Light blue
                  item.style.fontWeight = 'normal'; // Low weight
              });
              activeItem.style.color = '#171c3d'; // Dark blue
              activeItem.style.fontWeight = 'bold'; // High weight
          } else if (sectionBgColor === 'rgb(23, 28, 61)') {
              // Background is blue: light white for all, dark white for active
              navItems.forEach(item => {
                  item.style.color = '#868689'; // Light white
                  item.style.fontWeight = 'normal'; // Low weight
              });
              activeItem.style.color = '#ffffff'; // Dark white
              activeItem.style.fontWeight = 'bold'; // High weight
          }
  
          // Add the glow class to highlight the active item
          activeItem.classList.add('glow');
      }
  }

    function onScroll() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            console.log("currentSection is : ", currentSection)
            console.log("sectionTop is : ", sectionTop)
            console.log("offsetTop is : ", sectionTop)
            if (pageYOffset >= sectionTop - 50) {
                currentSection = section.getAttribute('id');
            }
        });

        if (currentSection) {
            addGlow(currentSection);
        }
    }

    window.addEventListener('scroll', onScroll);
});

// --------------------------------
    // Header Cross bar code
// --------------------------------

var RHeader = document.getElementById('ResponsiveHeader');
var RHeaderBar = document.getElementById('resHB');
var RHeaderClose = document.getElementById('resHC');

RHeaderBar.addEventListener('click',function(){
    RHeaderBar.style.display = 'none';
    RHeaderClose.style.display = 'block';
    RHeader.style.display = 'block';
})

RHeaderClose.addEventListener('click',function(){
    RHeader.style.display = 'none';
    RHeaderBar.style.display = 'block';
    RHeaderClose.style.display = 'none';

});

// --------------------------------------
// --------------------------------------
// work ex data up down
// --------------------------------------
// --------------------------------------

var wxh1 = document.getElementById('wxH1');
var wxh2 = document.getElementById('wxH2');
var wx1 = document.getElementById('wxLR1Container');
var wx2 = document.getElementById('wxLR2Container');

// Ensure the initial display state is set
wx1.style.display = wx1.style.display || 'block';
wx2.style.display = wx2.style.display || 'block';

wxh1.addEventListener('click', function() {
    console.log("The display is ", wx1.style.display);
    if (wx1.style.display === 'none') {
        wx1.style.display = 'block';
    } else {
        wx1.style.display = 'none';
    }
});

wxh2.addEventListener('click', function() {
    console.log(wx2.style.display);
    if (wx2.style.display === 'none') {
        wx2.style.display = 'block';
    } else {
        wx2.style.display = 'none';
    }
});

// ----------------------------------
// form validation
// ----------------------------------

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the form elements
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var checkboxInput = document.getElementById('checkboxInput').checked;

    // Validate the inputs
    var isValid = true;
    var errorMessage = '';

    if (!firstName) {
        isValid = false;
        errorMessage += 'First name is required.\n';
    }

    if (!lastName) {
        isValid = false;
        errorMessage += 'Last name is required.\n';
    }

    if (!email) {
        isValid = false;
        errorMessage += 'Email address is required.\n';
    } else if (!validateEmail(email)) {
        isValid = false;
        errorMessage += 'Invalid email address.\n';
    }

    if (!phone) {
        isValid = false;
        errorMessage += 'Phone number is required.\n';
    } else if (!validatePhone(phone)) {
        isValid = false;
        errorMessage += 'Phone number can only contain digits.\n';
    }

    if (!checkboxInput) {
        isValid = false;
        errorMessage += 'You must consent to be contacted.\n';
    }

    if (!isValid) {
        alert(errorMessage);
    } else {
        // Form is valid, submit the form or do other actions
        alert('Form submitted successfully!');
        clearForm(); // Clear the form fields
        // this.submit(); // Uncomment to actually submit the form
    }
});

// Helper functions for validation
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    var re = /^\d+$/; // Allows only digits
    return re.test(String(phone));
}

// Restrict phone input to digits only
document.getElementById('phone').addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, ''); // Remove non-digit characters
});

// Function to clear form fields
function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('graduationInput').value = '';
    document.getElementById('checkboxInput').checked = false;
}



// -------------------------
// vertical line code  
// -------------------------

var firstLogo = document.getElementById("firstLogoforLine");

var lastLogo = document.getElementById("lastLogoforLine");

var lineElement = document.getElementById("verticalDottedLineId")

var rect1 = firstLogo.getBoundingClientRect();
var rect2 = lastLogo.getBoundingClientRect();

// console.log("the r1 is ", rect1)

// Calculate the distance between the centers of the two elements
var elem1CenterX = rect1.left + rect1.width / 2.5;
var elem1CenterY = rect1.top + rect1.height / 2.5;
var elem2CenterX = rect2.left + rect2.width / 2.5;
var elem2CenterY = rect2.top + rect2.height / 2.5;

var distanceX = elem2CenterX - elem1CenterX;
var distanceY = elem2CenterY - elem1CenterY;

var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

// console.log('Distance:', distance);
// console.log('top dis in px:', rect1.top);

// alert('Distance between elements: ' + distance.toFixed(2) + ' pixels' + 'top dis in px:', + rect1.top);

// var line = document.getElementById("verticalDottedLineId");

// console.log("why it is not getting updates",line.style.top);

lineElement.style.height = distance+ "px";
// line.style.height = distance + "px";


