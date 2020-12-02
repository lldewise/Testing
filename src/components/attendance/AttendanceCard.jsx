import React from "react";
import { Card } from "@uifabric/react-cards";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import {
  mergeStyles,
  mergeStyleSets,
} from "office-ui-fabric-react/lib/Styling";
import classes from "./AttendanceCard.module.scss";
import { Doughnut } from 'react-chartjs-2';

const chartData = {
  labels: ["95% Lessons Attended", "5% Absences"],
  datasets: [
    {
      data: [95, 5],
      backgroundColor: ["#8ED85F", "#E1DFDD"],
      hoverBackgroundColor: ["#8ED85F", "#E1DFDD"],
    },
  ],
};

const lightOptions = {
  legend: {
    // labels: {
    //   fontColor: "#495057",
    // },
    // position: "right",
    // align: "end",
    display: false,
    responsive: true,
    maintainAspectRatio: true,
  },
  cutoutPercentage: 80,
};

const cardTokens = { childrenMargin: 12 };

const iconClass = mergeStyles({
  fontSize: 50,
  height: 50,
  width: 50,
  margin: "90px -75px",
  position:"absolute"
});

const classNames = mergeStyleSets({
  greenYellow: [{ color: "greenyellow" }, iconClass],
});

export const AttendanceCard = () => {
  return (
    <Card
      className={classes.customBackgroundAttendance}
      aria-label="Basic horizontal card"
      horizontal
      tokens={cardTokens}>
      <label className={classes.attendanceTitle}>Attendance TEST</label>
      <div className={classes.attendanceContainer}>
      <FontIcon iconName="Emoji" className={classNames.greenYellow} />
      <Card.Item>
        <div className={classes.customChart}>
        <Doughnut data={chartData} options={lightOptions}/>
        </div>
      </Card.Item>
      </div>
      <label className={classes.customMargin}>Keet it Up!</label>
      <label className={classes.customMargin2}>You are seldom absent nor late.</label>
      <label className={classes.customMarginAttendedPercent}>95%</label>
      <label className={classes.customMarginAttended}>Lessons Attended</label>
      <label className={classes.customMarginAbsencesPercent}>5%</label>
      <label className={classes.customMarginAbsences}>Absences</label>

      <div className="ms-Grid-col  ms-lg10 text-right ">
          <span className={classes.iconPadding}>
            {" "}
            <FontIcon iconName="More" className="icondDefault card-title" />
          </span>
        </div>
    </Card>
  );
};
