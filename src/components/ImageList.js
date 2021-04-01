import React from 'react';
import ImageCard from './ImageCard';
import "./ImageList.css";

const ImageList = (props) => {
    let images = null;
    if(props.images.length > 0) {
        images = props.images.map(image => <ImageCard key={image.id} image={image} />);
    }
    return ( 
        <div>
            <div className='image-list'>
                {images}
            </div>
        </div>
     );
}
 
export default ImageList;