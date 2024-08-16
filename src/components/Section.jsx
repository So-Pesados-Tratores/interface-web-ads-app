import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";
import { MoonLoader } from "react-spinners";

const Section = ({ title, bgColor, productItems, isLoading }) => {
  
  if(isLoading){
    return (
      <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh'
      }}
      >
        <MoonLoader />
      </div>
    )
  }

  const renderBody = () => {
    if(!productItems.length && !isLoading) {
      return (
        <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 300,
        }}
        >
          <h2>Nenhum produto encontrado no momento</h2>
        </div>
      )
    }

    return (
        <Row className="justify-content-center">
          {productItems.map((productItem) => {
            return (
              <ProductCard
                key={productItem.tractor_id}
                title={title}
                productItem={productItem}
              />
            );
          })}
        </Row>
    )
  }

  return (
    <section style={{ background: bgColor, minHeight: '80vh' }}>
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        {renderBody()}
      </Container>
    </section>
  );
};

export default Section;
