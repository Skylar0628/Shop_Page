import React from 'react';

const FeetBack = ({ FeedbackList }) => {
  return (
    <div id="feedbackCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {FeedbackList.map((item, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className='row justify-content-center py-7 g-2'>
              <div className='col-md-8 d-flex'
                style={{
                  height: '150px',
                  alignItems: 'center',
                }}
              >
                <img src={item.img} alt='' className='rounded-circle me-5'
                  style={{
                    width: '120px',
                    height: '120px',
                    objectFit: 'cover',
                  }}
                />
                <div className='d-flex flex-column'>
                  <p className='h5'>"{item.text}"</p>
                  <p className='mt-auto text-muted'>{item.name}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#feedbackCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#feedbackCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};

export default FeetBack;
