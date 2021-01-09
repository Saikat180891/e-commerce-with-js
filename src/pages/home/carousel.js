function renderCarousel(element, url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      // Creating the carousel dynamically
      const div = document.createElement("DIV");
      div.className = "flex justify-start items-center carousel relative";
      const fragment = document.createDocumentFragment();
      data.forEach((d) => {
        // Creating each img tags and appending them to the fragment
        const image = document.createElement("IMG");
        image.src = d.img;
        image.className = "carousel-image";
        fragment.append(image);
      });
      // Creating the left click button for interactions
      const leftBtn = document.createElement("button");
      leftBtn.innerText = "<";
      leftBtn.className = "absolute left";
      leftBtn.addEventListener("click", () => {
        console.log("Left");
      });
      fragment.append(leftBtn);
      // Creating the right click button for interactions
      const rightBtn = document.createElement("button");
      rightBtn.innerText = ">";
      rightBtn.className = "absolute right";
      rightBtn.addEventListener("click", () => {
        console.log("Right");
      });
      fragment.append(rightBtn);
      // Apppending the entire fragment to the parent div
      div.append(fragment);
      // Adding the element to the DOM
      const carouselContainer = document.getElementById(element);
      carouselContainer.append(div);
    });
}

renderCarousel("carousel", "/data/get-carousel.json");
