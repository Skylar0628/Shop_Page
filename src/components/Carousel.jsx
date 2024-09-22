import React from 'react';
import { CarouselList } from '../DataList/CarouselList';

const Carousel = () => {
  return (
    <div style={{ height: '100%', overflow: 'hidden' }} id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner" style={{ height: '100%' }}>
        {CarouselList.map((item, index) => (
          <div
            className={`carousel-item ${index === 0 ? 'active' : ''}`} 
            key={index}
          >
            <img
              src={item.img}
              className="d-block w-100"
              alt="banner-img"
              style={{
                objectFit: 'cover',      
                width: '100%',          
                height: 'auto',          
              }}
            />
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
