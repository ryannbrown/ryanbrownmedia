import React, { Component } from "react";
// import Navigation from "../../components/Navigation";
import "./style.css";
// import logo from "../../media/moons.png";
// import blueLogo from "../../media/bluemoons.png";
import portrait from "../../media/forest.jpg";
import worldMap from "../../media/worldmap.png"
import Nav from "../../components/Nav";

export default class About extends Component {
  constructor(props) {
    super(props);

    this.listener = null;
    this.state = {
      status: "top",
      showModal: false,
      story: '',
      forms: [],
    };
  }

  fetchPosts() {}

runThing = (e)  => {
    console.log('run it!')
    let story = e.target.getAttribute('value');
    this.setState({story})

  }
storyGuide = (e)  => {
    console.log('run it!')
    let story = e.target.getAttribute('value');
    this.setState({story: 'Significant moments in my life told by a map..'})

  }

  componentDidMount() {}

  render() {
    return (
      <div className="about-page">
        {/* <Nav></Nav> */}
        <div className="about-content">
          <div className="white-block">
            <div className="img-container">
              <div
                className="about-img"
                style={{
                  backgroundImage: `linear-gradient(to top, transparent 100%, #ffffff ),url(${portrait})`,
                  // backgroundColor: `#FF8686`,
                  // opacity: `90%`,
                  // backgroundBlendMode: `lighten`,
                  backgroundPosition: `center center`,
                  // backgroundPositionY: "30%",
                  position: `absolute`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "50vh",
                  width: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="pink-block">
            {/* <div className="narrow">
      
            </div> */}
            <div className="about">
              <h1>Web Developer | Traveler</h1>
              <p>
               Hey! My name is Ryan. 
                I build websites for cool people and small businesses. 
                I have an awesome wife, and a sweet little baby girl named Haven. 
                Traveling is something I try to do as often as I can. Lately I have been exploring
                new places and things, and I'm excited for this to be a place I can document things I learn from life
                as well as from business.
              </p>
              <div>
                <p className="story-block"><i>Significant moments in my life told by a map..</i></p>
                <div className="map" style={{backgroundImage:`url(${worldMap})`,
    backgroundSize: 'cover',
    margin: '50px auto'}}>
      <i value="Juneau, Alaska. The most at home I've ever felt." onClick={this.runThing} className="juneau lni lni-map-marker"></i>
      {/* <i className="colombia lni lni-map-marker"></i> */}
      <i value="Vilcabamba, Ecuador. One of those places you never forget. Also there was a great futon." onClick={this.runThing}  className="vilcabamba lni lni-map-marker"></i>

      <i value="Somewhere, Colorado. The first time I met Grandmother Ayahuasca, and oh it was a time." onClick={this.runThing}  className="colorado lni lni-map-marker"></i>
      <i value="Zambia, Africa. A place where my lover and I almost got stepped on by an elephant as we were hammocking." onClick={this.runThing}  className="zambia lni lni-map-marker"></i>
      <i value="Budapest. It was here that cities became cool to me." onClick={this.runThing}  className="budapest lni lni-map-marker"></i>
      <i value="Chiang Mai, Thailand. The place I proposed to the love of my life!" onClick={this.runThing}  className="thailand lni lni-map-marker"></i>
      <i value="Raleigh, NC. Current place of dwelling." onClick={this.runThing}  className="lni lni-home"></i>
    </div>
    <p className="story-block">{this.state.story}</p>
              </div>
            </div>
          </div>
          <div className="white-block">
            <div className="about-contact">
              <h1>No matter where I am, I'm always just a click away!</h1>
              <p>
                Email me at{" "}
                <a href="ryanbrownmedia@gmail.com">
                  ryanbrownmedia@gmail.com
                </a>
                {/* Contact me anytime, just fill out the   
                <a href="/connect"> Connect Form
                </a> */}
              </p>
              <p>
                Follow me on:
                <a href="http://instagram.com/theunendingwonder"> @instagram</a>
                {/* <a href="https://www.facebook.com/milliegrace22"> @facebook</a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
