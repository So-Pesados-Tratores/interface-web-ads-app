import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { IImage } from "../../../interfaces/IImage";
import { Container, ImgModal, FaTimesStyled } from "./styles";

interface IProps {
  images: IImage[];
}

export default function ImageSlider({ images }: IProps) {
  const [modalActiveIndex, setModalActiveIndex] = useState<number | null>(null);

  function handleAdvanceModalActiveImage() {
    if (modalActiveIndex == images.length - 1) {
      setModalActiveIndex(0);
    } else {
      setModalActiveIndex(modalActiveIndex + 1);
    }
  }

  function handleRegressModalActiveImage() {
    if (modalActiveIndex == 0) {
      setModalActiveIndex(images.length - 1);
    } else {
      setModalActiveIndex(modalActiveIndex - 1);
    }
  }

  return (
    <Container>
      {modalActiveIndex !== null && (
        <ImgModal data-testid="img-modal-container">
          <figure>
            <button
              type="button"
              data-testid="close-img-modal-button"
              onClick={() => setModalActiveIndex(null)}
              className="close"
            >
              <FaTimesStyled />
            </button>

            <img
              src={images[modalActiveIndex].url}
              alt="imagem"
              data-testid="modal-img"
            />

            <button
              type="button"
              className="left"
              data-testid="left-modal-button"
              onClick={handleRegressModalActiveImage}
            >
              <AiOutlineLeft size="2rem" color="#111" />
            </button>

            <button
              type="button"
              className="right"
              data-testid="right-modal-button"
              onClick={handleAdvanceModalActiveImage}
            >
              <AiOutlineRight size="2rem" color="#111" />
            </button>
          </figure>
        </ImgModal>
      )}

      <div className="img-container">
        <Carousel
          className="carousel"
          autoPlay={true}
          stopOnHover={true}
          infiniteLoop={true}
          interval={5000}
          emulateTouch={true}
        >
          {images.length > 0
            ? //? images.map( (image, index) => <img src={image.url} key={index} />)
              //: testImages.map((image, index) => <img src={image.url} key={index} />)
              images.map((image, index) => (
                <button
                  type="button"
                  key={image.id || index} // Usar index como fallback se id não estiver disponível
                  onClick={() => setModalActiveIndex(index)}
                >
                  <img
                    src={image.url} // Usar diretamente a URL da imagem
                    alt={`Imagem ${index + 1}`}
                    data-testid="slider-img"
                  />
                </button>
              ))
            : [1].map((i) => (
                <img
                  src="/images/img-n-disp.png"
                  key={i}
                  data-testid="no-slider-img"
                />
              ))}
        </Carousel>
      </div>
    </Container>
  );
}
