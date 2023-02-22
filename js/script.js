const item = document.querySelector(".item");
const item1 = document.querySelector(".item-1");
const item2 = document.querySelector(".item-2");
const item3 = document.querySelector(".item-3");
const feature = document.querySelector(".feature-items");
const img = document.querySelector(".img-box");

const btnIcon = document.querySelector(".btn1");
const quest1 = document.querySelector(".question-1");

const btnIcon2 = document.querySelector(".btn2");
const quest2 = document.querySelector(".question-2");

const btnIcon3 = document.querySelector(".btn3");
const quest3 = document.querySelector(".question-3");

const btnIcon4 = document.querySelector(".btn4");
const quest4 = document.querySelector(".question-4");

const question1 = document.querySelector(".question-1");
const question2 = document.querySelector(".question-2");
const question3 = document.querySelector(".question-3");
const question4 = document.querySelector(".question-4");

// const myTimeout = setTimeout(myGreeting, 5000);

item1.addEventListener("click", function () {
  item1.classList.toggle("active");

  //   document.getElementById("item-text").style.marginRight = "-20px";
  //   document.getElementById("item-desc").style.marginRight = "-20px";
  if (item1.classList.contains("active")) {
    document.getElementById("item-text").innerHTML = "Bookmark in one click";
    document.getElementById("text-desc").innerHTML =
      "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    document.getElementById("img").src =
      "images/illustration-features-tab-1.svg";
  }

  if (item2.classList.contains("active")) {
    item2.classList.toggle("active");
  } else if (item3.classList.contains("active")) {
    item3.classList.toggle("active");
  }
});

item2.addEventListener("click", function () {
  item2.classList.toggle("active");

  if (item2.classList.contains("active")) {
    document.getElementById("item-text").innerHTML = "Intelligent Search";
    document.getElementById("text-desc").innerHTML =
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.";
    document.getElementById("img").src =
      "images/illustration-features-tab-2.svg";
  }

  if (item1.classList.contains("active")) {
    item1.classList.toggle("active");
  } else if (item3.classList.contains("active")) {
    item3.classList.toggle("active");
  }
});

item3.addEventListener("click", function () {
  item3.classList.toggle("active");

  if (item3.classList.contains("active")) {
    document.getElementById("item-text").innerHTML = "Share your bookmarks";
    document.getElementById("text-desc").innerHTML =
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.";
    document.getElementById("img").src =
      "images/illustration-features-tab-3.svg";
  }

  if (item1.classList.contains("active")) {
    item1.classList.toggle("active");
  } else if (item2.classList.contains("active")) {
    item2.classList.toggle("active");
  }
});

question1.addEventListener("click", function () {
  quest1.classList.toggle("visible");
});
question2.addEventListener("click", function () {
  quest2.classList.toggle("visible");
});
question3.addEventListener("click", function () {
  quest3.classList.toggle("visible");
});
question4.addEventListener("click", function () {
  quest4.classList.toggle("visible");
});

function add() {
  btnIcon.addEventListener("click", function () {
    quest1.classList.toggle("visible");
  });
  btnIcon2.addEventListener("click", function () {
    quest2.classList.toggle("visible");
  });
  btnIcon3.addEventListener("click", function () {
    quest3.classList.toggle("visible");
  });
  btnIcon4.addEventListener("click", function () {
    quest4.classList.toggle("visible");
  });
}

const header = document.querySelector(".header");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");

menuOpen.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
menuClose.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
// SMOOTH SCROLL
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("tgl")) header.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-120px",
  }
);
obs.observe(sectionHeroEl);

// function ShowAlert() {
//   var email = document.getElementById("email");
//   var filter =
//     /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//   if (!filter.test(email.value)) {
//     alert("Please provide a valid email address");
//     email.focus;
//     return false;
//   } else {
//     alert(
//       "Thanks for your intrest in us, Now you will be able to receive monthly updates from us."
//     );
//     document.getElementById("txtEmailId").value = "";
//   }
// }

//TRIAL HERE

// item1.addEventListener("click", function () {
//   document.getElementById("item").style.opacity = "0";

//   function myGreeting() {
//     document.getElementById("item").style.opacity = "1";
//   }
//   function myStopFunction() {
//     clearTimeout(myTimeout);
//   }
// });

// UP TO HERE

// item2.addEventListener("click", function () {
//   //   feature.classList.remove("active");
//   feature.classList.toggle("active");
//   feature.classList.add("active");
//   //   if (feature.classList.contains("active")) {
//   //     feature.remove.classList;
//   //   }
// });
// item3.addEventListener("click", function () {
//   //   if (feature.classList.contains("active")) {
//   //     feature.classList.remove("active");
//   //   }
//   feature.classList.toggle("active");

//   feature.classList.add("active");
// });
// item2.addEventListener("click", function () {
//   feature.classList.toggle("item2");
// });
