import React,{useState, useEffect} from 'react';
import Gallery1 from "../images/gallery-1.webp";
import Gallery2 from "../images/gallery-2.webp";
import Gallery3 from "../images/gallery-3.webp";
import Gallery4 from "../images/gallery-4.webp";
import Gallery5 from "../images/gallery-5.webp";
import Gallery6 from "../images/gallery-6.webp";

const Gallery = () => {
    const [image1, setImage1] = useState(Gallery1);
    const [image2,setImage2] = useState(Gallery2);
    const [image3,setImage3] = useState(Gallery3);

    useEffect(() => {
        setInterval(()=>{
            setImage1((value)=>(value===Gallery1 ? Gallery4 : Gallery1))
            setImage2((value)=>(value===Gallery2 ? Gallery5 : Gallery2))
            setImage3((value)=>(value===Gallery3 ? Gallery6 : Gallery3))
        },2900);
    },[])
    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div>
                <div className="gallery-1"></div>
                <img src={image1} alt=""/>
                <img src={image2} alt=""/>
                <img src={image3} alt=""/>
            </div>
        </div>
    )
}

export default Gallery