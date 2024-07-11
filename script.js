// Update navbar layout when user is on mobile device
const toggle_nav_button = document.getElementById("toggle_nav");
console.log(toggle_nav_button);
toggle_nav_button.addEventListener('click', e => {
  const navitems = document.getElementsByClassName('navitems')[0];
  navitems.classList.toggle('show');
  toggle_nav_button.children[0].classList.toggle('hide');
  toggle_nav_button.children[1].classList.toggle('hide');
});

const navitems = document.getElementsByClassName('navitems')[0];
const navlinks = Array.from(document.getElementsByClassName('navlinks'));
navlinks.map((link) => {
  link.addEventListener('click', e => {
    if (toggle_nav_button.style.display != 'none' && navitems.classList.contains('show')) {
      navitems.classList.remove('show');

      toggle_nav_button.children[0].classList.toggle('hide');
      toggle_nav_button.children[1].classList.toggle('hide');
    }
  })
});


// Update the navbar active link when user scrolls the page
const sections = Array.from(document.querySelectorAll('section'));
let prevTimeout = null;
window.addEventListener('scroll', (e) => {
  let currsection = null;
  sections.forEach(section => {
    if (window.scrollY >= (section.offsetTop - 300)) {
      currsection = section.id;
    }
  });
  if (prevTimeout) {
    clearTimeout(prevTimeout);
  }
  prevTimeout = setTimeout(() => {
    navlinks.forEach(link => {
      if (link.href.includes(currsection)) {
        link.classList.add("navlink-active");
      }
      else {
        link.classList.remove("navlink-active");
      }
    });
  }, 50);
});

// Update Skills based on filter selected
function filterSkills(skillId) {
  const skills = Array.from(document.getElementsByClassName('skill'));
  skills.map(skill => {
    console.log(skill);
    if (skill.dataset.skillCategory == skillId) {
      skill.style.display = 'flex'
    }
    else {
      skill.style.display = 'none'
    }
  });
}
const skill_categories = document.getElementsByClassName('skill_categories')[0];
skill_categories.addEventListener('click', e => {
  if (!e.target.classList.contains('skill_categories')) {
    if (!e.target.classList.contains('skill_category_active')) {
      filterSkills(e.target.getAttribute('id'));
    }
    document.querySelector('.skill_category_active')?.classList.remove('skill_category_active');
    e.target.classList.add("skill_category_active");
  }
})
const frontend = document.getElementById('frontend').click();

