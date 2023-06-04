import data from "./SliderData";
import { useState } from "react";
const Slider = () => {
    const [index, setIndex] = useState(0);
    const {pic,name, location,quote,topic}= data[index];

    
    const nextSlide=()=>{
        setIndex((index)=>{
           let newIndex = index + 1;
           if(newIndex>data.length-1){
            return 0;
           }
           
           return newIndex;
        })
    }
    const prevSlide=()=>{
        setIndex((index)=>{
            let newIndex = index -1;
            if(newIndex<0){
                return data.length-1;
            }
            return newIndex
          
        })
    }
    return ( 
        <section>
            <div className="slider-section">
            <div className="slider-con">
                <h2>{topic}</h2>
                <p>{quote}</p>
                <div className="pic-location-con">
                    <div className="pic-con">
                        <img src={pic} alt={name} />
                    </div>
                    <p>{name} <br/><span>{location}</span></p>
                </div>
                <button className="prev-btn" onClick={prevSlide}>&larr;</button>
                <button className="next-btn" onClick={nextSlide}>&rarr;</button>
            
               
               
            </div>
            </div>
           
        </section>
     );
}
 
export default Slider;