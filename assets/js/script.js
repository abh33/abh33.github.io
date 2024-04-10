'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// // custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }

// // filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// const filterFunc = function (selectedValue) {

//   for (let i = 0; i < filterItems.length; i++) {

//     if (selectedValue === "all") {
//       filterItems[i].classList.add("active");
//     } else if (selectedValue === filterItems[i].dataset.category) {
//       filterItems[i].classList.add("active");
//     } else {
//       filterItems[i].classList.remove("active");
//     }

//   }

// }

// // add event in all filter button items for large screen
// let lastClickedBtn = filterBtn[0];

// for (let i = 0; i < filterBtn.length; i++) {

//   filterBtn[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     filterFunc(selectedValue);

//     lastClickedBtn.classList.remove("active");
//     this.classList.add("active");
//     lastClickedBtn = this;

//   });

// }



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }


    }

    activateProjectList();

  });
}


document.getElementById('btn1').addEventListener('click', function() {
  this.classList.add('active');
  document.getElementById('btn2').classList.remove('active');
  document.getElementById('content1').style.display = 'block'; // Show content 1
  document.getElementById('content2').style.display = 'none';  // Hide content 2
});

document.getElementById('btn2').addEventListener('click', function() {
  this.classList.add('active');
  document.getElementById('btn1').classList.remove('active');
  document.getElementById('content1').style.display = 'none';   // Hide content 1
  document.getElementById('content2').style.display = 'block'; // Show content 2
});

document.addEventListener('DOMContentLoaded', function() {
  // this.classList.add('active');
  // document.getElementById('btn2').classList.remove('active');
  document.getElementById('content1').style.display = 'block'; // Show content 1
  document.getElementById('content2').style.display = 'none';  // Hide content 2
});

// document.addEventListener('DOMContentLoaded', function() {
//   // this.classList.add('active');
//   // document.getElementById('btn2').classList.remove('active');
//   document.getElementById('mtp-content').style.display = 'block'; // Show content 1
//   document.getElementById('theme-content').style.display = 'none';  // Hide content 2
//   document.getElementById('eysip-content').style.display = 'none'; // Hide content 3
//   document.getElementById('course-content').style.display = 'none';  // Hide content 4
//   document.getElementById('undergrad-content').style.display = 'none';  // Hide content 5
//   activateProjectList();
// });

// document.getElementById('mtp-btn').addEventListener('click', function() {
//   this.classList.add('active');

//   document.getElementById('theme-btn').classList.remove('active');
//   document.getElementById('eysip-btn').classList.remove('active');
//   document.getElementById('course-btn').classList.remove('active');
//   document.getElementById('undergrad-btn').classList.remove('active');

//   document.getElementById('mtp-content').style.display = 'block'; // Show content 1
//   document.getElementById('theme-content').style.display = 'none';  // Hide content 2
//   document.getElementById('eysip-content').style.display = 'none';  // Hide content 2
//   document.getElementById('course-content').style.display = 'none';  // Hide content 2
//   document.getElementById('undergrad-content').style.display = 'none';  // Hide content 2
// });

// document.getElementById('theme-btn').addEventListener('click', function() {
//   this.classList.add('active');

//   document.getElementById('mtp-btn').classList.remove('active');
//   document.getElementById('eysip-btn').classList.remove('active');
//   document.getElementById('course-btn').classList.remove('active');
//   document.getElementById('undergrad-btn').classList.remove('active');

//   document.getElementById('mtp-content').style.display = 'none'; // Show content 1
//   document.getElementById('theme-content').style.display = 'block';  // Hide content 2
//   document.getElementById('eysip-content').style.display = 'none';  // Hide content 2
//   document.getElementById('course-content').style.display = 'none';  // Hide content 2
//   document.getElementById('undergrad-content').style.display = 'none';  // Hide content 2
// });

// document.getElementById('eysip-btn').addEventListener('click', function() {
//   this.classList.add('active');

//   document.getElementById('mtp-btn').classList.remove('active');
//   document.getElementById('theme-btn').classList.remove('active');
//   document.getElementById('course-btn').classList.remove('active');
//   document.getElementById('undergrad-btn').classList.remove('active');

//   document.getElementById('mtp-content').style.display = 'none'; // Show content 1
//   document.getElementById('theme-content').style.display = 'none';  // Hide content 2
//   document.getElementById('eysip-content').style.display = 'block';  // Hide content 2
//   document.getElementById('course-content').style.display = 'none';  // Hide content 2
//   document.getElementById('undergrad-content').style.display = 'none';  // Hide content 2
// });

// document.getElementById('course-btn').addEventListener('click', function() {
//   this.classList.add('active');

//   document.getElementById('mtp-btn').classList.remove('active');
//   document.getElementById('theme-btn').classList.remove('active');
//   document.getElementById('eysip-btn').classList.remove('active');
//   document.getElementById('undergrad-btn').classList.remove('active');

//   document.getElementById('mtp-content').style.display = 'none'; // Show content 1
//   document.getElementById('theme-content').style.display = 'none';  // Hide content 2
//   document.getElementById('eysip-content').style.display = 'none';  // Hide content 2
//   document.getElementById('course-content').style.display = 'block';  // Hide content 2
//   document.getElementById('undergrad-content').style.display = 'none';  // Hide content 2
// });

// document.getElementById('undergrad-btn').addEventListener('click', function() {
//   this.classList.add('active');

//   document.getElementById('mtp-btn').classList.remove('active');
//   document.getElementById('theme-btn').classList.remove('active');
//   document.getElementById('eysip-btn').classList.remove('active');
//   document.getElementById('course-btn').classList.remove('active');

//   document.getElementById('mtp-content').style.display = 'none'; // Show content 1
//   document.getElementById('theme-content').style.display = 'none';  // Hide content 2
//   document.getElementById('eysip-content').style.display = 'none';  // Hide content 2
//   document.getElementById('course-content').style.display = 'none';  // Hide content 2
//   document.getElementById('undergrad-content').style.display = 'block';  // Hide content 2
// });

// document.getElementById('project1').addEventListener('click', function() {
//   this.classList.add('active');

//   document.getElementById('project2').classList.remove('active');
//   document.getElementById('project3').classList.remove('active');
//   document.getElementById('project4').classList.remove('active');
//   document.getElementById('project5').classList.remove('active');
//   document.getElementById('project6').classList.remove('active');
//   document.getElementById('project7').classList.remove('active');
  

//   document.getElementById('project1-content').style.display = 'block'; // Show content 1
//   document.getElementById('project2-content').style.display = 'none';  // Hide content 2
//   document.getElementById('project3-content').style.display = 'none';  // Hide content 2
//   document.getElementById('project4-content').style.display = 'none';  // Hide content 2
//   document.getElementById('project5-content').style.display = 'none';  // Hide content 2
//   document.getElementById('project6-content').style.display = 'none';  // Hide content 2
//   document.getElementById('project7-content').style.display = 'none';  // Hide content 2
// });

// document.getElementById('project2').addEventListener('click', function() {
//   this.classList.add('active');

//   document.getElementById('project1').classList.remove('active');
//   document.getElementById('project3').classList.remove('active');
//   document.getElementById('project4').classList.remove('active');
//   document.getElementById('project5').classList.remove('active');
//   document.getElementById('project6').classList.remove('active');
//   document.getElementById('project7').classList.remove('active');
  

//   document.getElementById('project1-content').style.display = 'none'; // Show content 1
//   document.getElementById('project2-content').style.display = 'block';  // Hide content 2
//   document.getElementById('project3-content').style.display = 'none';  // Hide content 2
//   document.getElementById('project4-content').style.display = 'none';  // Hide content 2
//   document.getElementById('project5-content').style.display = 'none';  // Hide content 2
//   document.getElementById('project6-content').style.display = 'none';  // Hide content 2
//   document.getElementById('project7-content').style.display = 'none';  // Hide content 2
// });
// Function to remove 'active' class and hide content
// function deactivateAllProjects() {
//   for (let i = 1; i <= 7; i++) {
//     document.getElementById('project' + i).classList.remove('active');
//     document.getElementById('project' + i + '-content').style.display = 'none';
//   }
// }

// // Function to activate a project
// function activateProject(projectNumber) {
//   deactivateAllProjects();
//   document.getElementById('project' + projectNumber).classList.add('active');
//   document.getElementById('project' + projectNumber + '-content').style.display = 'block';

//   document.getElementById('project-buttons').classList.remove('active');
//   document.getElementById('project-buttons').style.display = 'none';


// }

// // Event listeners for each project button
// for (let i = 1; i <= 7; i++) {
//   document.getElementById('project' + i).addEventListener('click', function() {
//     activateProject(i);
//   });
// }

// function activateProjectList()
// {
//   document.getElementById("project-buttons").classList.add('active');
//   document.getElementById('project-buttons').style.display = 'block';
// }


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('project-tab-1-content').style.display = 'block';
  for(let i = 2; i <7; i++)
  {
    document.getElementById('project-tab-' + i + '-content').style.display = 'none'
  }
  document.getElementById('project00-buttons').style.display = 'block';
});

function deactivateAllProjectTabs() {
  for (let i = 1; i <7; i++) {
    document.getElementById('project-tab-' + i + '-btn').classList.remove('active');
    document.getElementById('project-tab-' + i + '-content').style.display = 'none';
  }
}

function activateProjectTab(project_tab_number) {
  deactivateAllProjectTabs();
  deactivateAllProjectDescriptions();
  document.getElementById('project-tab-' + project_tab_number + '-btn').classList.add('active');
  document.getElementById('project-tab-' + project_tab_number + '-content').style.display = 'block';

}

// Event listeners for each project tab
for (let i = 1; i <7; i++) {
  document.getElementById('project-tab-' + i + '-btn').addEventListener('click', function() {
    activateProjectTab(i);
  });
}

function deactivateAllProjectDescriptions() {
  var project_ids = ['101', '102', '103', '104', '301', '302', '303', '304', '305', '306', '307', '308', '401', '402', '403', '404', '405', '406', '407', '408', '409', '4010', '501', '502', '601', '602', '603']
  project_ids.forEach(function(project_id) {
    document.getElementById('project-' + project_id).classList.remove('active');
    document.getElementById('project-' + project_id + '-content').style.display = 'none';
  });
}

function activateProjectDescriptions(project_id) {
  deactivateAllProjectTabs();
  deactivateAllProjectDescriptions();
  document.getElementById('project-' + project_id).classList.add('active');
  document.getElementById('project-' + project_id + '-content').style.display = 'block';

}

var project_ids = ['101', '102', '103', '104', '301', '302', '303', '304', '305', '306', '307', '308', '401', '402', '403', '404', '405', '406', '407', '408', '409', '4010', '501', '502', '601', '602', '603']
project_ids.forEach(function(project_id) {
  document.getElementById('project-' + project_id).addEventListener('click', function() {
    activateProjectDescriptions(project_id);

});
});

for (let i = 1; i <5; i++) {
  document.getElementById('back-button-10' + i).addEventListener('click', function() {
    activateProjectTab(1);
  });
}

for (let i = 1; i <9; i++) {
  document.getElementById('back-button-30' + i).addEventListener('click', function() {
    activateProjectTab(3);
  });
}

for (let i = 1; i <11; i++) {
  document.getElementById('back-button-40' + i).addEventListener('click', function() {
    activateProjectTab(4);
  });
}

for (let i = 1; i <3; i++) {
  document.getElementById('back-button-50' + i).addEventListener('click', function() {
    activateProjectTab(5);
  });
}

for (let i = 1; i <4; i++) {
  document.getElementById('back-button-60' + i).addEventListener('click', function() {
    activateProjectTab(6);
  });
}

// document.getElementById('back-button-2').addEventListener('click', function() {
//   activateProjectTab(2);
// });

// for (let i = 1; i <7; i++) {

  
//   document.getElementById('project-tab-' + i + '-btn').addEventListener('click', function() {
//     activateProjectTab(i);
//   });
// }

// function deactivateAllProjects00() {
//   for (let i = 1; i <5; i++) {
//     document.getElementById('project-10' + i).classList.remove('active');
//     document.getElementById('project-10' + i + '-content').style.display = 'none';
//   }
// }

// // Select all div elements with an id ending in '-content'
// function activateProject00(project_tab_number) {
//   document.getElementById('project-tab-1-btn').classList.remove('active');
//   document.getElementById('project-tab-1-content').style.display = 'none'; 
//   deactivateAllProjects00();
//   document.getElementById('project-10' + project_tab_number).classList.add('active');
//   document.getElementById('project-10' + project_tab_number + '-content').style.display = 'block';

// }

// for (let i = 1; i <5; i++) {
//   document.getElementById('project-00' + i).addEventListener('click', function() {
//     activateProject00(i);
//   });
// }

// Add event listeners to buttons when the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', function() {
//   // Select all buttons with an id starting with 'project-'
//   var buttons = ["project-001", "project-002", "project-003", "project-004"]
//   buttons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       showProjectContent(button + '-content');
//     });
//   });
// });




// function activateProject00content(project_content_num)
// {
//   deactivateAllProject00buttons();
//   deactivateAllProject00content();
//   document.getElementById('project-00' + project_content_num + '-content').classList.add('active');
//   document.getElementById('project-00' + project_content_num + '-content').style.display = 'block';
// }

// // Event listeners for each project tab
// for (let i = 1; i <5; i++) {
//   document.getElementById('project00-' + i +'-content').addEventListener('click', function() {
//     activateProject00content(i);
//   });
// }



// function activateProjects00(project_tab_number) {
//   // deactivateAllProjects00();
//   document.getElementById('project-00' + project_tab_number).classList.add('active');
//   document.getElementById('project-00' + project_tab_number + '-content').style.display = 'block';
// }

// // Event listeners for each project tab
// for (let i = 1; i <5; i++) {
//   document.getElementById('project00-' + i +'-content').addEventListener('click', function() {
//     activateProjects00(i);
//   });
// }

// deactivateAllProject00buttons()


