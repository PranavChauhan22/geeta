import React, { useEffect, useState } from 'react';
import ChapterCarousel from './ChapterCarousel'; // Adjust the path based on your file structure
import "./App.css"
import bhg from "./bhg.gif"
import cir from "./cir.gif"
import om from "./om.gif"
import FolderUploader from './FolderUploader';
const App = () => {
  const [chapters, setChapters] = useState(null);
  const [res, setres] = useState(true);
console.log(chapters);
  useEffect(() => {
    // Fetch the chapters data from your server
    // You can use Fetch or Axios to make a GET request to your server endpoint
    // Update the endpoint based on your server configuration
    // fetch('http://localhost:3003/getChapters')
    fetch('https://gitab.onrender.com/getChapters')
      .then((response) => response.json())
      .then((data) => setChapters(data.chapters))
      .catch((error) => console.error('Error fetching chapters:', error));
  }, []);
  

  return (
    <>
    {res?
    <div className='bhgF'>
      <img src={bhg} className="bhg"/>
      <div className='btn_bhg' onClick={()=>setres(e=>!e)}>Explore</div>
      <img src={cir} className="cir"/>

    </div>:  
    <>

    <div style={{backgroundColor:"#ff9933", width:"100%",height:"10vh",textAlign:"center",padding:"10px"}} className="cc">MAA MUDITA</div>
      {chapters ? <ChapterCarousel chapters={chapters} /> : <div className='omP'>
        <img src={om} className="om"/>
        </div>}
      </>
    }
      </>
  );
};

export default App;
