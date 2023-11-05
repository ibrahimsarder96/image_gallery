import { useEffect, useState } from "react";
import Images from "./Images";

const AllImages = () => {
  const images = [
    { id: 1, thumbnail: "/assets/images/image-1.webp"},
    { id: 2, thumbnail: "/images/assets/image-2.webp" },
    { id: 3, thumbnail: "/images/assets/image-3.webp" },
    { id: 4, thumbnail: "/images/assets/image-4.webp" },
    { id: 5, thumbnail: "/images/assets/image-5.webp" },
    { id: 6, thumbnail: "/images/assets/image-6.webp" },
    { id: 7, thumbnail: "/images/assets/image-7.webp" },
    { id: 8, thumbnail: "/images/assets/image-8.webp" },
    { id: 9, thumbnail: "/images/assets/image-9.webp" },
    { id: 10, thumbnail: "/images/assets/image-10.jpeg" },
    { id: 11, thumbnail: "/images/assets/image-11.jpeg" },
  ];
  // const [images, setImages] = useState([]);
  // useEffect(() =>
  //   fetch('data/images')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  //   ,[])
  return (
    <div>
      {console.log(images.length)}
      {images.map(image => <Images
      key={image.id}
      thumbnail={image.thumbnail}
      ></Images>)}
    </div>
  );
};

export default AllImages;