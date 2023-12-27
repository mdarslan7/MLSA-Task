/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/computer.jpg";

const imageAltText = "laptop on desk";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Tindog",
    description:
      "A simple website design for a tinder like app, but for dogs.",
    url: "https://mdarslan7.github.io/Tindog/",
  },
  {
    title: "CSS My Site",
    description:
      "A simple portfolio website that I made while learning web dev from Dr. Angela Yu.",
    url: "https://mdarslan7.github.io/CSS-My-Site/",
  },
  {
    title: "Naval Ravikant Tribute",
    description:
      "This website is dedicated to Naval Ravikant, an angel investor, entrepreneur and philosoper.",
    url: "https://mdarslan7.github.io/Naval-Ravikant-Tribute/",
  },
  {
    title: "Unit Converter V2",
    description:
      "A Unit Convertor that I made as a solo project while learning Frontend Dev from @Scrimba",
    url: "https://mdarslan7.github.io/Unit-Convertor-V2/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
