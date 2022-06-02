const getRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const gallery = document.getElementsByClassName("gallery");
const imgIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

imgIndex.forEach((i) => {
  const image = document.createElement("img");
  image.src =
    "https://source.unsplash.com/random/300x300/?sig=" + getRandomNumber();
  image.alt = "Random Image";
  gallery[0].appendChild(image);
});
