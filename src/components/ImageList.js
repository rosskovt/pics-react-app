import ImageShow from "./ImageShow";
import './ImageList.css';

function ImageList({ images }) {
    console.log(images);
    return (
        <div className="image-list">
            {images.map((image) => {
                return <ImageShow key={image.id} singleImage={image} />
            })}
        </div>
    )
}

export default ImageList;