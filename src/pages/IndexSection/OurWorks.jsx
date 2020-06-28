import React from "react";
import { Container } from "reactstrap";
import IsometricGrid, { Cell } from "react-isometric-grid";
import dynamics from "dynamics.js";

const OurWorks = ({ setRef }) => {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div
      className="section features-7"
      style={{ minHeight: "100vh", marginTop: "125px" }}
      ref={setRef}
    >
      <Container>
        <IsometricGrid
          shadow
          transform="rotateX(45deg) rotateZ(45deg)"
          stackItemsAnimation={{
            properties: function (pos) {
              return {
                translateZ: (pos + 1) * 30,
                rotateZ: getRandomInt(-40, -50),
              };
            },
            options: function (pos, itemstotal) {
              return {
                type: dynamics.easeIn,
                duration: 700,
                points: [
                  { x: 0, y: 0, cp: [{ x: 0.2, y: 1 }] },
                  { x: 1, y: 1, cp: [{ x: 0.3, y: 1 }] },
                  { x: 3, y: 1, cp: [{ x: 0.9, y: 2 }] },
                ],
                delay: (itemstotal - pos - 1) * 40,
              };
            },
          }}
          style={{ height: "800px", width: "900px" }}
        >
          <Cell
            layers={[
              "https://demos.creative-tim.com/paper-kit-pro-react/static/media/pricing-card.105f38e3.JPG",
              "#15ce89",
              "#15ce89",
              "#15ce89",
            ]}
          />
          <Cell
            className="hidden"
            layers={[
              "https://demos.creative-tim.com/paper-kit-pro-react/static/media/twitter-card.946883a5.JPG",
              "#15ce89",
              "#15ce89",
              "#15ce89",
            ]}
          />
          <Cell
            layers={[
              "https://demos.creative-tim.com/paper-kit-pro-react/static/media/team-card.35357561.JPG",
              "#15ce89",
              "#15ce89",
              "#15ce89",
            ]}
          />
          <Cell
            layers={[
              "https://demos.creative-tim.com/paper-kit-pro-react/static/media/blog-card.58808458.JPG",
              "#15ce89",
              "#15ce89",
              "#15ce89",
            ]}
          />
        </IsometricGrid>
      </Container>
    </div>
  );
};

export default OurWorks;
