import React from 'react';

const Extrasec1 = () => {
    return (
        
            <div class="carousel w-full mb-10 rounded-3xl">
  <div id="slide1" class="carousel-item relative w-full">
    <img className="d-block w-100 img-fluid" src="https://wallpaperaccess.com/full/377802.jpg"  />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img className="d-block w-100 img-fluid" src="https://www.motortrend.com/uploads/sites/5/2021/04/2022-BMW-M3-Competition-AWD-12.jpg"  />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img className="d-block w-100 img-fluid" src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Porsche_911_elektrisch_elektro_3.jpg"  />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
        
    );
};

export default Extrasec1;