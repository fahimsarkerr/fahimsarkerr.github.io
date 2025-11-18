
document.querySelectorAll('.nav-btn').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

  const typedText = document.querySelector('.typed-text');
  const cursor = document.querySelector('.cursor');
  const roleElements = document.querySelectorAll("#role-texts li");
  const roles = Array.from(roleElements).map(el => el.textContent.trim());

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const fullText = roles[roleIndex];

    if (!isDeleting) {
      charIndex++;
      typedText.textContent = fullText.substring(0, charIndex);
    } else {
      charIndex--;
      typedText.textContent = fullText.substring(0, charIndex);
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === fullText.length) {
      typeSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typeSpeed = 500;
    }

    setTimeout(typeEffect, typeSpeed);
  }

  typeEffect();

  const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-btn');

function setActiveNav() {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNav);


  const navMenu = document.getElementById('navMenu');
  let pressTimer;

  // Touch-and-hold to expand
  navMenu.addEventListener('touchstart', function () {
    pressTimer = setTimeout(() => {
      navMenu.classList.add('expanded');
    }, 500); // long press duration
  });

  navMenu.addEventListener('touchend', function () {
    clearTimeout(pressTimer);
  });

  // Click to set active and collapse
  const navButtons = document.querySelectorAll('.nav-btn');
  navButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      navButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      navMenu.classList.remove('expanded');
    });
  });

  // Remove last char on mobile
  function removeLastCharFromAllOnMobile() {
    if (window.innerWidth <= 768) { 
      const spans = document.querySelectorAll('.myText'); 
      spans.forEach(span => {
        const text = span.textContent.trim();
        span.textContent = text.slice(0, -1); 
      });
    }
  }

  window.addEventListener('DOMContentLoaded', removeLastCharFromAllOnMobile);

  window.addEventListener('resize', removeLastCharFromAllOnMobile);

  document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.portfolio-item').forEach(item => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


// Filter functionality
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Set active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    items.forEach(item => {
      const isMatch = filter === 'all' || item.dataset.category === filter;

      // If it matches, fade-out first
      item.classList.remove('fade-in');
      item.classList.add('fade-out');

      setTimeout(() => {
        if (isMatch) {
          item.style.display = 'block';
          requestAnimationFrame(() => {
            item.classList.remove('fade-out');
            item.classList.add('fade-in');
          });
        } else {
          item.style.display = 'none';
        }
      }, 250); // matches your CSS transition timing
    });
  });
});

// প্রজেক্ট iframe modal খোলার জন্য
function openProject(url) {
  document.getElementById('projectFrame').src = url;
  document.getElementById('projectModal').style.display = 'block';
}

// modal বন্ধ করার জন্য
function closeModal() {
  document.getElementById('projectModal').style.display = 'none';
  document.getElementById('projectFrame').src = '';
}

