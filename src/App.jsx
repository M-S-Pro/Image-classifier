import { useState } from 'react'
import './App.css'
   function App() {
  const [Image,setImage]=useState("")
  let Ref =useRef()
let imageClassifier ;  
  useEffect(() => {
     imageClassifier = ml5.imageClassifier('MobileNet', () => {
      console.log('Model Loaded!');
    });
classifyImage()
 
  }, [Image])
  const classifyImage = () => {
      imageClassifier.predict(Ref.current, (err, results) => {
        if (err) {
          console.error(err);
        } else {
          console.log(results);
      }
    });

 
  };

return(
  <>
<main className='w-[300px] h-[300px] bg-black object-contain'>
        <img src={Image} ref={Ref} alt="image" className='w-full h-full ' />
    </main>
    <input type="file" name="" id="Image" onChange={(e)=>{
        let ImageURl  = URL.createObjectURL(e.target.files[0])
        setImage(ImageURl)
        classifyImage(e.target.files[0])
      }
        } hidden/>
    <label htmlFor="Image" className=' p-2 cursor-pointer '>Upload Image</label>

  </>
)
}
   

export default App
