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
import {Helmet} from "react-helmet"
import { FacebookShareCount, FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon } from "react-share";

// import "./style.css"
// import logo from '../../media/logo.png'
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function WebdevDetails(props) {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

  const Client = Prismic.client(apiEndpoint, { accessToken });

  const [doc, setDocData] = React.useState(null);
  const [shareUrl, setShareUrl] = React.useState(null);

  React.useEffect(() => {
    // let id = Object.values(this.props.match.params);
    let param = props.match.params.works;
    // console.log(props.match.params.post)
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("my.works.uid", param)
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
        
      <div className="work-post-page">
        <div className="back-link">
          <Link to="/portfolio"><FontAwesomeIcon className="icon-margin" icon={faChevronLeft}></FontAwesomeIcon>back</Link>
        </div>
        {doc ? (
          <div className="blog-content">
               <Helmet>
                <meta charSet="utf-8" />
                <title>{RichText.asText(doc.data.work_title)}</title>
           
                {/* <meta name="description" content={doc.data.short_description[0].text} charSet="utf-8" /> */}
                <link rel="canonical" href={shareUrl} />
            </Helmet>
            {/* <div className="off-image-container">
                              <img
                                className="works-image img-responsive"
                                src={doc.data.blog_image.url}
                              />
                            </div> */}
            <h1 className="blog-title">{RichText.asText(doc.data.work_title)}</h1>
            {doc.data.site_link.url ? <a target="_blank" rel="noopenner" href={doc.data.site_link.url}><button>GO TO SITE</button></a> : <button>LINK COMING SOON</button> }
            <i><p className="blog-subtitle">{RichText.asText(doc.data.work_subtitle)}</p></i>
            <RichText
              className="modal-description"
              render={doc.data.work_description}
              linkResolver={linkResolver}
            />
            {/* <p >{thisModal.description}</p> */}
            <div className="image-grid">
            {/* <div 
              className="works-description-img-1"
              alt="cover"
              style={{backgroundImage:`url(${doc.data.grid_img_1.url})`}}
              />
          {doc.data.grid_img_2.url && <div 
              className="works-description-img-2"
              alt="cover"
              style={{backgroundImage:`url(${doc.data.grid_img_2.url})`}}
              />}
              </div> */}
            <img
              className="works-description-img-1"
              alt="cover"
              src={doc.data.grid_img_1.url}
              />
          {doc.data.grid_img_2.url && <img 
              className="works-description-img-2"
              alt="cover"
              src={doc.data.grid_img_2.url}
              />}
              </div>
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
        <div className="share-block">
        {/* <div className="share-btns"> */}
              {/* <FacebookShareButton url={shareUrl}> */}
              {/* <FacebookIcon size={32} round={true}></FacebookIcon> */}
              {/* <img className="social-share-icon" src={fbGrey}/> */}
              {/* </FacebookShareButton> */}
          {/* <TwitterShareButton url={shareUrl}><img className="social-share-icon" src={twitGrey}/></TwitterShareButton> */}
          {/* <LinkedinShareButton url={shareUrl}> */}
              {/* <LinkedinIcon size={32} round={true}> */}
              {/* <img className="social-share-icon" src={linkedGrey}/> */}
             {/* </LinkedinShareButton> */}
        {/* </div> */}
        {/* <p>Share</p> */}
      {/* </div> */}
        </div>
      </div>
    </div>
  );
}
