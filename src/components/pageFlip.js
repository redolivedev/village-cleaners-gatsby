import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import ScrollableAnchor from "react-scrollable-anchor";

export default function pageFlip({ content, num }) {
  return (
    <ScrollableAnchor id={`sec${num}`} className="section">
      <BackgroundImage
        fluid={content.page_image.localFile.childImageSharp.fluid}
      >
        <div className="whitebg">
          <div
            className="title"
            dangerouslySetInnerHTML={{ __html: content.page_title }}
          />
          <div className="content">
            <div className="max-width">
              <Fade>
                <div
                  dangerouslySetInnerHTML={{
                    __html: content.page_description
                  }}
                />
              </Fade>
              <Fade left>
                <Link to={content.page_link} className="btn">
                  <span>LEARN MORE</span>
                </Link>
              </Fade>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </ScrollableAnchor>
  );
}
