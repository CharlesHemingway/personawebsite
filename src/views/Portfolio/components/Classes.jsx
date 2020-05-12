import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import ClassCard from "./ClassesCard";

import imgCard1 from "../../../assets/img/brand/getgee.png";
import imgCard2 from "../../../assets/img/brand/mustread.png";
import imgCard3 from "../../../assets/img/brand/chezmadani.png";
import imgCard4 from "../../../assets/img/brand/inglesapp.png";
import imgCard5 from "../../../assets/img/brand/refugeesglobal.png";

const classes = [
  {
    id: 1,
    category: ["websites"],
    img: imgCard1,
    alt: "the universal database",
    title: "Getgee",
    subtitle: "Startup SPA",
    herf: "http://getgee.xyz/",
    target:"_blank"
  },
  {
    id: 2,
    category: ["websites"],
    img: imgCard2,
    alt: "mustread ideas, books, and apps",
    title: "MustRead Inc",
    subtitle: "eCommerce",
    herf: "mustreadbooks.press",
    target:"_blank"
  },
  {
    id: 3,
    category: ["websites"],
    img: imgCard3,
    alt: "blah blah",
    title: "Chez Madani",
    subtitle: "Travel Booking",
    herf: "http://chezmadani.weebly.com/",
    target:"_blank"
  },
  {
    id: 4,
    category: ["apps"],
    img: imgCard4,
    alt: "blah blah",
    title: "Ingles App",
    subtitle: "Education Software",
    herf: "http://inglesapp.surge.sh/",
    target:"_blank"
  },
  {
    id: 5,
    category: ["apps"],
    img: imgCard5,
    alt: "blah blah",
    title: "Refugees Global",
    subtitle: "Humanitarian Project",
    herf: "http://refugeesglobal-demo.surge.sh/",
    target:"_blank"
   }
  
];

const itemCategories = [
  "all",
  "websites",
  "apps",
];

class Classes extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: classes });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="position-relative" >
       
          
          <section className="section section-sm">
                  <h1 
                    className="lead text-dark"
                    style={{
                    fontSize:"3em",
                    fontWeight: "400"
                        }}>  
                         Recent Work <span className="text-success">.</span>
                   </h1>
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "badge-success" : "success"}
                onClick={() => this.setState({ category: badge })}
                pill
                className="mr-1"
              >
                {badge}
              </Badge>
            ))}

         <Container>
            <Row className="align-items-center justify-content-center">
              
              <CardColumns>
                  
                {category !== "all"
                  ? cards.map(classcard => {
                      return classcard.category.map(catItem => {
                        return catItem === category ? (
                          <ClassCard key={classcard.id} classcard={classcard} />
                        ) : null;
                      });
                    })
                  : cards.map(classcard => (
                      <ClassCard key={classcard.id} classcard={classcard} />
                    ))}
              </CardColumns>
            
            </Row>
            </Container>
          </section>
         
      </div>
    );
  }
}

export default Classes;