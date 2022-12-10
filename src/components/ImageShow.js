function ImageShow({ singleImage }) {
    return (
        <div>
            <img src={singleImage.urls.small} alt={singleImage.alt_description}></img>
        </div>
    )
}

export default ImageShow;