import axios from "axios";
const ACCESS_KEY = "T8M8cNhT69TCJoqLpEAdpefBKsI03ULAxfM44sIzzSM";
const BASE_URL = "https://api.unsplash.com/";
const SEARCH_PHOTOS_ENDPOINT = "search/photos";
const URL = BASE_URL + SEARCH_PHOTOS_ENDPOINT;

const searchImages = async () => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    params: {
      query: "babes",
    },
  });

  console.log(response);
  return response;
};

export default searchImages;
