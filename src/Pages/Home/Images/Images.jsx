import "./Images.css";
const Images = ({image, index, thumbnail}) => {
   console.log(image);
  return (
    <div className="img_bg">
    
      <img src={thumbnail} alt={index+1} />
    </div>
  );
};

export default Images;