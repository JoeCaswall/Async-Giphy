require("dotenv").config();

// const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${proccess.env.API_KEY}&q=dog&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

// Print out value of API key stored in .env file
// console.log(process.env.API_KEY);

const key = process.env.API_KEY;

// console.log(key);
async function getImages(query) {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    const data = await response.json();
    let chosenImage = data.data[Math.floor(Math.random() * 24)].url;
    console.log(chosenImage);
    return chosenImage;
  } catch (error) {
    console.error(error);
  }
}

getImages("spaceman");
