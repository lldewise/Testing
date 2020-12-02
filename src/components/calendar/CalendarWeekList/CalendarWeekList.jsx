
import React, { Fragment, useEffect, useState } from "react";
import { FontIcon } from "@fluentui/react";
import classes from './CalendarWeekList.module.scss'
import moment from 'moment';


const statusColorIcon = [
  {
    status: 1,
    icon: "SkypeCircleCheck",
    color: "green"
  },

  {
    status: 2,
    icon: "DRM",
    color: "red"
  },

  {
    status: 3,
    icon: "Blocked",

  },
  {
    status: 4,
    icon: "AlertSolid",
    color: "#F7A93B"
  },
  {
    status: 5,
    icon: "SkypeCircleClock",
    color: "#6c35d4"
  }
];


const calendardata = [
  {
    date: "2020-11-23",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "You attended this class",
    selected: false,
    status: 1
  },
  {
    date: "2020-11-24",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "You were absent in this class",
    selected: false,
    status: 2
  },
  {
    date: "2020-11-25",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "This class was cancelled",
    selected: false,
    status: 3
  },
  {
    date: "2020-11-26",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "You were 30 mins late in this class",
    selected: false,
    status: 4
  },
  {
    date: "2020-11-27",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "",
    selected: false,
    status: 5
  },
  {
    date: "2020-11-30",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "You attended this class",
    selected: false,
    status: 5
  },
  {
    date: "2020-12-01",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "You were absent in this class",
    selected: false,
    status: 5
  },
  {
    date: "2020-12-02",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "This class was cancelled",
    selected: false,
    status: 5
  },
  {
    date: "2020-12-03",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "You were 30 mins late in this class",
    selected: false,
    status: 5
  },
  {
    date: "2020-12-04",
    time: "8:00 AM - 8:45 AM",
    location: "R. 302 A ",
    remarks: "",
    selected: false,
    status: 5
  },

]


const CalendarWeekList = () => {

  const [onDateMonth, setonDateMonth] = useState(moment(new Date()).format("MMMM yyyy"));

  const [weekDiv, setWeekDiv] = useState();
  const [tagDate, setTagDate] = useState(new Date());


  const generateWeekList = (dateset) => {    
    const todaydate = dateset;
    let result = [];
    var labelWeek = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    let x = 0;
    for (let i = 1; i <= 5; i++) {
      const currdate = todaydate.getDate();
      const currday = todaydate.getDay();
      let first = currdate - currday + i
 
      let day = new Date(todaydate.setDate(first)).toISOString().slice(0, 10)
      result.push({ date: day, label: labelWeek[x] })
      x++;
    }
    const newDate = new Date(result[0].date)

    setTagDate(newDate);
    setonDateMonth(moment(newDate).format("MMMM yyyy"))

    return result;
  }

  useEffect(() => {

    const curr = tagDate;
    const myweek = generateWeekList(curr)
    setWeekDiv(renderView(myweek));
  }, [])


  const gotoToday = () => {
    var firstDay = new Date();
    // setTagDate(firstDay);
    setTagDate(firstDay);
    const myweek = generateWeekList(firstDay);
    setWeekDiv(renderView(myweek));

  }

  const gotoNext = (newDate) => {
    debugger
    var firstDay = new Date(newDate);
    var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);

    const myweek = generateWeekList(nextWeek);

    setWeekDiv(renderView(myweek));
  }


  const gotoPrev = (newDate) => {
    debugger
    var firstDay = new Date(newDate);
    var nextWeek = new Date(firstDay.getTime() - 7 * 24 * 60 * 60 * 1000);

    const myweek = generateWeekList(nextWeek);
    setWeekDiv(renderView(myweek));

  }



  // useEffect(()=>{      
  //   const updatedList = [...weekList];
  //   updatedList.forEach(item=>{
  //    const dateToday=moment(new Date()).format("yyyy-MM-DD");       
  //          item.selected=false;
  //          if(dateToday===item.date)
  //          item.selected=true;
  //  });

  //  setWeekList(updatedList);
  // },[]);

  const selectedDateHandler = (date) => {
    // const updatedList = [...weekList];
    // updatedList.forEach(item => {
    //   const dateToday = moment(new Date(date)).format("yyyy-MM-DD");
    //   item.selected = false;
    //   if (dateToday === item.date)
    //     item.selected = true;
    // });
    // debugger
    // setWeekList(updatedList);
  }


  const renderView = (weekdata) => {
    let viewWeeks = [];
    weekdata.forEach((item, i) => {
      const getDays = new Date(item.date).getDate();
      const daysSchedule = calendardata.find(row => row.date === item.date);
      const calendarIcon = statusColorIcon.find(row => row.status === daysSchedule?.status);
      const calendarFontIcon = calendarIcon ? <FontIcon iconName={calendarIcon.icon} style={{ color: calendarIcon.color }} className={classes.fontIcon}></FontIcon> : null
      viewWeeks.push(
        <div key={i} className={"ms-Grid-col ms-lg12 " + classes.container} onClick={() => {
          selectedDateHandler(item.date)
        }}>
          <div className={"ms-Grid-col ms-lg3 " + classes.dateContainer}>
            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg8">
                <div className={"text-right " + classes.date}>
                  {getDays}
                </div>
                <div className={"text-right " + classes.datelabel}>
                  {item.label}
                </div>
              </div>
              <div className={"ms-Grid-col ms-lg4 " + classes.selectedContainer}>
                <div className={classes.selectedDate}></div>
              </div>
            </div>
          </div>
          <div className={"ms-Grid-col ms-lg9 " + classes.locationtimecontainer} >
            <div className="ms-Grid-row">
              <div className={"ms-Grid-col ms-lg10 " + classes.locationtime}>
                <div className={classes.padB5}>
                  {daysSchedule ? <FontIcon iconName="Clock" className={classes.clockIcon}></FontIcon> : null}  {daysSchedule?.time}
                </div>
                <div>
                  {daysSchedule ? <FontIcon iconName="POI" className={classes.clockIcon}></FontIcon> : null} {daysSchedule?.location}
                </div>
              </div>
              <div className={"ms-Grid-col ms-lg2 " + classes.iconContainer} >
                {calendarFontIcon}
              </div>
            </div>
          </div>

        </div>
      )
    });
    return viewWeeks;

  }






  return (
    <Fragment>
      <div className={"ms-Grid-row " + classes.selectionContainer}>
        <div className="ms-Grid-row">
          <div className={"ms-Grid-col ms-lg12 " + classes.selectionCalendar} >
            <div className={"ms-Grid-col ms-lg5 " + classes.cursor} onClick={gotoToday}><span><FontIcon iconName="GotoToday" className={"padR10 " + classes.clockIcon}></FontIcon></span> Today</div>
            <div className="ms-Grid-col ms-lg7 text-right">

              <span className={"padR10 " + classes.cursor}><FontIcon iconName="ChevronLeft" className={classes.clockIcon} onClick={() => { gotoPrev(tagDate) }}></FontIcon></span>
              <span className={"padR10 " + classes.cursor} ><FontIcon iconName="ChevronRight" className={classes.clockIcon} onClick={() => { gotoNext(tagDate) }}></FontIcon></span>
              <span className="padR10">{onDateMonth} </span>
              <span><FontIcon iconName="CalendarWeek" className={classes.clockIcon}></FontIcon></span></div>
          </div>
        </div>
        <div className="ms-Grid-row">
          {weekDiv}
        </div>
      </div>
    </Fragment>
  );


}



export default CalendarWeekList;