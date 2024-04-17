
import './All.css'
const Banner = () => {
    return (
        <div>
          <div className="carousel ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/careful-progress-group-mountaineers-mountainous-terrain_148840-48607.jpg?w=900" className="w-full banner-img" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/photo-real-backpacker-overlooking-machu-picchu-backpack-traveling-theme-full-depth-field_980716-97931.jpg?w=360" className="w-full banner-img" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/safari-expedition-tracking-big-game-generative-ai_893610-6874.jpg?w=900" className="w-full banner-img" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://img.freepik.com/premium-photo/mesmerizing-shot-aurora-borealis-night-sky-captured-norway_198067-153919.jpg?w=900" className="w-full banner-img" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>  
        </div>
    );
};

export default Banner;
