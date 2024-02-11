import React, { useState, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from './data';
import "primereact/resources/themes/lara-light-cyan/theme.css";


export default function Gallery() {
    const [images, setImages] = useState(null);
    
    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    };

    return (
        <div className="card">
            <Galleria value={images} style={{ maxWidth: '640px' }} changeItemOnIndicatorHover showThumbnails={false} showIndicators item={itemTemplate} />
        </div>
    )
}
        