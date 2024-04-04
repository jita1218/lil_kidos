import React, { useEffect, useState } from "react";
import "./video.css";


const API = "AIzaSyCwE8bKnq_cdpODOGC3F0IicG9qL9o-HRI";
const channelId = "UCbCmjCuTUZos6Inko4u57UQ";

export const Video = () => {
  const [allvideos, setAllvideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  


  useEffect(() => {
    const fetchurl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&q=${searchTerm}&key=${API}`;


    fetch(fetchurl)
      .then((response) => response.json())
      .then((resJson) => {
        const result = resJson.items.map((doc) => ({
          ...doc,
          Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
          Title: doc.snippet.title,
        }));

        setAllvideos(result);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        console.log("API Response:", error.response);
      });
  }, [searchTerm]);

  console.log(allvideos);

  return (
    <>
<input
        type="text"
        className="searchbar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="kido's rhymes"
      />
    <div className="video_container">
       

      {allvideos.map((item) => {
        return (
            <div className="videoplay" key= {item && item.id.videoId}>
              <iframe
                width="560"
                height="315"
                
src= {item && item.Videolink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
        );
      })}
    </div>
    </>
  );
};


