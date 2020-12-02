import moment from 'moment';

let eventGuid = 0

let Nov2 = moment("2020-11-02").format("YYYY-MM-DD");
let Nov3 = moment("2020-11-03").format("YYYY-MM-DD");
let Nov4 = moment("2020-11-04").format("YYYY-MM-DD");
let Nov5 = moment("2020-11-05").format("YYYY-MM-DD");
let Nov6 = moment("2020-11-06").format("YYYY-MM-DD");
let Nov9 = moment("2020-11-09").format("YYYY-MM-DD");
let Nov10 = moment("2020-11-10").format("YYYY-MM-DD");
let Nov11 = moment("2020-11-11").format("YYYY-MM-DD");
let Nov12 = moment("2020-11-12").format("YYYY-MM-DD");
let Nov13 = moment("2020-11-13").format("YYYY-MM-DD");
let Nov16 = moment("2020-11-16").format("YYYY-MM-DD");
let Nov17 = moment("2020-11-17").format("YYYY-MM-DD");
let Nov18 = moment("2020-11-18").format("YYYY-MM-DD");
let Nov19 = moment("2020-11-19").format("YYYY-MM-DD");
let Nov20 = moment("2020-11-20").format("YYYY-MM-DD");
let Nov23 = moment("2020-11-23").format("YYYY-MM-DD");
let Nov24 = moment("2020-11-24").format("YYYY-MM-DD");
let Nov25 = moment("2020-11-25").format("YYYY-MM-DD");
let Nov26 = moment("2020-11-26").format("YYYY-MM-DD");
let Nov27 = moment("2020-11-27").format("YYYY-MM-DD");
let Nov30 = moment("2020-11-30").format("YYYY-MM-DD");
let Dec1 = moment("2020-12-01").format("YYYY-MM-DD");
let Dec2 = moment("2020-12-02").format("YYYY-MM-DD");
let Dec3 = moment("2020-12-03").format("YYYY-MM-DD");
let Dec4 = moment("2020-12-04").format("YYYY-MM-DD");
let Dec7 = moment("2020-12-07").format("YYYY-MM-DD");
let Dec8 = moment("2020-12-08").format("YYYY-MM-DD");
let Dec9 = moment("2020-12-09").format("YYYY-MM-DD");
let Dec10 = moment("2020-12-10").format("YYYY-MM-DD");
let Dec11 = moment("2020-12-11").format("YYYY-MM-DD");


export const MONTH_EVENTS = [  
  {
    id: createEventId(),
    title: 'English',
    start: Nov2 + 'T08:00:00',
    end: Nov2 + 'T08:45:00',
    location: "R.302 A", 
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov2 + 'T09:00:00',
    end: Nov2 + 'T09:45:00',
    location: "R.302 B",    
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: Nov2 + 'T10:00:00',
    end: Nov2 + 'T11:00:00',
    location: "LAB A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: Nov2 + 'T11:00:00',
    end: Nov2 + 'T12:00:00',
    location: "LAB B",  
    groupId: "classSchedule"
  }, 
  {
    id: createEventId(),
    title: 'Chemistry',
    start: Nov3 + 'T11:00:00',
    end: Nov3 + 'T12:00:00',
    location: "LAB B",  
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Social Studies',
    start: Nov3 + 'T13:00:00',
    end: Nov3 + 'T13:45:00',
    location: 'R.101 C',  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Nov3 + 'T08:00:00',
    end: Nov3 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov4 + 'T09:00:00',
    end: Nov4 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: Nov4 + 'T10:00:00',
    end: Nov4 + 'T11:00:00',
    location: "LAB A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: Nov5 + 'T11:00:00',
    end: Nov5 + 'T12:00:00',
    location: "LAB B",  
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Social Studies',
    start: Nov5 + 'T13:00:00',
    end: Nov5 + 'T13:45:00',
    location: 'R.101 C',  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Football Practice',
    start: Nov6 + 'T15:00:00',
    end: Nov6 + 'T15:30:00',
    location: 'Footbal Field',  
    groupId: "private"
  },  
  {
    id: createEventId(),
    title: 'English',
    start: Nov6 + 'T08:00:00',
    end: Nov6 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov9 + 'T09:00:00',
    end: Nov9 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: Nov9 + 'T10:00:00',
    end: Nov9 + 'T11:00:00',
    location: "LAB A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: Nov10 + 'T11:00:00',
    end: Nov10 + 'T12:00:00',
    location: "LAB B",     
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Social Studies',
    start: Nov10 + 'T13:00:00',
    end: Nov10 + 'T13:45:00',
    location: 'R.101 C', 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'SC Meeting',
    start: Nov11 + 'T15:00:00',
    end: Nov11 + 'T15:30:00',
    location: 'Auditorium',
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov11 + 'T09:00:00',
    end: Nov2 + 'T09:45:00',
    location: "R.302 B", 
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'English',
    start: Nov12 + 'T08:00:00',
    end: Nov12 + 'T08:45:00',
    location: "R.302 A",
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov12 + 'T09:00:00',
    end: Nov12 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: Nov13 + 'T10:00:00',
    end: Nov13 + 'T11:00:00',
    location: "LAB A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: Nov13 + 'T11:00:00',
    end: Nov13 + 'T12:00:00',
    location: "LAB B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Lunch With Jens',
    start: Nov16 + 'T12:00:00',
    end: Nov16 + 'T12:30:00',
    location: "Cafeteria",  
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'Social Studies',
    start: Nov16 + 'T13:00:00',
    end: Nov16 + 'T13:45:00',
    location: 'R.101 C',  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Exams',
    start: Nov17 + 'T14:00:00',
    end: Nov17 + 'T15:00:00',
    location: 'R.201 A', 
    groupId: "exam"
  },  
  {
    id: createEventId(),
    title: 'English',
    start: Nov17 + 'T08:00:00',
    end: Nov17 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'Exams',
    start: Nov18 + 'T14:00:00',
    end: Nov18 + 'T15:00:00',
    location: 'R.201 A',  
    groupId: "exam"
  },  
  {
    id: createEventId(),
    title: 'Biology',
    start: Nov18 + 'T10:00:00',
    end: Nov18 + 'T11:00:00',
    location: "LAB A",  
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'English',
    start: Nov19 + 'T08:00:00',
    end: Nov19 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov19 + 'T09:00:00',
    end: Nov19 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: Nov19 + 'T10:00:00',
    end: Nov19 + 'T11:00:00',
    location: "LAB A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: Nov19 + 'T11:00:00',
    end: Nov19 + 'T12:00:00',
    location: "LAB B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Lunch With Jens',
    start: Nov19 + 'T12:00:00',
    end: Nov19 + 'T12:30:00',
    location: "Cafeteria",  
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'Social Studies',
    start: Nov19 + 'T13:00:00',
    end: Nov19 + 'T13:45:00',
    location: 'R.101 C', 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Exams',
    start: Nov19 + 'T14:00:00',
    end: Nov19 + 'T15:00:00',
    location: 'R.201 A', 
    groupId: "exam"
  },    
  {
    id: createEventId(),
    title: 'English',
    start: Nov20 + 'T08:00:00',
    end: Nov20 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov20 + 'T09:00:00',
    end: Nov20 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Biology',
    start: Nov20 + 'T10:00:00',
    end: Nov20 + 'T11:00:00',
    location: "LAB A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: Nov20 + 'T11:00:00',
    end: Nov20 + 'T12:00:00',
    location: "LAB B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Lunch With Jens',
    start: Nov20 + 'T12:00:00',
    end: Nov20 + 'T12:30:00',
    location: "Cafeteria",  
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'Social Studies',
    start: Nov20 + 'T13:00:00',
    end: Nov20 + 'T13:45:00',
    location: 'R.101 C', 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Exams',
    start: Nov20 + 'T14:00:00',
    end: Nov20 + 'T15:00:00',
    location: 'R.201 A',  
    groupId: "exam"
  },  
  {
    id: createEventId(),
    title: 'SC Meeting',
    start: Nov20 + 'T15:00:00',
    end: Nov20 + 'T15:30:00',
    location: 'Auditorium',  
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'Foundation Day',
    start: Nov23,
    location: "School Ground",  
    groupId: "schoolEvent"
  },  
  {
    id: createEventId(),
    title: 'Biology',
    start: Nov23 + 'T10:00:00',
    end: Nov23 + 'T11:00:00',
    location: "LAB A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Chemistry',
    start: Nov23 + 'T11:00:00',
    end: Nov23 + 'T12:00:00',
    location: "LAB B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Lunch With Jens',
    start: Nov23 + 'T12:00:00',
    end: Nov23 + 'T12:30:00',
    location: "Cafeteria",  
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'Social Studies',
    start: Nov23 + 'T13:00:00',
    end: Nov23 + 'T13:45:00',
    location: 'R.101 C',  
    groupId: "classSchedule"
  },  
  {
    id: createEventId(),
    title: 'SC Meeting',
    start: Nov23 + 'T15:00:00',
    end: Nov23 + 'T15:30:00',
    location: 'Auditorium',  
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Nov23 + 'T18:00:00',
    end: Nov23 + 'T18:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov23 + 'T19:00:00',
    end: Nov23 + 'T19:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Football Practice',
    start: Nov23 + 'T20:00:00',
    end: Nov23 + 'T20:30:00',
    location: 'Footbal Field',  
    groupId: "private"
  },  
  {
    id: createEventId(),
    title: 'English',
    start: Nov24 + 'T08:00:00',
    end: Nov24 + 'T08:45:00',
    location: "R.302 A", 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov24 + 'T09:00:00',
    end: Nov24 + 'T09:45:00',
    location: "R.302 B", 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'SC Meeting',
    start: Nov24 + 'T15:00:00',
    end: Nov24 + 'T15:30:00',
    location: 'Auditorium',  
    groupId: "private"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Nov25 + 'T08:00:00',
    end: Nov25 + 'T08:45:00',
    location: "R.302 A", 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov25 + 'T09:00:00',
    end: Nov25 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Exams',
    start: Nov25 + 'T18:00:00',
    end: Nov25 + 'T18:45:00',
    location: 'R.201 A',  
    groupId: "exam"
  },  
  {
    id: createEventId(),
    title: 'English',
    start: Nov26 + 'T08:00:00',
    end: Nov26 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov26 + 'T09:00:00',
    end: Nov26 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Nov27 + 'T08:00:00',
    end: Nov27 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov27 + 'T09:00:00',
    end: Nov27 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Nov30 + 'T08:00:00',
    end: Nov30 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Nov30 + 'T09:00:00',
    end: Nov30 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Dec1 + 'T08:00:00',
    end: Dec1 + 'T08:45:00',
    location: "R.302 A", 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Dec1 + 'T09:00:00',
    end: Dec1 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Dec2 + 'T08:00:00',
    end: Dec2 + 'T08:45:00',
    location: "R.302 A", 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Dec2 + 'T09:00:00',
    end: Dec2 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Dec3 + 'T08:00:00',
    end: Dec3 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Dec3 + 'T09:00:00',
    end: Dec3 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Dec4 + 'T08:00:00',
    end: Dec4 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Dec4 + 'T09:00:00',
    end: Dec4 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Dec7 + 'T08:00:00',
    end: Dec7 + 'T08:45:00',
    location: "R.302 A", 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Dec7 + 'T09:00:00',
    end: Dec7 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Dec8 + 'T08:00:00',
    end: Dec8 + 'T08:45:00',
    location: "R.302 A", 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Dec8 + 'T09:00:00',
    end: Dec8 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Dec9 + 'T08:00:00',
    end: Dec9 + 'T08:45:00',
    location: "R.302 A", 
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Dec9 + 'T09:00:00',
    end: Dec9 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Dec10 + 'T08:00:00',
    end: Dec10 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Dec10 + 'T09:00:00',
    end: Dec10 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'English',
    start: Dec11 + 'T08:00:00',
    end: Dec11 + 'T08:45:00',
    location: "R.302 A",  
    groupId: "classSchedule"
  },
  {
    id: createEventId(),
    title: 'Mathematics',
    start: Dec11 + 'T09:00:00',
    end: Dec11 + 'T09:45:00',
    location: "R.302 B",  
    groupId: "classSchedule"
  },
]

export function createEventId() {
  return String(eventGuid++)
}