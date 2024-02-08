import React, { useState,useEffect } from "react";
import axios from "axios";
import "./image.css";
import { AiOutlineSearch } from "react-icons/ai";


function Image() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [loading , setLoading] = useState(true);
  useEffect(() => {
    const fetchImages = async () => {
      try {

        setLoading(true);

        const response = await axios.get(
          `https://api.pexels.com/v1/search?query=${searchTerm}&per_page=26`,
          {
            headers: {
              Authorization: "k6FIUeONVqvzWU8Ov0oUqLCodMigIZCl3XJ0irJhW2r39O3F7KtXnUm6",
            },
          }
        );
        if (response.data.photos) {
          setImages(response.data.photos);
        } else {
          console.error("No results found in the response:", response);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      
    } finally {
      // Set loading to false when the request is complete
      setLoading(false);
    }
  };

    fetchImages();
  }, [searchTerm]);

  return (
    <>
    <div className="container">
      <h3 className="search">Search and Learn</h3>
      <form>
    
      <div className="search-container">
        <input
          type="text"
          className="typo"
          placeholder="Search for words..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <AiOutlineSearch  className="search-icon" />
      </div>

   
      </form>
    
      </div>
      
    
      <div className="images-container">
      {
      loading ? (
        <p>Loading...</p>
      ) : (images.map((image) => (
        <div className="images_box" key={image.id}>
          <img src={image.src.small} alt={image.photographer} />
        </div>
       
      )))}
    </div>
    </>
  );

}
// }

export default Image;
