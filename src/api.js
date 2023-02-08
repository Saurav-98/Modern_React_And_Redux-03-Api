import axios from "axios";
const ACCESS_KEY = "T8M8cNhT69TCJoqLpEAdpefBKsI03ULAxfM44sIzzSM";
const BASE_URL = "https://api.unsplash.com/";
const SEARCH_PHOTOS_ENDPOINT = "search/photos";
const URL = BASE_URL + SEARCH_PHOTOS_ENDPOINT;

// ************** Fetch Data From API Function

const searchImages = async (term) => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    params: {
      query: term,
    },
  });

  const data = response.data.results;
  // console.log(data);
  return data;
};

export default searchImages;
