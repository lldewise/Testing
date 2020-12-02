
import React, { Fragment, useEffect, useState } from 'react';
import pic1 from '../../../assets/images/persona/helle.png'

import { NewsFeeds } from '../../../components/news/NewsFeeds';
import { Likes } from '../../../components/news/Likes';
import { Comments } from '../../../components/news/Comments';
import { CommentsItem } from '../../../components/news/CommentsItem';
import classes from './TeachersNotes.module.scss';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { Attachment } from '../../../components/news/Attachment';


const newsFeedsItem = [
  {
    id: 1,
    name: "Anne Nielsen",
    initial: "AN",
    persona: pic1,
    date: "October 2, 2020 Fri Lesson ",
    comments: "<p>No late comers allowed! Bring your English 101 Book. Please study the attached file.</p>",
    status: 2,
    active: false,
    count: 2,
    commentCount: 0,
    commentList: [],
    commentClick: false,
    attachmentList:[ 
      {
        fileName: "Study Reference.png",
        fileExtension: ".png",
        fileType: "image",
        icon: "",
        src: "https://images-na.ssl-images-amazon.com/images/I/41aooW9N63L._SX326_BO1,204,203,200_.jpg"
      },
      {
        fileName: "English Reference.docx",
        fileExtension: ".docx",
        fileType: "video",
        icon: "",
        src: ""
      },
      {
        fileName: "Study Reference.docx",
        fileExtension: ".docx",
        fileType: "file",
        icon: "docx",
        src: ""
      },
      {
        fileName: "Study Reference.pptx",
        fileExtension: ".pptx",
        fileType: "file",
        icon: "pptx",
        src: ""
      },
      {
        fileName: "Study Reference.xlsx",
        fileExtension: ".xlsx",
        fileType: "file",
        icon: "xlsx",
        src: ""
      },
    ]
  },
  {
    id: 2,
    name: "Anne Nielsen",
    initial: "AN",
    persona: pic1,
    date: "October 1, 2020 Thu Lesson ",
    comments: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      ' sed do eiusmod tempor</p><ul><li><em>&nbsp;<span style="text-decoration: underline; color: #0000ff;">' +
      ' <a href="https://somewebsite">https://somewebsite</a></span></em></li> <li>Lorem ipsum dolor sit amet, consectetur</li>' +
      ' <li>Consectetur adipiscing elit, sed do eiusmod tempor</li>' +
      ' <li>Lorem ipsum dolor sit amet, consectetur</li>' +
      ' <li>Consectetur adipiscing elit, sed do eiusmod tempor</li></ul>',
    status: 2,
    active: true,
    count: 3,
    commentCount: 1,
    commentList: [{
      name: "Lebron James ",
      initial: "LB",
      comments: "This is noted Ms. Anne Nielsen",
      persona: null,
      status: 2
    }],
    commentClick: false,
    attachmentList:[   {
      fileName: "Study Reference.docx",
      fileExtension: ".docx",
      fileType: "file",
      icon: "docx"
    }]
  },

]



const TeachersNotes = (props) => {
  
  const [newsFeedList, setnewsFeedList] = useState([]);

  const commentHandler = (item, index) => {
    item.commentClick = !item.commentClick;
    const viewComment = [];
    if (item.commentClick) {
      item.commentList.forEach((item, i) => {
        viewComment.push(<div key={i}>{<CommentsItem
          persona={item.persona}
          initial={item.initial}
          comments={item.comments}
          status={item.status} />}</div>);
      });
    }
    
    updateNewsFeeds(index,viewComment);
  }

  const updateNewsFeeds = (index,viewComment) => {
    let newsFeeds = [];
    newsFeedsItem.forEach((item, i) => {
      let divComment = "";
       
       
      if(i===index) divComment=viewComment;
      newsFeeds.push(<div key={i} className={classes.divnewFeeds}>
          <NewsFeeds item={item} />
          
         <Attachment item = {item.attachmentList}/>
           
          <Likes active={item.active} count={item.count} commentCount={item.commentCount} clickComment={() => { commentHandler(item, i) }} />
          {divComment}
          <Comments item={item} user={props.user} />
        </div>)
    });
    
    setnewsFeedList(newsFeeds);
  }
 
  useEffect(() => {
    let newsFeeds = [];
    newsFeedsItem.forEach((item, i) => {

      console.log(item.attachmentList);
      newsFeeds.push(<div key={i} className={classes.divnewFeeds}><NewsFeeds item={item} />
       
        <Attachment item = {item.attachmentList}/>
  
        <Likes active={item.active} count={item.count} commentCount={item.commentCount} clickComment={() => { commentHandler(item, i) }} />
        <Comments item={item} user={props.user}/>
      </div>)
    });
  
    setnewsFeedList(newsFeeds);
  }, [])


  return (
    <Fragment>
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-lg12">

          <div className="ms-Grid-row ">
            <div className={"ms-Grid-col ms-lg12 " + classes.headerFilter}>
              <span ><FontIcon iconName="Sort" className={classes.cursor} /></span>
              <span className="padl10"> Date Created (latest-oldest)</span>
              <span className="padl10"><FontIcon iconName="ChevronDown" className={classes.cursor} /></span>
            </div>
          </div>
          <div className={"ms-Grid-row"}>
            <div className="ms-Grid-col ms-lg12">
              {newsFeedList}
            </div>
          </div>

        </div>
      </div>
    </Fragment>
  )
}


export default TeachersNotes