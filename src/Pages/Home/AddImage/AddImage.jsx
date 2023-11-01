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
    <section>
        <div className="img_card">
      {selectedImages &&
        selectedImages.map((image, index )=> {
          // <Images
          // image={image}
          // key={index}
          // ></Images>
         return(<div key={index} className="image">
              <img src={image} alt="image" height="30px"/>
         </div>) 
        })
      }
    </div>
    <label >
      Add Images
      <br/>
      <input type="file" name="images" onChange={onSelectFile} multiple accept="image/png, image/jpeg, image/webp"/>
    </label>
    </section>
  );
};

export default AddImage;