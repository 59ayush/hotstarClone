
//////////////////////////////// TOP CAROUSEL/////////////////////////


var movies = [
  {
    name: "raya and the last dragon",
    des: "1 hr 47 min • 2021 • Animation • U/A 7+\nRaya, a fallen princess must track down the legendary last dragon to stop the evil forces that have returned and threaten her world...",
    image: "images/slider 4.PNG"
  },
  {
    name: "loki",
    des: "1 Season • 6 Episodes • Superhero • U/A • 13+ • Marvel\nThe mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of 'Avengers: Endgame'...",
    image: "images/slider 1.PNG"
  },
  {
    name: "luca",
    des: "1 hr 35 min • 2021 • Animation • U/A 7+\nThe movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides...",
    image: "images/slider 5.PNG"
  },
  {
    name: "falcon and the winter soldier",
    des: "1 Season • 6 Episodes • Superhero • U/A • 13+ • Marvel\nFollowing the events of 'Avengers: Endgame', Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience...",
    image: "images/slider 2.PNG"
  },
  {
    name: "wanda vision",
    des: "1 Season • 6 Episodes • Superhero • U/A 13+ • Marvel\nWanda Maximoff and Vision - two super-powered beings living idealised suburban lives begin to suspect that everything is not as it seems...",
    image: "images/slider 3.PNG"
  }
];


const carousel = document.querySelector(".carousel");
var sliders = [];
var sliderIndex = 0;
var z = 0;


function createSlide() {
  if (sliderIndex >= movies.length){
    sliderIndex = 0;
  }

  var slide = document.createElement("div");
  var image = document.createElement("img");
  var content = document.createElement("div");
  var h1 = document.createElement("h1");
  var p = document.createElement("p");


  h1.innerText = movies[sliderIndex].name;
  p.innerText = movies[sliderIndex].des;
  image.setAttribute("src", movies[sliderIndex].image);


  h1.classList.add("movie-title");
  p.classList.add("movie-des");
  content.classList.add("slide-content");
  slide.classList.add("slider");
  image.classList.add("slider-img");


  content.appendChild(h1);
  content.appendChild(p);
  slide.appendChild(content);
  slide.appendChild(image);


  carousel.appendChild(slide);
  ++sliderIndex;

  if (sliders.length > 1){
    sliders[sliders.length - 2].style.marginLeft= "-100%";
    if (sliders.length > 2){
      carousel.removeChild(sliders[sliders.length - 3]);
    }
  }

  sliders.push(slide);

}

// for (var i = 0; i<movies.length; ++i){
//   createSlide();
// }
createSlide();
setInterval(() => {
  createSlide();
}, 3000);



/////////////////////////////////// VIDEO CARDS ///////////////////////////////


var videoCards = document.querySelectorAll(".video-card");

for (let i = 0; i<videoCards.length; ++i){
  var item = videoCards[i];

  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
}



//////////////////////////////////ROW SLIDERS////////////////////////////////////

var row = document.querySelectorAll(".card-container");
var pre = document.querySelectorAll(".pre-btn");
var next = document.querySelectorAll(".nxt-btn");


for (let i = 0; i<row.length; ++i){
  pre[i].addEventListener("click", () => {
    row[i].scrollLeft -= document.querySelector(".card").offsetWidth * 5 + 10;
  });
  next[i].addEventListener("click", () => {
    row[i].scrollLeft += document.querySelector(".card").offsetWidth * 5 + 10;
  })
}
