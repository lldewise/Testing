import React from 'react';
import RightLayout from '../../components/layout/RightLayout/RightLayout';
import classes from './News.module.scss';
import {PostNews} from '../../components/news/PostNews';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { useHistory } from "react-router-dom";

import news0 from '../../assets/images/news/news0.png'
import news1 from '../../assets/images/news/news1.png'
import news2 from '../../assets/images/news/news2.png'
import news3 from '../../assets/images/news/news3.png'
import news4 from '../../assets/images/news/news4.png'

import pic1 from '../../assets/images/persona/mona.png'
import pic2 from '../../assets/images/persona/kristen.png'
import pic3 from '../../assets/images/persona/helle.png'
import pic4 from '../../assets/images/persona/susanne.png'





const newItemList = [
    {
        title: "Hat and a festive graduation and carriage ride for our newly hatched",
        name: "Anne Nielsen",
        initial: "AN",
        image: news3,
        type: "Events",
        icon: "SpecialEvent",
        persona:pic1,
        status:2
    },
    {
        title: "Teaching strategy for distance education under Covid-19 for",
        name: "Kristen Moller",
        initial: "KM",
        image: news1,
        type: "School News",
        icon: "Bank",
        persona:pic2,
        status:2
    },
    {
        title: "DIY: How to create your own face mask like a professional middle",
        name: "Helle Pedersen",
        initial: "HP",
        image: news2,
        type: "Micellaneous",
        icon: "Megaphone",
        persona:pic3,
        status:2
    },
    {
        title: "Teaching strategy for distance education under Covid-19 for",
        name: "Susanne Madsen",
        initial: "SM",
        image: news4,
        type: "Micellaneous",
        icon: "Megaphone",
        persona:pic4,
        status:2

    },

]





export default function News() {

    let history = useHistory();
  
    function handleClick() {
      history.push("./newsdetails");
    }
    let newsSmall = [];
    newItemList.forEach((row, i) => {
        newsSmall.push(<div className="ms-Grid-col ms-lg4" key={i}><PostNews item={row}/></div>)      
    });

    return (
        <div className="ms-Grid-row " >
            <div className="ms-Grid-col ms-lg12 container">
                <div className="ms-Grid-col ms-lg9 hideScroll " >
                    <div className="ms-Grid-row">
                        <div className={"ms-Grid-col ms-lg8 " + classes.topNewGradient}>
                            <div className={classes.newContent + " " + classes.topNew} style={{ backgroundImage: `url(${news0})` }} onClick={handleClick}>
                                <div className={classes.coverBlack}> 
                                    <div className={classes.newTopLabel}>
                                        <div >
                                            <div className={"ms-Grid-row " + classes.newTopHeader}><FontIcon className="padR5" iconName="Bank" /> School News</div>
                                            <div className={"ms-Grid-row " + classes.newTopTitle}> School Vocation Calendar</div>
                                            <div className={"ms-Grid-row " + classes.newTopTitle}> 2020/2021</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                        {newsSmall}
                    </div>
                </div>
                <div className="ms-Grid-col ms-lg3">
                    <RightLayout />
                </div>
            </div>
        </div>
    );
}
