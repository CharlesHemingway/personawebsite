import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const ClassesCard = ({ classcard }) => {
  const { img, alt, title, subtitle, herf, target } = classcard;
  return (
    <Card className="card-lift--hover shadow border-0"
     style={{marginTop:"2rem"}}>
      <CardImg top width="70%" src={img} alt={alt} />
      <CardBody className="py-5">        
        <CardTitle>
            <h6 
            className="text-success text-uppercase" 
            style={{
                fontWeight:'400'
                   }}>
                {title} 
            </h6>
            </CardTitle>
        <CardSubtitle>
            <p className="description mt-3">
                {subtitle}</p>
        </CardSubtitle>
        <Button 
        color="success" 
        className="mt-4" 
        href={herf}
        target={target}
        outline
        >
          Link
        </Button>
      </CardBody>
    </Card>
  );
};
export default ClassesCard;