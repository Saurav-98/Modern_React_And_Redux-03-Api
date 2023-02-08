import axios from "axios";

const searchImages = async () => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID T8M8cNhT69TCJoqLpEAdpefBKsI03ULAxfM44sIzzSM",
    },
    params: {
      query: "beach",
    },
  });
  console.log(response);
  return response;
};

export default searchImages;
