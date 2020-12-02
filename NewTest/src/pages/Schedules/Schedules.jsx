import React, { useState, useRef } from 'react';
import styles from './Schedules.module.scss';
import FilterCalendar from '../../components/calendar/FilterCalendarView/FilterCalendarView';
import FilterMySchedule from '../../components/calendar/FilterMySchedule/FilterMySchedule';
import FilterDate from '../../components/calendar/FilterDate/FilterDate';
import { MONTH_EVENTS } from "../../util/calendar/eventMonth.utils";
import DayView from '../../components/calendar/CalendarDayView/CalendarDayView';
import WeekView from '../../components/calendar/CalendarWeekView/CalendarWeekView';
import SchoolWeekView from '../../components/calendar/CalendarSchoolWeekView/CalendarSchoolWeekView';
import MonthView from '../../components/calendar/CalendarMonthView/CalendarMonthView';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import moment from 'moment';

const Schedule = () => {   
    const [events, setEvents] = useState(MONTH_EVENTS);
    const [calView, setCalView] = useState('timeGridSchoolWeek');
    const [calIcon, setCalIcon] = useState('CalendarDay');
    const [calText, setCalText] = useState('School Week');
    const [isFilterView, setIsFilterView] = useState(false);
    const [isMyScheduleView, setIsMyScheduleView] = useState(false);
    const [isCheckSchoolEvent, setIsCheckSchoolEvent] = useState(true);
    const [isCheckClassSchedule, setIsCheckClassSchedule] = useState(true);
    const [isCheckExam, setIsCheckExam] = useState(true);
    const [isCheckPrivateEvent, setIsCheckPrivateEvent] = useState(true);
    const [currentDay, setCurrentDay] = useState(new Date());

    const childDayView = useRef(null);
    const childWeekView = useRef(null);
    const childSchoolWeekView = useRef(null);
    const childMonthView = useRef(null);
    const today = new Date();

    function handleTodayClick() {    
      setCurrentDay(new Date());  
      if(calView === "timeGridDay") {        
        childDayView.current.handleTodayDay();
      } else if (calView === "timeGridWeek"){
        childWeekView.current.handleTodayDay();
      } else if (calView === "timeGridSchoolWeek") {
        childSchoolWeekView.current.handleTodayDay();
      } else {
        childMonthView.current.handleTodayDay();
      }        
    }  
    function handlePreviousClick () {           
      if(calView === "timeGridDay") {
        setCurrentDay(new Date(moment(currentDay).subtract(1, 'days').format('YYYY-MM-DD')));  
        childDayView.current.handlePreviousDay();
      } else if (calView === "timeGridWeek"){
        setCurrentDay(new Date(moment(currentDay).subtract(7, 'days').format('YYYY-MM-DD')));
        childWeekView.current.handlePreviousDay();        
      } else if (calView === "timeGridSchoolWeek") {
        setCurrentDay(new Date(moment(currentDay).subtract(7, 'days').format('YYYY-MM-DD')));
        childSchoolWeekView.current.handlePreviousDay();
      } else {
        setCurrentDay(new Date(moment(currentDay).subtract(1, 'months').format('YYYY-MM-DD')));
        childMonthView.current.handlePreviousDay();
      } 
    }
    function handleNextClick() {     
      if(calView === "timeGridDay") {
        setCurrentDay(new Date(moment(currentDay).add(1, 'days').format('YYYY-MM-DD')));
        childDayView.current.handleNextDay();
      } else if (calView === "timeGridWeek"){
        setCurrentDay(new Date(moment(currentDay).add(7, 'days').format('YYYY-MM-DD')));
        childWeekView.current.handleNextDay();
      } else if (calView === "timeGridSchoolWeek") {
        setCurrentDay(new Date(moment(currentDay).add(7, 'days').format('YYYY-MM-DD')));
        childSchoolWeekView.current.handleNextDay();
      } else {
        setCurrentDay(new Date(moment(currentDay).add(1, 'months').format('YYYY-MM-DD')));
        childMonthView.current.handleNextDay();
      } 
    }    
    function handleSelectedDateClick(item){   
      setCurrentDay(new Date(item)); 
      if(calView === "timeGridDay") {
        childDayView.current.handleSelectedDate(item);
      } else if (calView === "timeGridWeek"){
        childWeekView.current.handleSelectedDate(item);
      } else if (calView === "timeGridSchoolWeek"){
        childSchoolWeekView.current.handleSelectedDate(item);
      } else {
        childMonthView.current.handleSelectedDate(item);
      } 
    }

    

    function handleCalendarViewChange() {
      setIsFilterView(!isFilterView);    
      if(isMyScheduleView){
        setIsMyScheduleView(false);  
      }  
    }

    function handleMyScheduleChange() {
      setIsMyScheduleView(!isMyScheduleView);      
      if(isFilterView){
        setIsFilterView(false);  
      }
    }

    function renderCalendar(item) {            
        switch(calView) {
            case 'timeGridDay':
                return (<DayView today={today}
                                 events={item} 
                                 calView={calView} 
                                 ref={childDayView}/>)                
            case 'timeGridWeek':
                return (<WeekView today={today} 
                                  events={item} 
                                  calView={calView}
                                  ref={childWeekView}/>)      
            case 'timeGridSchoolWeek':
                return (<SchoolWeekView today={today} 
                                  events={item} 
                                  calView={calView}
                                  ref={childSchoolWeekView}/>)         
            case 'dayGridMonth':
                return (<MonthView today={today} 
                                   events={item} 
                                  calView={calView}
                                  ref={childMonthView}/>)  
            default:
              return (<SchoolWeekView today={today} 
                events={item} 
                calView={calView}
                ref={childSchoolWeekView}/>)  
        }
    };    

    const onChangeFilterRender = (item) => {  
        switch (item.target.id) {
            case 'day':
              setCalIcon('CalendarDay');
              setCalText('Day')
              setCalView('timeGridDay');
              setEvents(MONTH_EVENTS);
              break;
            case 'schoolWeek':
              setCalIcon('CalendarWorkWeek');
              setCalText('School Week')
              setCalView('timeGridSchoolWeek');
              setEvents(MONTH_EVENTS);
              break;
            case 'week':         
              setCalIcon('CalendarWeek');
              setCalText('Week')       
              setCalView('timeGridWeek');
              setEvents(MONTH_EVENTS);
              break;
            case 'month':
              setCalIcon('Calendar');
              setCalText('Month')
              setCalView('dayGridMonth');
              setEvents(MONTH_EVENTS);
              break;    
            default:
              setCalIcon('CalendarWorkWeek');
              setCalText('School Week')
              setCalView('timeGridSchoolWeek');
              setEvents(MONTH_EVENTS);
              break;        
          }
          setIsFilterView(false);
    }

    const onChangeScheduleRender = (item) => {      
      setIsMyScheduleView(!isMyScheduleView);      
      if(item.target.id !== ""){
        switch (item.target.id) {
          case 'schoolEvent':   
            setIsCheckSchoolEvent(!isCheckSchoolEvent);       
            updateEvents(item.target.id, !isCheckSchoolEvent);          
            break;
          case 'classSchedule':
            setIsCheckClassSchedule(!isCheckClassSchedule);
            updateEvents(item.target.id, !isCheckClassSchedule); 
            break;
          case 'private':
            setIsCheckPrivateEvent(!isCheckPrivateEvent);
            updateEvents(item.target.id, !isCheckPrivateEvent); 
            break;
          case 'exam':
            setIsCheckExam(!isCheckExam);
            updateEvents(item.target.id, !isCheckExam); 
            break;
          default: 
            break;
        } 
      }
    }
    
    const updateEvents = (item, e) => {
      let evt = events.filter(a => item === a.groupId);      
      if(calView === "timeGridDay") {
        childDayView.current.handleRemoveClick(evt, e); 
      } else if (calView === "timeGridWeek"){
        childWeekView.current.handleRemoveClick(evt, e); 
      } else if (calView === "timeGridSchoolWeek"){
        childSchoolWeekView.current.handleRemoveClick(evt, e); 
      } else {
        childMonthView.current.handleRemoveClick(evt, e); 
      }        
    }

    return (
        <div className={styles.schedules}>
            <div className={styles.filterContainer}>
                <div className={"ms-lg6 " + styles.leftContainer}>                    
                    <button className={styles.btnCalendarToday} onClick={handleTodayClick}>
                        <FontIcon iconName="Calendar" className={styles.todayCalendarIcon} />Today
                    </button>
                    <button className={styles.btnPrevious} onClick={handlePreviousClick} >
                        <FontIcon iconName="ChromeBack" className={styles.previousCalendarIcon} />
                    </button>
                    <button className={styles.btnNext} onClick={handleNextClick}>
                        <FontIcon iconName="ChromeBackMirrored" className={styles.nextCalendarIcon} />
                    </button>                    
                    <FilterDate today={today} currentDay={currentDay} handleSelectedDate={handleSelectedDateClick}/>                                                               
                </div> 
                <div className={"ms-lg6 " + styles.rightContainer}>                                        
                    <button className={styles.btnCalendarAll} id="btnCalFilter" onClick={handleCalendarViewChange}>
                      <FontIcon iconName={calIcon} className={styles.calendarAllIcon} />{calText} <FontIcon iconName="ChevronDown" className={styles.calendarDownIcon} />
                    </button>  
                    <button className={styles.btnFilterEvent} id="btnMySchedFilter" onClick={handleMyScheduleChange}>
                      <FontIcon iconName="Filter" className={styles.filterEventIcon} />My Schedules <FontIcon iconName="ChevronDown" className={styles.filterDownIcon} />
                    </button>      
                    <button className={styles.btnPrint}>
                        <FontIcon iconName="Print" className={styles.printIcon} />Print
                    </button>            
                </div>
            </div>            
            <div className={styles.multiSchedule}>
                { renderCalendar(events) }                
            </div>    
            <FilterCalendar targetEl="#btnCalFilter" 
                            isFilterView={isFilterView} 
                            onChangeFilterRender={onChangeFilterRender}/>   
            <FilterMySchedule targetEl="#btnMySchedFilter" 
                              isMyScheduleView={isMyScheduleView} 
                              isCheckSchoolEvent={isCheckSchoolEvent}
                              isCheckClassSchedule={isCheckClassSchedule}
                              isCheckPrivateEvent={isCheckPrivateEvent}
                              isCheckExam={isCheckExam}                              
                              onChangeScheduleRender={onChangeScheduleRender}/>            
        </div>
    )      
}

export default Schedule;
