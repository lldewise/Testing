import React from "react";
import { Card } from "@uifabric/react-cards";
import Slider from 'infinite-react-carousel';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";

import classes from "./CouroselNews.module.scss";

import news1 from "../../../assets/images/news/news1.png";
import news2 from "../../../assets/images/news/news2.png";
import news3 from "../../../assets/images/news/news3.png";
import news4 from "../../../assets/images/news/news4.png";


const settings = {
  arrows: false,
  arrowsBlock: false,
  dots: true,
};

const cardTokens = { childrenMargin: 12 };

export const CouroselNews = () => {
  return (

    <Card
      className={classes.customBackgroundNews}
      aria-label="Basic horizontal card"
      horizontal
      tokens={cardTokens}>
      <label className={classes.newsTitle}>News</label>
      <div>
        <Card.Item>

          <div className={classes.customDiv}>
            <Slider {...settings}>

              <div className={"ms-Grid-row " + classes.focus}>

                <div className="ms-Grid-col  ms-lg12">
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col  ms-lg4">
                      <img alt="" src={news1} className={classes.imgHeight} />
                    </div>

                    <div className="ms-Grid-col ms-lg8">
                      <div className="ms-Grid-row">

                        <div className="ms-Grid-col  ms-lg1">
                          <i className={"ms-Icon ms-Icon--Bank " + classes.newsIcon} aria-hidden="true" />
                        </div>

                        <div className={"ms-Grid-col  ms-lg9"}>
                          <label className={classes.newsTitleFont}>School News</label>
                        </div>

                        <div className="ms-Grid-col  ms-lg2">
                          <label className={classes.newsDateFont}>Oct 5</label>
                        </div>

                      </div>

                      <div className="ms-Grid-row">
                        <div className={"ms-Grid-col  ms-lg10"}>
                          <p className={classes.newsContent}>Teaching Sttrategy for distance education under Covid-19 for primary school.</p>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
              
              <div className={"ms-Grid-row " + classes.focus}>

                <div className="ms-Grid-col  ms-lg12">
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col  ms-lg4">
                      <img alt="" src={news2} className={classes.imgHeight} />
                    </div>

                    <div className="ms-Grid-col ms-lg8">
                      <div className="ms-Grid-row">

                        <div className="ms-Grid-col  ms-lg1">
                          <i className={"ms-Icon ms-Icon--Bank " + classes.newsIcon} aria-hidden="true" />
                        </div>

                        <div className={"ms-Grid-col  ms-lg9"}>
                          <label className={classes.newsTitleFont}>School News</label>
                        </div>

                        <div className="ms-Grid-col  ms-lg2">
                          <label className={classes.newsDateFont}>Oct 5</label>
                        </div>

                      </div>

                      <div className="ms-Grid-row">
                        <div className={"ms-Grid-col  ms-lg10"}>
                          <p className={classes.newsContent}>DIY: How to create your own face mask like a professional middle schooler</p>
                        </div>
                      </div>

                    </div>
                    
                  </div>
                </div>
              </div>

              <div className={"ms-Grid-row " + classes.focus}>

                <div className="ms-Grid-col  ms-lg12">
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col  ms-lg4">
                      <img alt="" src={news3} className={classes.imgHeight} />
                    </div>

                    <div className="ms-Grid-col ms-lg8">
                      <div className="ms-Grid-row">

                        <div className="ms-Grid-col  ms-lg1">
                          <i className={"ms-Icon ms-Icon--Bank " + classes.newsIcon} aria-hidden="true" />
                        </div>

                        <div className={"ms-Grid-col  ms-lg9"}>
                          <label className={classes.newsTitleFont}>School News</label>
                        </div>

                        <div className="ms-Grid-col  ms-lg2">
                          <label className={classes.newsDateFont}>Oct 5</label>
                        </div>

                      </div>

                      <div className="ms-Grid-row">
                        <div className={"ms-Grid-col  ms-lg10"}>
                          <p className={classes.newsContent}>Hat and a festive graduation and carriage ride for our newly hatched students.</p>
                        </div>
                      </div>

                    </div>
                    
                  </div>
                </div>
              </div>

              <div className={"ms-Grid-row " + classes.focus}>

                <div className="ms-Grid-col  ms-lg12">
                  <div className="ms-Grid-row">
                    <div className="ms-Grid-col  ms-lg4">
                      <img alt="" src={news4} className={classes.imgHeight} />
                    </div>

                    <div className="ms-Grid-col ms-lg8">
                      <div className="ms-Grid-row">

                        <div className="ms-Grid-col  ms-lg1">
                          <i className={"ms-Icon ms-Icon--Bank " + classes.newsIcon} aria-hidden="true" />
                        </div>

                        <div className={"ms-Grid-col  ms-lg9"}>
                          <label className={classes.newsTitleFont}>School News</label>
                        </div>

                        <div className="ms-Grid-col  ms-lg2">
                          <label className={classes.newsDateFont}>Oct 5</label>
                        </div>

                      </div>

                      <div className="ms-Grid-row">
                        <div className={"ms-Grid-col  ms-lg10"}>
                          <p className={classes.newsContent}>Black Lives Matter: our librarian's reading tips for the autumn break.</p>
                        </div>
                      </div>

                    </div>
                    
                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </Card.Item>
      </div>
      <div className="ms-Grid-col  ms-lg10 text-right ">
        <span className={classes.iconPadding}>
          {" "}
          <FontIcon iconName="More" className="icondDefault card-title" />
        </span>
      </div>
    </Card>

  );
};
