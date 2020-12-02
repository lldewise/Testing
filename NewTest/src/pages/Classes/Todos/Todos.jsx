import React, { Fragment, useState } from 'react';
import { Assignmentlist } from '../../../components/itemlist';
import { Tab } from '../../../components/ui/tab'
import classes from './Todos.module.scss';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { useStore } from '../../../store/store';
import { Card } from '../../../components/ui/card';


const linkItem1 = [
  {
    name: "Homework",
    classname: classes.aLinkactive,

  },
  {
    name: "Assignment",
    classname: classes.aLink,
  }

];



const Todos = (props) => {
  const [data] = useStore();
  const [liList1, setliList1] = useState(linkItem1);
  const [containerList, setContainerList] = useState(data.classeshomeworklist);
  const [header, setHeader] = useState(linkItem1[0].name);



  const linkHandler1 = (value) => {
    const updatedList = [...liList1];
    updatedList.forEach(item => {
      item.classname = classes.aLink;
      if (item.name === value.name) {
        item.classname = classes.aLinkactive;
      }
    });
    setliList1(updatedList);
    UpdateContainer(value.name);
    setHeader(value.name)
  }


  const UpdateContainer = (value) => {
    switch (value) {
      case "Homework":
        return setContainerList(data.classeshomeworklist);
      case "Assignment":
        return setContainerList(data.classesassignmentlist);
      default:
        return setContainerList(data.classeshomeworklist);
    }
  }

  let cardView = []
  props.dueSoonList.forEach((item, i) => {
    cardView.push(<div className="ms-Grid-col ms-lg3 padR15" key={i}><Card item={item} /></div>)
  });




  return (
    <Fragment>
      <br/>
      <div className="ms-Grid-row">
        <div className={"ms-Grid-col ms-lg12 " + classes.dueSoon}>
          Due Soon
                </div>
      </div>
      <br />
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-lg12">
          {cardView}
        </div>
      </div>

      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-lg12 ">
          <Tab linkClick={linkHandler1} liList={liList1} />
        </div>
      </div>

      <div className="ms-Grid-row bclist">
        <div className={"ms-Grid-col ms-lg6 " + classes.headerFilter}>
          <span className="padl10">
            <FontIcon iconName="Filter" />
          </span>
          <span className="padl10"> All {header}</span>
          <span className="padl10"><FontIcon iconName="ChevronDown" className={classes.cursor} /></span>
          <span className="padl25"><FontIcon iconName="Sort" className={classes.cursor} /></span>
          <span className="padl10"> Date Created (latest-oldest)</span>
          <span className="padl10"><FontIcon iconName="ChevronDown" className={classes.cursor} /></span>
        </div>
      </div>

      <div className="ms-Grid-row">
        <Assignmentlist
          itemlist={containerList}     
          onClickRow={()=>{}}            
        />
      </div>
    </Fragment>
  )
}


export default Todos