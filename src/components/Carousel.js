import Carousel from "react-bootstrap/Carousel";

function CarouselFadeExample({ imagenes }) {
  return (
    <Carousel fade>
      {imagenes.map((el) => (
        <Carousel.Item>
          <img className="d-block w-100" src={el} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
