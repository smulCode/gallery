import React,{useState} from "react";
import unsplash from "../Api/Unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList"


export default function App() {
const [images,setImages]= useState([])


 const onSearchSubmit = async (term) => {
  const response = await unsplash.get("/search/photos", {
    params: { query: term },
  });

  setImages(response.data.results);
 
};

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
    <SearchBar onSubmit={onSearchSubmit} />
    <ImageList images={images}/>
  </div>
  )
}


