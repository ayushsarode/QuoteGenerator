const generateGifbtn = document.querySelector(
  ".gif-generator .generate-gif-btn"
);

const MemeGifs = document.querySelector(".gif-generator img");

const updateDetails = (url) => {
  MemeGifs.setAttribute("src", url);
};

const generateGif = () => {
  fetch("https://api.catboys.com/baka")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url);
    });
};

generateGifbtn.addEventListener("click", generateGif);

generateGif();
