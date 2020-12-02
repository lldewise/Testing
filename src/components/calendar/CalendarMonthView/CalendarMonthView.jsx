import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ScheduleDailyList from '../../calendar/ScheduleDailyList/ScheduleDailyList';
import eventColor from '../../../eventColor.json';
import moment from 'moment';
import './CalendarMonthView.scss';

class CalendarMonthView extends Component{   
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
    this.feedColors = this.feedColors.bind(this);
    this.calendarRef = React.createRef();     
  }

  handlePreviousDay = () => { 
    const prev = moment(this.state.today).subtract(1, 'months').format('YYYY-MM-DD');    
    this.setState({today: new Date(prev)});    
    let calendarApi = this.calendarRef.current.getApi(); 
    calendarApi.gotoDate(prev);
  } 

  handleNextDay = () =>{
    const next = moment(this.state.today).add(1, 'months').format('YYYY-MM-DD');
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
    const dayEvent = this.props.events.filter(a => moment(a.start).format("YYYY-MM-DD") === moment(new Date()).format("YYYY-MM-DD"));       
    return (  
      <div>
        <div className="ms-Grid-col ms-lg9 calendarMonthView">         
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
            dayMaxEventRows={true}            
            headerToolbar={{
                left: "",
                center: "",
                right: ''
              }}      
            views={{
              dayGridMonth: {
                dayMaxEventRows: 3
              },
              month: {
                dayHeaderFormat: {
                  weekday: "long"
                }
              }
            }}            
            firstDay={1}
            initialView={this.props.calView}
            initialEvents={completedEvents}
            eventContent={renderEventContent}  
            ref={this.calendarRef}   
          />                      
        </div> 
        <div className="ms-Grid-col ms-lg3 calendarDaySched">
          <div className="dayTitle">
           <span>{moment().format('ddd, MMM DD')}</span>
          </div>
          <div className="dayList">
            { dayEvent.map((value, i) => { 
                return (<ScheduleDailyList key={i} item={value}/>)
              })
            }                
          </div>         
        </div>
      </div>
    );    
  }
}

function renderEventContent(eventInfo) {     
  const bStyle = {
    borderRight: "0px",
    borderBottom: "0px",
    borderTop: "0px",
    borderLeft: "3px solid " + eventInfo.borderColor,
  }
  let time = moment(eventInfo.event.start).format("hA");  
    return (    
      <div className="monthViewSchedule" style={bStyle}> 
      { time !== '12AM' ? 
        (<span>{time}&nbsp;<b>{eventInfo.event.title}</b>&nbsp; { eventInfo.event.extendedProps.location }</span>)
        :
        (<span><b>{eventInfo.event.title}</b>&nbsp; { eventInfo.event.extendedProps.location }</span>) 
      }
      </div>   
  );
}

export default CalendarMonthView;