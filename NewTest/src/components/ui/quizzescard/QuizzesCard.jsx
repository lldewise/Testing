import React from 'react';
import classes from './QuizzesCard.module.scss';
import { Doughnut } from 'react-chartjs-2';
const lightOptions = {
    cutoutPercentage: 80,
    responsive: true,
    maintainAspectRatio: false,
  };
export const QuizzesCard = (props) => {
    const grade = props.item.gradepercentage<75?    <label className={classes.customScoreFail}>{props.item.gradepercentage}%</label> : <label className={classes.customScorePass}>{props.item.gradepercentage}%</label>
    return (
        <div className={"ms-Grid-col ms-lg12 " + classes.container} >            
                <div className={"ms-Grid-col lg2 "+ classes.divpad10}>
                    {grade}
                </div>
                <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg12">
               
                    <div className={"ms-Grid-col lg6 " + classes.customChart}>
                        <Doughnut data={props.item} options={lightOptions} width={100} height={100}/>
                    </div>
                    <div className={"ms-Grid-col lg6 " + classes.customLabel}>
                        <label className={classes.gradeDesc}>{props.item.gradedesc}</label>
                        <br/>
                        <div className={classes.quiznum}>
                        <label>Quiz #7</label>
                        <br/>
                        <label> 2 days ago</label>
                        </div>
                    </div>
                </div>
                </div>
            
        </div>
    )
}