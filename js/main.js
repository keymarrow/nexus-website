// Accordion Functionality
document.querySelectorAll(".accordion").forEach(acc => {
  acc.addEventListener("click", function() {
    acc.classList.toggle("open");
  });
});

// Automatically setting the date in footer
const date = new Date();
const datePlaceholder = document.getElementById('date').innerHTML = date.getFullYear();
console.log(datePlaceholder);

// Navigation menu toggle 

function myFunction() {
  var x = document.querySelector("#test");
  x.classList.toggle('change');
  if (x.style.display === "block") {
   x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Accordion Functionality
document.querySelectorAll(".accordion").forEach(acc => {
  acc.addEventListener("click", function() {
    acc.classList.toggle("open");
  });
});
