import { useEffect, useRef, useState } from 'react'
import './App.css'
import * as ml5 from "ml5"
   function App() {
  const [Image,setImage]=useState("")
  const [Results,setResults]=useState([])
  let Ref =useRef()
  const classifyImage = () => {
    let imageClassifier = ml5.imageClassifier('MobileNet', () => {
     console.log('Model Loaded!');
   });
      imageClassifier.predict(Ref.current, (err, results) => {
        
        if (err) {
          console.error(err);
        } else {
          setResults(results);
      }
    });

 
  };

return(
  <>
<main className='w-[300px] h-[300px] bg-black object-contain'>
        <img src={Image} ref={Ref} alt="image" className='w-full h-full' />
    </main>
    <input type="file" name="" id="Image" onChange={(e)=>{
        let ImageURl  = URL.createObjectURL(e.target.files[0])
        setImage(ImageURl)
        classifyImage(e.target.files[0])
      }
        } hidden/>
    <label htmlFor="Image" className=' p-2 cursor-pointer '>Upload Image</label>
    <div className=''>
<h1>Results</h1>
    {
      Results.length !==0&&
      Results.map(elm=>{
        return elm.label
      })
    }
    </div>

  </>
)
}
   

export default App
