import React, { Component, useState } from "react";
// import logo from './logo.svg';
import "./style.css";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import {Link} from "react-router-dom"
import fbGrey from "../../media/fb-grey.png"
import twitGrey from "../../media/twitter-grey.png"
import linkedGrey from "../../media/linked-grey.png"
import linkResolver from "../../utils/linkResolver";
import waveImg from "../../media/wave-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import ClipLoader from "react-spinners/ClipLoader";
import forestImg from "../../media/forest.jpg";
import {Helmet} from "react-helmet"
import { FacebookShareCount, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from "react-share";
var Moment = require("moment");

// import "./style.css"
// import logo from '../../media/logo.png'
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function BlogPost(props) {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

  const Client = Prismic.client(apiEndpoint, { accessToken });

  const [doc, setDocData] = React.useState(null);
  const [shareUrl, setShareUrl] = React.useState(null);

  React.useEffect(() => {
    // let id = Object.values(this.props.match.params);
    let param = props.match.params.post;
    // console.log(props.match.params.post)
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at('document.type', 'now'),
      );
      if (response) {
        setDocData(response.results[0]);
        console.log(response.results);
      }
    };
    fetchData();
    const fetchPlugins = () => {
      const script = document.createElement("script");

      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v9.0&appId=668236647227571&autoLogAppEvents=1";
      script.async = true;
      var url = 'https://unbreakable.herokuapp.com/' + window.location.pathname;
      console.log("url", url);
      setShareUrl(url);

      document.body.appendChild(script);
    };
    fetchPlugins();
  }, []);

  return (
    <div>
           <div
        className="blog-blue-block"
        style={{
          backgroundImage: `url(${forestImg})`,
          // backgroundColor: `#21605c`,
          // opacity: `100%`,
          backgroundBlendMode: `multiply`,
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          // backgroundAttachment: `fixed`,
          // height: `${this.props.height}`,
          height: `15vh`,
          width: "100%",
          color: "white",
          display: `flex`,
          flexDirection: "column",
          alignItems: `center`,
          justifyContent: "center",
          position: `relative`,
          
        }}
      >
           {/* <p>now</p> */}
      </div>
      <div className="blog-post-page now-page">
   
        {doc ? (
          <div className="blog-content">
               <Helmet>
                <meta charSet="utf-8" />
                <title>{RichText.asText(doc.data.now_title)}</title>
                {/* <meta name="description" content={doc.data.short_description[0].text} charSet="utf-8" /> */}
                <link rel="canonical" href={shareUrl} />
            </Helmet>
            {/* <div className="off-image-container">
                              <img
                                className="works-image img-responsive"
                                src={doc.data.blog_image.url}
                              />
                            </div> */}
            <h1 className="blog-title">{RichText.asText(doc.data.now_title)}</h1>
            <p>Enjoy an update on the life of Ryan Brown as of {Moment(doc.last_publication_date).format("MMMM DD, YYYY")}</p>
            <RichText
              className="modal-description"
              render={doc.data.now_content}
              linkResolver={linkResolver}
            />
            {/* <p >{thisModal.description}</p> */}
          </div>
        ) : (
          <div className="loading-block">
          <ClipLoader
          // css={override}
          size={35}
          color={"#21605c"}
          // loading={this.state.loading}
        />
        </div>
        )}
  
      </div>
    </div>
  );
}
