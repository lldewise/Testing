import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import moment from 'moment';
import eventColor from '../../../eventColor.json';
import './CalendarWeekView.scss';


class CalendarWeekView extends Component{   
  constructor(props){    
    super(props);
    this.state = {
      today : new Date()
    }
    this.handlePreviousDay = this.handlePreviousDay.bind(this);
    this.handleNextDay = this.handleNextDay.bind(this);
    this.handleTodayDay = this.handleTodayDay.bind(this);
    this.handleSelectedDate = this.handleSelectedDate.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.calendarRef = React.createRef(); 
  }

  handlePreviousDay = () => { 
    const prev = moment(this.state.today).subtract(7, 'days').format('YYYY-MM-DD');    
    this.setState({today: new Date(prev)});    
    let calendarApi = this.calendarRef.current.getApi(); 
    calendarApi.gotoDate(prev);
  } 

  handleNextDay = () =>{
    const next = moment(this.state.today).add(7, 'days').format('YYYY-MM-DD');
    this.setState({today: new Date(next)});   
    let calendarApi = this.calendarRef.current.getApi();   
    calendarApi.gotoDate(next);
  } 

  handleTodayDay = () => {
    this.setState({today: this.props.today});
    let calendarApi = this.calendarRef.current.getApi();   
    calendarApi.gotoDate(moment(this.props.today).format('YYYY-MM-DD'));
  }

  handleSelectedDate =(item) => {
    this.setState({today: item});
    let calendarApi = this.calendarRef.current.getApi();   
    calendarApi.gotoDate(moment(item).format('YYYY-MM-DD'));
  }

  handleRemoveClick = (evt, e) => {     
    const calendarApi = this.calendarRef.current.getApi();    
    if(e){
      for (let i = 0; i < evt.length; i++) {         
        let tobeAdded = calendarApi.view.calendar;  
        tobeAdded.addEvent(evt[i]);
      }  
    } else {
      for (let i = 0; i < evt.length; i++) {         
        let tobeRemove = calendarApi.getEventById(evt[i].id);  
        tobeRemove.remove();;    
      }         
    }    
  }

  feedColors = () => {
    let events = this.props.events;
    let color = eventColor.colors; 
    let colArray = [];
    let filteredEvent = [];

    for (let i = 0; i < color.length; i++) {
      for (let x = 0; x < events.length; x++) {        
        if(events[x].groupId === color[i].groupId){
          colArray = Object.assign({}, x, { "display": color[i].display, "color": color[i].color, "borderColor": color[i].borderColor });          
          filteredEvent.push(Object.assign(events[x], colArray));
        }        
      }      
    }    
    return filteredEvent;    
  }


  render(){
    let completedEvents = this.feedColors(); 
    return (  
        <div className="calendarWeekView">         
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
            headerToolbar={{
                left: "",
                center: "",
                right: ''
              }}      
            views={{
              timeGridDay: {
                titleFormat: {                  
                  month: "short",
                  day: "numeric",
                  weekday: "short"
                }                
              },
              week: {
                dayHeaderFormat: {
                  day: "numeric",
                  weekday: "short"
                }
              }
            }}
            firstDay={1}
            initialView={this.props.calView}
            initialEvents={completedEvents}
            dayMaxEvents={false}
            eventContent={renderEventContent}               
            forceEventDuration={true}
            displayEventTime={true}
            allDaySlot = {true}
            scrollTime = {'07:00:00'} 
            ref={this.calendarRef}   
            slotMinTime = {'07:00:00'}    
            slotMaxTime = {'20:00:00'}             
          />                      
        </div> 
    );
  }
}

function renderEventContent(eventInfo) {    
    let a = moment(eventInfo.event.start).format('YYYY-MM-DD');
    let b = moment(new Date()).format('YYYY-MM-DD');
    let col = eventInfo.event.borderColor;
    const calendarIcon  = {
      fontSize: "12px",
      fontWeight: 'bold',
      color: col,
      margin: "10px"
    }

    const locationIcon  = {
      fontSize: "12px",    
      marginLeft: "12px"
    }
    
    return (    
      <div className="weekViewSchedule">         
      { eventInfo.event.groupId === 'classSchedule'
      ?      
      a < b ? (<FontIcon iconName="CompletedSolid"  className="weekCompleteIcon"/>) : (<FontIcon iconName="SkypeCircleClock"  style={calendarIcon}/>)      
      : null }  
      <span><b>{eventInfo.event.title}</b></span>&nbsp;      
      <span>
          { eventInfo.timeText !== "" ? (<FontIcon iconName="POI"  style={locationIcon}/>) : null } 
          { eventInfo.event.extendedProps.location }           
      </span>
    </div>  
    );
 }

export default CalendarWeekView;