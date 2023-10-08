let servicesHTML = "";

services.forEach((content) => {
    servicesHTML += `<div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="${content.icon}"></i></div>
                            <h3 class="card-title mb-3">${content.title}</h3>
                            <p class="card-text">${content.text}</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>`;
}); 
document.getElementById("services_div").innerHTML = servicesHTML;


let services2HTML = "";

services2.forEach((content) => {
  services2HTML += `<div class="col-md">
                    <div class="card bg-dark text-light">
                        <div class="card-body text-center">
                            <div class="h1 mb-3">
                            <i class="${content.icon}"></i></div>
                            <h3 class="card-title mb-3">${content.title}</h3>
                            <p class="card-text">${content.text}</p>
                            <a href="" class="btn btn-warning">Read More</a>
                        </div>
                    </div>
                </div>`;
});
document.getElementById("services2_div").innerHTML = services2HTML;



//-----------------------------------------------

const more_btn = document.getElementById('readmore_btn'); 
const more_txt = document.getElementById('readmore_txt');
const short_desc = document.getElementById('short_desc');

let isTextVisible = false; 

more_btn.addEventListener("click", () => {
  if (isTextVisible) {
    more_txt.style.display = "none";
    more_btn.innerHTML = '<i class="bi bi-chevron-right"></i> Read More';
  } else {
    more_txt.style.display = "block";
    more_btn.innerHTML = '<i class="bi bi-chevron-left"></i> Read Less';
    short_desc.scrollIntoView({ behavior: "smooth" });
    }
    

  isTextVisible = !isTextVisible;
});



const more_btn2 = document.getElementById("readmore_btn2");
const more_txt2 = document.getElementById("readmore_txt2");
const short_desc2 = document.getElementById("short_desc2");

let isTextVisible2 = false;

more_btn2.addEventListener("click", () => {
  if (isTextVisible2) {
    more_txt2.style.display = "none";
    more_btn2.innerHTML = '<i class="bi bi-chevron-right"></i> Read More';
  } else {
    more_txt2.style.display = "block";
    more_btn2.innerHTML = '<i class="bi bi-chevron-left"></i> Read Less';
    short_desc2.scrollIntoView({ behavior: "smooth" });
  }

  isTextVisible2 = !isTextVisible2;
});