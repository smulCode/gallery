import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 
    "Client-ID tXNNnxFz8acPb9cQCE-o9MyihcWsqnveJVrCjtcUK38",
  },
});
