const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response = await fetch("https://z3rixbxrko46rfwbbd7tn2gxhi0lkzjq.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Total Views: ${data}`;

}

updateCounter();

function scrollLeft() {
  document.querySelector('.projects-container').scrollBy({
    left: -300, // Adjust scroll distance
    behavior: 'smooth',
  });
}

function scrollRight() {
  document.querySelector('.projects-container').scrollBy({
    left: 300,
    behavior: 'smooth',
  });
}
