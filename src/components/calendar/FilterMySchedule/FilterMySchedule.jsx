import React, { Fragment } from 'react';
import { Callout } from 'office-ui-fabric-react';
import styles from './FilterMySchedule.module.scss';
import { DirectionalHint } from '@fluentui/react';
import {
    FocusZone,
    FocusZoneDirection,
  } from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

const iconStyles = { marginRight: '8px', color: '#6c35d4' };
const options = [
    { key: 'schoolEvent', text: 'School Event', data: {color: '#f7a93b'}},
    { key: 'classSchedule', text: 'Class Schedule', data: {color: '#6c35d4'}},   
    { key: 'private', text: 'Private', data: {color: '#6bb700'}},
    { key: 'exam', text: 'Exam', data: {color: '#0078d4'}}
];

let schoolEventStyles = {     
    checkmark: { 
        backgroundColor: '#f7a93b',
        borderColor: '#f7a93b',
        padding: '10px'
    } 
  };

let classScheduleStyles = {     
    checkmark: { 
        backgroundColor: '#6c35d4',
        borderColor: '#6c35d4',
        padding: '10px'
    } 
}; 

let privateStyles = {     
    checkmark: { 
        backgroundColor: '#6bb700',
        borderColor: '#6bb700',
        padding: '10px'
    } 
 };

let examStyles = {     
    checkmark: { 
        backgroundColor: '#0078d4',
        borderColor: '#0078d4',
        padding: '10px'
    } 
 };



const FilterMySchedule = (items) => {  
    let { targetEl, isMyScheduleView, onChangeScheduleRender, isCheckSchoolEvent, isCheckClassSchedule, isCheckPrivateEvent, isCheckExam} = items;   
    
    const onRenderOption = (option) => {   
        let wrapper = '';
        switch (option.key) {
            case 'schoolEvent':
                wrapper = <Checkbox styles={schoolEventStyles} checked={isCheckSchoolEvent}/>
                break;
            case 'classSchedule':
                wrapper = <Checkbox styles={classScheduleStyles} checked={isCheckClassSchedule}/>
                break; 
            case 'private':
                wrapper = <Checkbox styles={privateStyles} checked={isCheckPrivateEvent}/>
                break;
            case 'exam':
                wrapper = <Checkbox styles={examStyles} checked={isCheckExam}/>
                break;     
            default:
                break;   
        }
        return (
            <div className={styles.listStyle} style={{display: 'flex'}} >
                {option.data && (                
                    <>
                    <div style={{width: '30px'}} id={option.key}>
                        {wrapper}
                    </div>
                    <div style={iconStyles} id={option.key}>{option.text}</div>           
                    </>      
                )}           
            </div>
        );
    };

    return (
        <Fragment>   
            {isMyScheduleView && (
            <Callout
                className={styles.callout}            
                role="alertdialog"
                gapSpace={0}                             
                target={targetEl}        
                setInitialFocus
                directionalHint={DirectionalHint.bottomLeftEdge}
                directionalHintFixed={false}
                >
                <div>                                  
                    <div className="ms-Grid-row ">
                        <FocusZone direction={FocusZoneDirection.horizontal}>
                            <div data-is-scrollable>
                                <List items={options}  
                                    onRenderCell={onRenderOption} 
                                    onClick={(e) => onChangeScheduleRender(e)}
                                />
                            </div>
                        </FocusZone>
                    </div>                   
                </div>               
            </Callout>  
        )}              
    </Fragment> 
    );     
} 

export  default FilterMySchedule;
