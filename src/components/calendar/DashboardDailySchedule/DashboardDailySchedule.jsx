import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS } from "../../../util/calendar/event.utils";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import './DashboardDailySchedule.scss';
import SubjectDetail from '../SubjectDetail/SubjectDetail';
import moment from 'moment';
import word from "../../../assets/images/office/word.PNG";
import book from "../../../assets/images/office/book.PNG";
import eventColor from '../../../eventColor.json';

const todos = [
  {
    name: "Reaction Paper",
    dueDate: "Due Today",
    index: 1,
    isScrolling: true,
    thumbnail: word,
  },
  {
    name: "Read Chapter 1",
    dueDate: "Due Today",
    index: 2,
    isScrolling: true,
    thumbnail: book,
  }
];

class DailySchedule extends Component {
  constructor(props){
    super(props);
    this.state = { 
      timeSched: null, 
      title: null,
      location: null,
      isSubjectToggle: false,
      targetEl: null,
      todos: []
   };
  }    

  feedColors = () => {
    let events = INITIAL_EVENTS;
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

  render() {
    let completedEvents = this.feedColors();
    return (
      <div className="dailyCalendar">      
        <div className="todayContainer">
          <div className="day">{moment(new Date()).format('DD')}</div>
          <div className="week">{moment(new Date()).format('dddd')}</div>
        </div>
        <SubjectDetail title={this.state.title } 
                          timeSched={this.state.timeSched } 
                          location={this.state.location}
                          isSubjectToggle={this.state.isSubjectToggle}
                          targetEl={this.state.targetEl}
                          todos={this.state.todos} />  
        <div className="dailySchedule">         
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}    
            headerToolbar={{
              left: "",
              center: "prev,next",
              right: "title"
            }}            
            views={{
              timeGridDay: {
                titleFormat: {
                  year: "numeric",
                  month: "long",
                },
              },
            }}
            initialView="timeGridDay"
            initialEvents={completedEvents}
            dayMaxEvents={false}
            eventContent={renderEventContent}
            eventClick={this.handleEventClick}  
            forceEventDuration={true}
            displayEventTime={true}
            allDaySlot = {true}
            scrollTime = {'07:00:00'}    
            slotMinTime = {'07:00:00'}    
            slotMaxTime = {'20:00:00'}        
          />                      
        </div>            
      </div>
    );
  }  

  handleEventClick = (clickInfo) => {          
    const strTime = moment(clickInfo.event.start).format('h:mm');   
    const endTime = moment(clickInfo.event.end).format('h:mm');
    if(strTime !== endTime){
      this.setState(
        { 
          timeSched: strTime + ' - ' + endTime,  
          title: clickInfo.event.title,
          location: clickInfo.event.extendedProps.location,
          isSubjectToggle: !this.state.isSubjectToggle,
          targetEl: clickInfo.el,
          todos: todos
        }
      );    
    }
  }
}

function renderEventContent(eventInfo) {    
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
      <div>         
        { 
        eventInfo.timeText !== "" && eventInfo.event.groupId !== "private" && eventInfo.event.groupId !== "exam"
        ? 
        (<div>
          <FontIcon iconName="SkypeCircleClock"  style={calendarIcon}/>   
            <span><b>{eventInfo.event.title}</b></span>
          <br/> 
        </div>)        
        :
        (<div>
          <span style={locationIcon}><b>{eventInfo.event.title}</b></span><br/>
        </div>)
        }
        <span style={locationIcon}>{eventInfo.timeText}</span>&nbsp;
        <span>
           {eventInfo.timeText !== "" ? (<FontIcon iconName="POI"  style={locationIcon}/>) : null } 
           {eventInfo.event.extendedProps.location}           
        </span>
      </div>   
  );
}

export default DailySchedule;