// require("dotenv").config();

// const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${proccess.env.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY);

const key = process.env.API_KEY;

// console.log(key);

//returns first gif:
async function getImage(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const data = await response.json();
    // console.log(data);
    let chosenImage = data.data[0].url;
    console.log(chosenImage);
    return chosenImage;
  } catch (error) {
    console.error(error);
  }
}
//retruns a random gif from the 25:

//returns an array of all of the gif links
async function getImages(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const data = await response.json();
    const dataObjects = data.data;
    const chosenImages = [];
    for (let x of dataObjects) {
      chosenImages.push(x.url);
    }
    console.log(chosenImages);
    return chosenImages;
  } catch (error) {
    console.error(error);
  }
}

// getImages("cat");

// getImage("happyyes");

const button = document.querySelector(".button");
const image = document.querySelector("image");

//copy and paste API key into ${key} in response for it to work on live sever

async function getRandomImage(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const data = await response.json();
    // console.log(data.data);
    const chosenImage = data.data[Math.floor(Math.random() * 24)].embed_url;
    console.log(chosenImage);
    return chosenImage;
  } catch (error) {
    console.error(error);
  }
}

// getRandomImage("cat");

async function onClick() {
  document.getElementById("image").src = await getRandomImage("cat");
}

button.addEventListener("click", onClick);
