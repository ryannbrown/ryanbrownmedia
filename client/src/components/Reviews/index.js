import React, { Component } from "react";
import Slider from "react-slick";
import "./style.css"

export default class Reviews extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2
    };
    return (
      <div>
        <h2>What my clients are saying...</h2>
        <p className="mobile-only">Swipe for more</p>
        <Slider {...settings}>
          <div className="slider">
            <p>"Ryan jumped right in and helped us knock out a TON of webflow deliverables for various web projects. Really appreciate how he adapted to our current systems of Monday.com (project management) and Slack (for communications).

A great communicator and excellent quality work.

Will definitely reach back out in the future. Thank you!"</p>
<p>-Jon</p>
          </div>
          <div>
            <p>"A fantastic job. I would highly recommend Ryan if you need a high quality website built on a deadline."</p>
            <p>-Ian</p>
          </div>
          <div>
            <p>"Ryan was a pleasure to work with. He has great communication skills and was very transparent about timelines. He was able to deliver on the intended project scope within a reasonable time frame... We would highly recommend him for his great communication and timely work."</p>
<p>-Emee</p>
          </div>
          <div>
            <p>"Ryan is great!
Highly professional, communicative, and punctual.
We will definitely continue to use Ryan's services."</p>
<p>-Lior (Openbase)</p>
          </div>
          <div>
            <p>"Excellent freelancer. Ryan was fast, honest and easy to coimmunicate with. He asked for feedback and approval before making big changes. Project was completed successfully and exceeded our expectations. We would gladly hire Ryan again for new projects."</p>
            <p>-Rob</p>
          </div>
          <div>
            <p>"Ryan was super easy to work with and very knowledgeable. We had a task that we had been struggling to fix for hours had talked to a few different companies and no one could help us. Ryan was able to diagnose and fix our coding issue very quickly, helping to optimize our website for mobile viewing. We would highly recommend Ryan to anyone needing help with their website."</p>
            <p>-Oren International</p>
          </div>
          <div>
            <p>"Ryan was extremely helpful. Quick communication and high quality work with efficiency. He went above and beyond to help us reach our goal.
10/10 will hire again - Thanks Ryan!"</p>
<p>- Zane + Emily</p>
          </div>
          <div>
            <p>"Ryan is awesome! He is friendly, accommodating and very knowledgeable. He went above and beyond to make sure that every single aspect of this job was perfect. I HIGHLY recommend him!"</p>
            <p>-Nicole</p>
          </div>
          <div>
            <p>"Ryan was very easy to work with, his work was great! He was honest and fair with me right from the get go. Each time I reached out and asked for a change or tweak on the work he responded quickly."</p>
            <p>-Quinn</p>
          </div>
        </Slider>
      </div>
    );
  }
}