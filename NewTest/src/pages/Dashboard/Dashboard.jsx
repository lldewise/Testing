import React, { useCallback, useState } from 'react';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { Assignmentlist } from '../../components/itemlist';
import { MessageBanner } from '../../components/banner/MessageBanner';
import RightLayout from '../../components/layout/RightLayout/RightLayout';
import { AttendanceCard } from '../../components/attendance';
import { CouroselNews } from '../../components/news/CouroselNews';
import { useStore } from '../../store/store';
import styles from './Dashboard.module.scss';
import { Tab } from '../../components/ui/tab'
import { DueSoon } from '../../components/duesoon/DueSoon';


const linkItem = [
  {

    name: "Homework",
    classname: styles.aLinkactive,
  },
  {
    name: "Assignment",
    classname: styles.aLink,
  },
  {
    name: "Documents",
    classname: styles.aLink,
  }

]

export default function Dashboard() {
  const [data, dispatch] = useStore();
  const [liList, setliList] = useState(linkItem)
  const [containerList, setContainerList] = useState(data.homeworklist);

  const linkHandler = (value) => {
    const updatedList = [...liList];
    updatedList.forEach(item => {
      item.classname = styles.aLink;
      if (item.name === value.name) {
        item.classname = styles.aLinkactive;
      }
    });
    setliList(updatedList);
    UpdateContainer(value.name)
  }


  const UpdateContainer = (value) => {
    switch (value) {
      case "Homework":
        return setContainerList(data.homeworklist);
      case "Assignment":
        return setContainerList(data.assignmentlist);
      case "Documents":
        return setContainerList(data.documentslist);
      default:
        return setContainerList(data.homeworklist);
    }
  }


  // const listHandler = useCallback(item => {
  //   dispatch("Update_Selected", item.index);
  //   console.log("Update");
  // }, [dispatch]);

  const showMoreHandler = useCallback(() => {
    dispatch("showMore");
  }, [dispatch]);


  const assignmentClickHandler=(value)=>{                                
          const updateItemList = [...containerList];        
          updateItemList.forEach(item=>{
                  item.selected=false;
                  if(item.index===value.index) item.selected=!value.selected;
          });
          setContainerList(updateItemList);
  }




  return (
    <div className={"ms-Grid-row " + styles.dashboard}>
      <div className="ms-Grid-col ms-lg12 container">
        <div className={"ms-Grid-col ms-lg9 hideScroll " + styles.dashboardMessageBanner}>
          <div>
            <div className="ms-Grid-row">
              <MessageBanner />
            </div>
            
            <div className="ms-Grid-row">
              <DueSoon />
            </div>

            <div className="ms-Grid-row bclist">
              <div className="ms-Grid-col ms-lg6">
                <Tab linkClick={linkHandler} liList={liList} />
              </div>
              <div className={"ms-Grid-col  ms-lg6 text-right " + styles.padUS}>
                <span className="padl10">
                  <FontIcon iconName="Upload" className={styles.iconColor} />
                </span>
                <span className="padl10"> Upload Assignment</span>
                <span className="padl10">
                  <FontIcon
                    iconName="More"
                    className={"icondDefault card-title " + styles.iconFont}
                  />
                </span>
              </div>
            </div>


            <div className="ms-Grid-row">
              <Assignmentlist
                // updateSelected={listHandler}
                // showmore={showMoreHandler}
                itemlist={containerList}    
                onClickRow={assignmentClickHandler}            
              />
              <div className={"ms-Grid-row bclist " + styles.assignmentHeader}>
                <div className="ms-Grid-col  ms-lg6" >
                  <span className={"padl10 " + styles.cursor}>Show More</span>
                  <span className="padl10">
                    {" "}
                    <FontIcon iconName="ChevronDown" className={styles.cursor} />
                  </span>
                </div>
                <div className={"ms-Grid-col  ms-lg6 text-right " + styles.cursor}>
                  <span className="padl10"> More</span>
                  <span className="padl10">
                    {" "}
                    <FontIcon iconName="Forward" className="icondDefault" />
                  </span>
                </div>
              </div>
            </div>

            <br />
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg6">
                <div className={"ms-Grid-row " + styles.dashboardAttendance}>
                  <div className="ms-Grid-col ms-lg12 padR10">
                    <AttendanceCard />
                  </div>
                </div>
              </div>
              <div className="ms-Grid-col ms-lg6">
                <div className={"ms-Grid-row " + styles.dashboardNewsCard}>
                  <div className="ms-Grid-col ms-lg12">
                    <CouroselNews />
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            {/* <div>
              <div className="ms-Grid-col ms-lg6 ">
                <div className={"ms-Grid-row " + styles.dashboardSharedDocument}>
                  <div className="ms-Grid-col ms-lg11">
                    <SharedDocumentlist items={sharedDocsItems} title="Documents" />
                  </div>
                </div>
              </div>

              <div className="ms-Grid-col ms-lg6 ">
                <div className={"ms-Grid-row " + styles.dashboardSharedDocument}>
                  <div className={"ms-Grid-col ms-lg12 " + styles.fRight}>
                    <SharedDocumentlist items={sharedDocsItems} title="Shared Documents" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>

        </div>
        <div className="ms-Grid-col ms-lg3">
          <RightLayout />
        </div>
      </div>

    </div>

  );
}
