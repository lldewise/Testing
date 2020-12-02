import moment from 'moment';

let eventGuid = 0
let todayStr = moment().format('YYYY-MM-DD');
let minusOneDayStr = moment(todayStr).subtract(1, 'days').format('YYYY-MM-DD');
let minusTwoDayStr = moment(todayStr).subtract(2, 'days').format('YYYY-MM-DD');
let minusThreeDayStr = moment(todayStr).subtract(3, 'days').format('YYYY-MM-DD');
let plusOneDayStr = moment(todayStr).add(1, 'days').format('YYYY-MM-DD');


export const INITIAL_EVENTS = [  
  {
    id: createEventId(),
    title: 'English',
    start: minusThreeDayStr + 'T08:00:00',
    end: minusThreeDayStr + 'T08:45:00',
    location: "R. 302 A",
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Mathematics',
    start: minusThreeDayStr + 'T09:00:00',
    end: minusThreeDayStr + 'T09:45:00',
    location: "R. 302 B",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: minusThreeDayStr + 'T10:00:00',
    end: minusThreeDayStr + 'T11:00:00',
    location: "LAB A",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: minusThreeDayStr + 'T11:00:00',
    end: minusThreeDayStr + 'T12:00:00',
    location: "LAB B",
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Social Studies',
    start: minusThreeDayStr + 'T13:00:00',
    end: minusThreeDayStr + 'T13:45:00',
    location: 'R. 101 C',
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: minusTwoDayStr + 'T08:00:00',
    end: minusTwoDayStr + 'T08:45:00',
    location: "R. 302 A",
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Mathematics',
    start: minusTwoDayStr + 'T09:00:00',
    end: minusTwoDayStr + 'T09:45:00',
    location: "R. 302 B",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: minusTwoDayStr + 'T10:00:00',
    end: minusTwoDayStr + 'T11:00:00',
    location: "LAB A",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: minusTwoDayStr + 'T11:00:00',
    end: minusTwoDayStr + 'T12:00:00',
    location: "LAB B",
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Social Studies',
    start: minusTwoDayStr + 'T13:00:00',
    end: minusTwoDayStr + 'T13:45:00',
    location: 'R. 101 C',
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Football Practice',
    start: minusTwoDayStr + 'T15:00:00',
    end: minusTwoDayStr + 'T15:30:00',
    location: 'Footbal Field',
    groupId: "private"
  },  
  {
    id: createEventId(),
    title: 'English',
    start: minusOneDayStr + 'T08:00:00',
    end: minusOneDayStr + 'T08:45:00',
    location: "R. 302 A",
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Mathematics',
    start: minusOneDayStr + 'T09:00:00',
    end: minusOneDayStr + 'T09:45:00',
    location: "R. 302 B",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: minusOneDayStr + 'T10:00:00',
    end: minusOneDayStr + 'T11:00:00',
    location: "LAB A",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: minusOneDayStr + 'T11:00:00',
    end: minusOneDayStr + 'T12:00:00',
    location: "LAB B",
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Social Studies',
    start: minusOneDayStr + 'T13:00:00',
    end: minusOneDayStr + 'T13:45:00',
    location: 'R. 101 C',
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'SC Meeting',
    start: minusOneDayStr + 'T15:00:00',
    end: minusOneDayStr + 'T15:30:00',
    location: 'Auditorium',
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'Foundation Day',
    start: todayStr,
    groupId: "schoolEvent"
  },
  {
    id: createEventId(),
    title: 'English',
    start: todayStr + 'T08:00:00',
    end: todayStr + 'T08:45:00',
    location: "R. 302 A",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: todayStr + 'T09:00:00',
    end: todayStr + 'T09:45:00',
    location: "R. 302 B",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: todayStr + 'T10:00:00',
    end: todayStr + 'T11:00:00',
    location: "LAB A",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: todayStr + 'T11:00:00',
    end: todayStr + 'T12:00:00',
    location: "LAB B",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Lunch With Jens',
    start: todayStr + 'T12:00:00',
    end: todayStr + 'T12:30:00',
    location: "Cafeteria",
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'Social Studies',
    start: todayStr + 'T13:00:00',
    end: todayStr + 'T13:45:00',
    location: 'R. 101 C',
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Exams',
    start: todayStr + 'T14:00:00',
    end: todayStr + 'T15:00:00',
    location: 'R. 201 A',
    groupId: "exam"
  },  
  {
    id: createEventId(),
    title: 'English',
    start: plusOneDayStr + 'T08:00:00',
    end: plusOneDayStr + 'T08:45:00',
    location: "R. 302 A",
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Exams',    
    start: plusOneDayStr + 'T09:00:00',
    end: plusOneDayStr + 'T09:45:00',
    location: 'R. 201 A',
    groupId: "exam"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: plusOneDayStr + 'T10:00:00',
    end: plusOneDayStr + 'T11:00:00',
    location: "LAB A",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: plusOneDayStr + 'T11:00:00',
    end: plusOneDayStr + 'T12:00:00',
    location: "LAB B",
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Social Studies',
    start: plusOneDayStr + 'T13:00:00',
    end: plusOneDayStr + 'T13:45:00',
    location: 'R. 101 C',
    groupId: "classSchedule"
  },
]

export function createEventId() {
  return String(eventGuid++)
}