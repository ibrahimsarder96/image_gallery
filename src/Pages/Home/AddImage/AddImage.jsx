import { useState } from "react";
import Images from "../Images/Images";
import "./AddImage.css";

const AddImage = () => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesArray = selectedFilesArray.map(file => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imagesArray);
    console.log(selectedFilesArray);
  }

  return (
    <section className="card h-8/4 justify-center items-center" >
     <div className="card w-8/12 bg-white shadow-2xl">
     <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <p className="text-2xl text-red-400">Delete</p>
      </div>
      <div className="my-3">
      <hr />
      </div>
        <div className="img_card">
      {selectedImages &&
        selectedImages.map((image, index )=> (
          <Images
          image={image}
          key={index}
          ></Images>)
        //  return(<div key={index} className="image">
        //       <img src={image} alt="image"/>
        //  </div>) 
        )
      }
      <label >
      Add Images
      <br/>
      <input type="file" name="images" onChange={onSelectFile} multiple accept="image/png, image/jpeg, image/webp"/>
    </label>
    </div>
     </div>
  
    </section>
  );
};

export default AddImage;