import React from "react";
import classes from "./DueSoon.module.scss";
import ReactPaginate from 'react-paginate';

export const DueSoon = () => {
  const [count, setCount] = React.useState(0);

  const components = [
    <div>
      <div className={"ms-Grid-row "}>
      <div className="ms-Grid-col ms-lg12">
      <div className="ms-Grid-col ms-lg3">
      <div className={classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
            <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 9:00 AM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--PenWorkspace " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Answer Workbook</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>Math</label>
        </div>
        </div>
      </div>
      </div>

      <div className="ms-Grid-col ms-lg3">
      <div className={classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
          <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 10:00 AM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--ReadingMode " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Read pages 60-70</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>Biology</label>
        </div>
        </div>
        </div>
      </div>

      <div className="ms-Grid-col ms-lg3">
      <div className={classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
          <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 1:00 PM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--PenWorkspace " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Presentation</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>Social Studies</label>
        </div>
        </div>
        </div>
      </div>

      <div className="ms-Grid-col ms-lg3">
      <div className={classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
          <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 8:00 AM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--ReadingMode " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Reading Material</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>English</label>
        </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </div>,
    
    <div>
      <div className="ms-Grid-col ms-lg3">
      <div className={classes.divPadding}>
              <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
                <div className="ms-Grid-col ms-lg1">
                <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
                </div>
                <div className="ms-Grid-col ms-lg11">
                  <label className={classes.labelTime}>Today at 8:00 AM</label>
                </div>
              </div>
              <div className={"ms-Grid-row "}>
              <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
                <i className={"ms-Icon ms-Icon--ReadingMode " + classes.iconStyle} aria-hidden="true"></i>
              </div>
              </div>
              <div className={"ms-Grid-row "}>
              <div className={"ms-Grid-col ms-lg12"}>
                <label className={classes.labelMargin}>Reading Material</label>
              </div>
              </div>
              <div className={"ms-Grid-row "}>
              <div className={"ms-Grid-col ms-lg12"}>
                <label className={classes.labelMarginSubject}>English</label>
              </div>
              </div>
        </div>
        </div>
    </div>
]

  return (
    <div>
      
      <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.arrowDiv}>

          <div className={"ms-Grid-col ms-lg6"}>
            <label className={classes.label}>Due Soon</label>
          </div>

          <div className={"ms-Grid-col ms-lg6 " + classes.rightArrowDiv}>
            <i className={"ms-Icon ms-Icon--ChevronLeft " + classes.leftArrow} aria-hidden="true"  onClick={() => setCount(count - 1)}/>
            <i className={"ms-Icon ms-Icon--ChevronRight " + classes.rightArrow} aria-hidden="true" onClick={() => setCount(count + 1)}/>
          </div>

        </div>
        </div>

         {
            // render component from our components array
            components[count]
        }

      {/* <div className={"ms-Grid-row "}>
      <div className="ms-Grid-col ms-lg12">

      <div className={"ms-Grid-col ms-lg2 " + classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
            <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 9:00 AM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--PenWorkspace " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Answer Workbook</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>Math</label>
        </div>
        </div>
      </div>

      <div className={"ms-Grid-col ms-lg2 " + classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
          <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 10:00 AM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--ReadingMode " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Read pages 60-70</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>Biology</label>
        </div>
        </div>
      </div>

      <div className={"ms-Grid-col ms-lg2 " + classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
          <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 1:00 PM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--PenWorkspace " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Presentation</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>Social Studies</label>
        </div>
        </div>
      </div>

      <div className={"ms-Grid-col ms-lg2 " + classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
          <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 8:00 AM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--ReadingMode " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Reading Material</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>English</label>
        </div>
        </div>
      </div>

      <div className={"ms-Grid-col ms-lg2 " + classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
          <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 8:00 AM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--ReadingMode " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Reading Material</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>English</label>
        </div>
        </div>
      </div>

      <div className={"ms-Grid-col ms-lg2 " + classes.divPadding}>
        <div className={"ms-Grid-col ms-lg12 " + classes.alarmCLock}>
          <div className="ms-Grid-col ms-lg1">
          <i className={"ms-Icon ms-Icon--AlarmClock " + classes.labelTime} aria-hidden="true"></i>
          </div>
          <div className="ms-Grid-col ms-lg11">
            <label className={classes.labelTime}>Today at 8:00 AM</label>
          </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 " + classes.divBgColor}>
          <i className={"ms-Icon ms-Icon--ReadingMode " + classes.iconStyle} aria-hidden="true"></i>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMargin}>Reading Material</label>
        </div>
        </div>
        <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12"}>
          <label className={classes.labelMarginSubject}>English</label>
        </div>
        </div>
      </div>

      </div>
      </div> */}

      
    </div>
  );
};
