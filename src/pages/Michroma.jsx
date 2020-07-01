/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import Header from "components/MaterialKit/Header/Header.js";
import HeaderLinks from "components/MaterialKit/Header/HeaderLinks.js";
import Parallax from "components/MaterialKit/Parallax/Parallax.js";
import Footer from "components/MaterialKit/Footer/Footer.js";
import GridContainer from "components/MaterialKit/Grid/GridContainer.js";
import GridItem from "components/MaterialKit/Grid/GridItem.js";
import Button from "components/MaterialKit/CustomButtons/Button.js";
// sections for this page
import SectionDescription from "./Michroma/SectionDescription.js";
import SectionComponents from "./Michroma/SectionComponents.js";
import SectionCards from "./Michroma/SectionCards.js";
import SectionContent from "./Michroma/SectionContent.js";
import SectionSections from "./Michroma/SectionSections.js";
import SectionExamples from "./Michroma/SectionExamples.js";
import SectionFreeDemo from "./Michroma/SectionFreeDemo.js";
import SectionOverview from "./Michroma/SectionOverview.js";
import SectionPricing from "./Michroma/SectionPricing.js";

import presentationStyle from "assets/jss/material-kit-pro-react/views/presentationStyle.js";

const useStyles = makeStyles(presentationStyle);

export default function Michroma() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Header
        brand="Material Kit PRO React"
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "info",
        }}
      />
      <Parallax
        image={require("assets/img/bg4.jpg")}
        className={classes.parallax}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1>
                  Material Kit React
                  <span className={classes.proBadge}>PRO</span>
                </h1>
                <h3 className={classes.title}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionDescription />
        <SectionComponents />
        <SectionCards />
        <SectionContent />
        <SectionSections />
        <SectionExamples />
        <SectionFreeDemo />
        <SectionOverview />
      </div>
      <SectionPricing />
      <Footer
        theme="white"
        content={
          <div>
            <div className={classes.left}>
              <a
                href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-presentation"
                target="_blank"
                className={classes.footerBrand}
              >
                Material Kit PRO React
              </a>
            </div>
            <div className={classes.pullCenter}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-presentation"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.rightLinks}>
              <ul>
                <li>
                  <Button
                    href="https://twitter.com/CreativeTim?ref=creativetim"
                    target="_blank"
                    color="twitter"
                    justIcon
                    simple
                  >
                    <i className="fab fa-twitter" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://dribbble.com/creativetim?ref=creativetim"
                    target="_blank"
                    color="dribbble"
                    justIcon
                    simple
                  >
                    <i className="fab fa-dribbble" />
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://instagram.com/CreativeTimOfficial?ref=creativetim"
                    target="_blank"
                    color="instagram"
                    justIcon
                    simple
                  >
                    <i className="fab fa-instagram" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        }
      />
    </div>
  );
}
