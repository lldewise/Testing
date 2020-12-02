import React from "react";
import RightLayout from '../../components/layout/RightLayout/RightLayout';
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { TestImages } from '@uifabric/example-data';
import {
  FocusZone,
  FocusZoneDirection,
} from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import classes from './NewsDetails.module.scss';
import { PostNews } from '../../components/news/PostNews';
import news0 from '../../assets/images/news/news0.png'
import news1 from '../../assets/images/news/news1.png'
import news2 from '../../assets/images/news/news2.png'
import news3 from '../../assets/images/news/news3.png'
import news4 from '../../assets/images/news/news4.png'
 

import pic1 from '../../assets/images/persona/mona.png'
import pic2 from '../../assets/images/persona/kristen.png'
import pic3 from '../../assets/images/persona/helle.png'
import pic4 from '../../assets/images/persona/susanne.png'



const onRenderCell = (
  item
) => {
  let cssBackground = classes.odd;

  if (item.index % 2 === 0) {
    cssBackground = classes.even;
  }

  return (
    <div className={classes.itemhover + " " + cssBackground}>
      <div className={"ms-Grid-row "}>
        <div className="ms-Grid-col ms-lg12">
          <div className={classes.itemCell} data-is-focusable={true}>
            <div className="ms-Grid-col ms-lg4">
              <div className={classes.itemName}>{item.name}</div>
              <div className={classes.itemIndex}>{item.item}</div>
            </div>
            <div>
              <div className={classes.itemDetails}></div>
            </div>
            <div>
              <div>{item.date}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const sharedDocsItems = [
  {
    name: "School Start",
    index: 1,
    isScrolling: true,
    date: "13th August 2020"
  },
  {
    name: "Autumn Vacation",
    index: 2,
    isScrolling: true,
    date: "12th October - 16th October 2020"
  },
  {
    name: "Christmas Holiday",
    index: 3,
    isScrolling: true,
    date: "18th December 2020 - 3rd January 2021"
  },
  {
    name: "Winter Vacation",
    index: 4,
    isScrolling: true,
    date: "18th February 2021 - 19th February 2021"
  },
  {
    name: "Easter Vacation",
    index: 5,
    isScrolling: true,
    date: "29th March 2021 - 5th April 2021"
  },
  {
    name: "All Prayer's Day",
    index: 6,
    isScrolling: true,
    date: "30th April 2021"
  },
  {
    name: "Ascension Day",
    index: 7,
    isScrolling: true,
    date: "13th May 2021 - 14th May 2021"
  },
  {
    name: "Whit Monday",
    index: 8,
    isScrolling: true,
    date: "24th May 2021"
  },
  {
    name: "Constitution Day",
    index: 9,
    isScrolling: true,
    date: "5th June 2021 (Saturday)"
  },
  {
    name: "Last Day of Term",
    index: 9,
    isScrolling: true,
    date: "24th June 2021"
  },
];

const newItemList = [
  {
    title: "Hat and a festive graduation and carriage ride for our newly hatched",
    name: "Anne Nielsen",
    initial: "AN",
    image: news3,
    type: "Events",
    icon: "SpecialEvent",
    persona: pic1,
    status: 2,
    index: 0
  },
  {
    title: "Teaching strategy for distance education under Covid-19 for",
    name: "Kristen Moller",
    initial: "KM",
    image: news1,
    type: "School News",
    icon: "Bank",
    persona: pic2,
    status: 2,
    index: 1
  },
  {
    title: "DIY: How to create your own face mask like a professional middle",
    name: "Helle Pedersen",
    initial: "HP",
    image: news2,
    type: "Micellaneous",
    icon: "Megaphone",
    persona: pic3,
    status: 2,
    index: 2
  },
  {
    title: "Teaching strategy for distance education under Covid-19 for",
    name: "Susanne Madsen",
    initial: "SM",
    image: news4,
    type: "Micellaneous",
    icon: "Megaphone",
    persona: pic4,
    status: 2,
    index: 3
  },

]


export default function NewsDetails() {

  const examplePersona = {
    imageUrl: TestImages.personaFemale,
    imageInitials: 'AL',
    text: 'Kirsten Møller',
    secondaryText: 'October 2020',
    tertiaryText: 'Online',
    optionalText: 'Available at 4:00pm',
  };

  let newsSmall = [];
  newItemList.forEach((row, i) => {    
    newsSmall.push(<div className="ms-Grid-col ms-lg6" key={i}><PostNews item={row} /></div>)
  });


  return (
    <div className={"ms-Grid-row "}>
      <div className="ms-Grid-col ms-lg12 container hideScroll">
        <div className={"ms-Grid-col ms-lg9 hideScroll "}>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.arrowDiv}>

          <div className={"ms-Grid-col ms-lg6"}>
            <i className={"ms-Icon ms-Icon--DecreaseIndentArrow " + classes.leftArrow} aria-hidden="true"/>
            <label className={classes.prevLabel}>Previous Post</label>
          </div>

          <div className={"ms-Grid-col ms-lg6 " + classes.rightArrowDiv}>
            <label className={classes.nextLabel}>Next Post</label>
            <i className={"ms-Icon ms-Icon--IncreaseIndentArrow " + classes.rightArrow} aria-hidden="true"/>
          </div>

        </div>
        </div>
          <div className={classes.bgColor}>

            <div className={classes.headerTitle}>
              <p className={classes.newsTitle}>School Vacation Calendar</p>
              <p className={classes.schoolName}>North Zealand International School</p>
              <Persona
                {...examplePersona}
                size={PersonaSize.size40}
                presence={PersonaPresence.online}
                imageAlt="Annie Lindqvist, status is away"
              />
            </div>

            <div>
              <img className={classes.imgSize} alt="" src={news0} />
            </div>

            <div className={classes.calendarList}>
              <div className="ms-Grid-row ">
                <div className="ms-Grid-col ms-sm12  ms-lg12">
                  <div className="ms-Grid-row ">
                    <div className="ms-Grid-col ms-sm12  ms-lg12 bclist pad10">
                      <div className={"ms-Grid-row " + classes.sharedDocumentHeader}>
                        <div className="ms-Grid-col  ms-lg6 card-title ">
                          <p className={classes.dateFontColor}>2020/2021</p>
                        </div>
                      </div>
                      <div className="ms-Grid-row ">
                        <FocusZone direction={FocusZoneDirection.vertical}>
                          <div className={classes.container} data-is-scrollable>
                            <List items={sharedDocsItems} onRenderCell={onRenderCell} />
                          </div>
                        </FocusZone>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
  
          <div className="ms-Grid-row">
            <div className={"ms-Grid-col ms-lg12 " + classes.relatedPostContainer} >
      
               <span className={ classes.relatedPostlbl}>  Related Post</span>
            </div>
          </div>
   
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12">
                  {newsSmall}
            </div>
          </div>

 

        </div>
        <div className="ms-Grid-col ms-lg3">
          <RightLayout />
        </div>
      </div>

    </div>

  );
}
