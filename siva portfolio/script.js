document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = [
      document.querySelector('.home-img img'),
      document.querySelector('.animated-heading'),
      ...document.querySelectorAll('.animated-word'),
      document.querySelector('.text'),
      document.querySelector('.social-icon'),
      document.querySelector('.home-button')
  ];

  // Options for the observer
  const observerOptions = {
      root: null,
      threshold: 0.1 // Trigger when 10% of the element is visible
  };

  // Callback function when the intersection is observed
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  };

  // Create an observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each animated element
  animatedElements.forEach(element => {
      observer.observe(element);
  });

  // For sections with scroll-in animation
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
      observer.observe(section);
  });
});

// Existing word animation code
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
splitLetters(words[i]);
}

function changeWord() {
var cw = wordArray[currentWord];
var nw = currentWord == words.length - 1 ? wordArray[0] : wordArray[currentWord + 1];
for (var i = 0; i < cw.length; i++) {
  animateLetterOut(cw, i);
}

for (var i = 0; i < nw.length; i++) {
  nw[i].className = 'letter behind';
  nw[0].parentElement.style.opacity = 1;
  animateLetterIn(nw, i);
}

currentWord = (currentWord == wordArray.length - 1) ? 0 : currentWord + 1;
}

function animateLetterOut(cw, i) {
setTimeout(function () {
  cw[i].className = 'letter out';
}, i * 80);
}

function animateLetterIn(nw, i) {
setTimeout(function () {
  nw[i].className = 'letter in';
}, 340 + (i * 80));
}

function splitLetters(word) {
var content = word.innerHTML;
word.innerHTML = '';
var letters = [];
for (var i = 0; i < content.length; i++) {
  var letter = document.createElement('span');
  letter.className = 'letter';
  letter.innerHTML = content.charAt(i);
  word.appendChild(letter);
  letters.push(letter);
}

wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector(".navbar");

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a ');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links=>{
        links.classList.remove("active");
        document.querySelectorAll('header nav a[href*=' + id + ']').classList.add('active')
      })
    }
  })
}

menuIcon.onclick =() => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

const section = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = [
        ...document.querySelectorAll('.navbar a'), // Each navbar item
        document.querySelector('.home-img'),      // The home image
        document.querySelector('.home-content h1'), // The heading
        document.querySelector('.home-content .text'), // The animated words
        ...document.querySelectorAll('.home-button .button'), // Buttons
        document.querySelector('.social-icon')  // Social icons
    ];

    const observerOptions = {
        root: null,
        threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a delay for each element based on its index
                setTimeout(() => {
                    entry.target.classList.add('visible'); // Trigger the animation
                }, 1500 * Array.from(animatedElements).indexOf(entry.target)); // 1.5s delay per element

                observer.unobserve(entry.target); // Stop observing once it's animated
            }
        });
    }, observerOptions);

    // Add fade-in class to all animated elements and observe them
    animatedElements.forEach((element) => {
        element.classList.add('fade-in');
        observer.observe(element);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutElements = [
        document.querySelector('.about-img'),
        document.querySelector('.about-content h2'),
        document.querySelector('.about-content h3'),
        document.querySelector('.about-content p'),
        document.querySelector('.typing-text')
    ];

    const observerOptions = {
        root: null,
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    aboutElements.forEach(element => {
        element.classList.add('hidden'); // Initially hide elements
        observer.observe(element);
    });
});



document.addEventListener("DOMContentLoaded", function () {
  // Select all sections or elements that should animate on scroll
  const animatedSections = document.querySelectorAll('.section, .about-img img, .about-content');

  const observerOptions = {
      root: null,
      threshold: 0.1  // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);  // Stop observing once it has animated
          }
      });
  };

  // Create observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each animated element
  animatedSections.forEach(section => {
      observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all sections or elements that should animate on scroll
  const animatedSections = document.querySelectorAll('.section, .bar');

  const observerOptions = {
      root: null,
      threshold: 0.1  // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);  // Stop observing once it has animated
          }
      });
  };

  // Create observer instance
  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each animated element
  animatedSections.forEach(section => {
      observer.observe(section);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedBars = document.querySelectorAll('.bar');

  const observerOptions = {
      root: null,
      threshold: 0.1  // Trigger when 10% of the element is visible
  };

  const observerCallback = (entries, observer) => {
      entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
              // Add the 'visible' class to animate the bar
              entry.target.classList.add('visible');
              
              // Dynamically set the transition delay based on the order
              entry.target.style.transitionDelay = `${index * 0.1}s`;  // 0.2s between each bar
              
              // Stop observing once the animation is triggered
              observer.unobserve(entry.target);
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe each skill bar
  animatedBars.forEach(bar => {
      observer.observe(bar);
  });
});

document.addEventListener("DOMContentLoaded", function () {
    // Select all service boxes
    const serviceBoxes = document.querySelectorAll('.single-service');

    // Create a timeline using GSAP
    const timeline = gsap.timeline({
        paused: true // Pause initially, we will play it later
    });

    // Add each service box to the timeline with a staggered effect
    serviceBoxes.forEach((box, index) => {
        timeline.to(box, {
            opacity: 1,
            y: 0,
            duration: 0.1,
            delay: index * 0.1, // Stagger by 0.3 seconds
            ease: "power1.out"
        });
    });

    // Set the initial styles for animation
    gsap.set(serviceBoxes, { opacity: 0, y: 50 }); // Set boxes hidden initially

    // Create an IntersectionObserver to trigger the animation when the section is in view
    const observerOptions = {
        root: null,
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Play the timeline when the services section comes into view
                timeline.play();
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    };

    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe the services section
    const servicesSection = document.querySelector('.services');
    observer.observe(servicesSection);
});

document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the card is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;

                // Stagger the appearance of each card
                setTimeout(() => {
                    card.classList.add('visible'); // Add the visible class
                }, 100 * Array.from(projectCards).indexOf(card)); // Delay based on index

                observer.unobserve(card); // Stop observing after it's visible
            }
        });
    }, observerOptions);

    projectCards.forEach(card => {
        observer.observe(card); // Start observing each card
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const contactElements = [
        document.querySelector('.contact .sub-title'),
        document.querySelector('.contact .contact-left p:nth-child(2)'), // Email
        document.querySelector('.contact .contact-left p:nth-child(3)'), // Phone
        document.querySelector('.contact-right input:nth-child(1)'), // Name input
        document.querySelector('.contact-right input:nth-child(2)'), // Email input
        document.querySelector('.contact-right textarea'), // Message textarea
        document.querySelector('.contact-right button'), // Submit button
        ...document.querySelectorAll('.footer .social a'), // Footer social icons
        ...document.querySelectorAll('.footer .list li'), // Footer links
        document.querySelector('.footer .copyright') // Footer copyright
    ];

    const observerOptions = {
        root: null,
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    contactElements.forEach(element => {
        element.classList.add('hidden'); // Initially hide elements
        observer.observe(element);
    });
});


