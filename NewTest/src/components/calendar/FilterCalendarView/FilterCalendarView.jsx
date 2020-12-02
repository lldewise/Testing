import React, { Fragment } from 'react';
import { Callout } from 'office-ui-fabric-react';
import styles from './FilterCalendarView.module.scss';
import { DirectionalHint } from '@fluentui/react';
import {
    FocusZone,
    FocusZoneDirection,
  } from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import { Icon } from 'office-ui-fabric-react/lib/Icon';

const iconStyles = { marginRight: '8px', color: '#6c35d4' };
const options = [    
    { key: 'schoolWeek', text: 'School Week', data: {icon: 'CalendarWorkWeek'}},
    { key: 'week', text: 'Week', data: {icon: 'CalendarWeek'}},
    { key: 'month', text: 'Month', data: {icon: 'Calendar'}},
    { key: 'day', text: 'Day', data: {icon: 'CalendarDay'}}
];

const onRenderOption = (option) => {
    return (
        <div className={styles.listStyle}>
            {option.data && option.data.icon && (
                <Icon style={iconStyles} iconName={option.data.icon} aria-hidden="true" title={option.data.icon} />
            )}
            <span style={iconStyles} id={option.key}>{option.text}</span>
        </div>
    );
};

const FilterCalendarView = (items) => {  
    let { targetEl, isFilterView, onChangeFilterRender} = items;   
    
    return (
        <Fragment>   
            {isFilterView && (
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
                                <List items={options} onRenderCell={onRenderOption} onClick={onChangeFilterRender}/>
                            </div>
                        </FocusZone>
                    </div>                   
                </div>               
            </Callout>  
        )}              
    </Fragment> 
    );     
} 

export  default FilterCalendarView;
