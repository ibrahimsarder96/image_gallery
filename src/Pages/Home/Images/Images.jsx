import "./Images.css";
const Images = ({image, index}) => {
   console.log(image);
  return (
    <div className="">
      <img src={image} alt={index+1} />
    </div>
  );
};

export default Images;