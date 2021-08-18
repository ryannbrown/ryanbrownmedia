import React, { Component, useState } from "react";
import "../../App.css"
import "./style.css";
import Prismic from "prismic-javascript";
// import { Date, Link, RichText } from "prismic-reactjs";
import linkResolver from "../../utils/linkResolver";
// import logo from '../../media/logo.png'
import { Link } from "react-router-dom";
import Test from "../../components/Test";
import Nav from "../../components/Nav";
import forestImg from "../../media/forest.jpg";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
var Moment = require("moment");

require("dotenv").config();
const { REACT_APP_PRISMIC_API, REACT_APP_PRISMIC_TOKEN } = process.env;

export default function Webdev() {
  const apiEndpoint = REACT_APP_PRISMIC_API;
  const accessToken = REACT_APP_PRISMIC_TOKEN;

  // This is where you would add your access token for a Private repository

  var Client = Prismic.client(apiEndpoint, { accessToken });
  var d = new Date();
  const nowMonth = d.getMonth();
  const nowYear = d.getYear();

  const [doc, setDocData] = React.useState(null);
  const [dates, setDate] = React.useState(null);
  const [year, setDateYear] = React.useState(nowYear);
  const [month, setDateMonth] = React.useState(nowMonth);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "works"),
        // { orderings: "[my.blog.post_date desc]" }
      );
      if (response) {
        setDocData(response.results);
        console.log(response.results);
      }
    };
    fetchData();
    // fetchDates()
  }, []);


const queryByDate = (e) => {
  e.preventDefault();
  console.log("month", typeof(month))
  console.log("year", typeof(year))

  const fetchDates = async (month, year) => {
    const response = await Client.query([
      Prismic.Predicates.month('my.blog.post_date', month),
      Prismic.Predicates.year('my.blog.post_date', year)
    ]);
    if (response) {
      setDocData(response.results);
      console.log("response", response.results);
    }
  }
  fetchDates(month, year);
}


const setYear = (e) => {
  let theYear = e.target.value
  console.log(theYear)
  setDateYear(theYear)
  // console.log(e.target.value)
}
const setMonth = (e) => {
  let theMonth = e.target.value
  console.log(theMonth)
  setDateMonth(theMonth)
  // console.log(e.target.value)
}

const resetSearch = () => {

  setDateYear(nowYear)
  setDateMonth(nowMonth)
  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.at("document.type", "blog"),
      { orderings: "[my.blog.post_date desc]" }
    );
    if (response) {
      setDocData(response.results);
      console.log(response.results);
    }
  };
  fetchData();
}


var now = Moment();
// console.log(now);
let thisYear = Moment(now).format("YYYY")
let thisMonth = Moment(now).format("MMMM")
let allYears = [thisYear];
let allMonths = [thisMonth];
// to be changed when blog has run longer
for (var i = 1; i <=1; i++) {
  allYears.push(Moment(now).subtract(i, 'years').format("YYYY"));
}
for (var i = 1; i <=11; i++) {
  allMonths.push(Moment(now).subtract(i, 'months').format("MMMM"));
}
console.log("all months", allMonths)
console.log("all years", allYears)

// const someYears = ["2021","2020", "2019"]
// const monthsOfYear= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  if (doc) {
    // var grid = doc.map(
    //   (post) => (
    //     <li className="work">
   
    //       <Link to={`/webdev/${post.uid}`}>
    //         <div className="work-description">
    //         <p className="work-title">{post.data.work_title[0].text}</p>
    //         <p className="work-subtitle">{post.data.work_subtitle[0].text}</p> 
    //         </div>
 
    //         <img loading="lazy"
    //           className="blog-img"
    //           alt="cover"
    //           src={post.data.work_main_img.url}
    //           />
    //       </Link>
    //       {/* <p>{post.data.date}</p> */}
    //       {/* <p>{post.data.work_description[0].text}</p> */}
    //     </li>
    //   )
    //   // <div>post</div>
    //   // <h1>{RichText.asText(doc.data.title)}</h1>
    // );
    var data = doc.map(
      (post) => (
        <div className="job-post">
          <div className="col-left">
          <img loading="lazy"
              className="job-img"
              alt="cover"
              src={post.data.work_main_img.url}
              />
          </div>
          <div className="col-right">
          {/* <Link to={`/webdev/${post.uid}`}> */}
            <div className="work-description">
            <p className="work-title">{post.data.work_title[0].text}</p>
            <p className="work-subtitle">{post.data.work_subtitle[0].text}</p> 
            <Link className="thebtn" to={`/portfolio/${post.uid}`}>Explore</Link>
            </div>
 
         
          {/* </Link> */}
          </div>
   
          {/* <p>{post.data.date}</p> */}
          {/* <p>{post.data.work_description[0].text}</p> */}
        </div>
      )
      // <div>post</div>
      // <h1>{RichText.asText(doc.data.title)}</h1>
    );

    var months = allMonths.map((month, i) => (
      <option value={month}>{month}</option>
    ));
    var years = allYears.map((year, i) => (
      <option value={year}>{year}</option>
    ));
  }

  return (
    <div className="works-page">
      {/* <Nav></Nav> */}
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
          minHeight: `100vh`,
          padding:"100px 15px",
          width: "100%",
          color: "white",
          display: `flex`,
          flexDirection: "column",
          alignItems: `center`,
          justifyContent: "center",
          position: `relative`,
          
        }}
      >
        <div className="webdev-intro">
        <h1>The pleasure is all mine!</h1>
        <p>I've had the opportunity to work on some really interesting projects for some really amazing people. Click on the images below to learn more about each project on a case by case basis. You'll see the Just Soup
          logo for projects that I've worked with my design colleague, Tim!
        </p>
        </div>
       
   
      <div className="home-wrapper">
        {/* filter is hidden for now */}
        {/* <form className="blog-filter" onSubmit={queryByDate}>
        <select className="filter-select" onChange={setMonth}>
        {months}
        </select>
        <select className="filter-select" onChange={setYear} >
        {years}
        </select>
        <button className="filter-select-btn" type="submit">Search</button>
        <button className="filter-select-btn" onClick={resetSearch}>Reset</button>
        </form> */}
      
        <div>
          {doc ? (
            <div >
              {doc.length > 0 ?
               <div className="works-wrapper">
                   {/* <ul> */}
               {data}
                   {/* </ul> */}
               </div> : <div>No Items for these dates</div>
            }
             
            
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
        {/* <Test></Test> */}
      </div>
    </div>
  );
}
