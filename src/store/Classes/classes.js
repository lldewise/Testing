import { initStore } from '../store';
const initialState = {
  classesInfo:
  {
    selectedClass: "English",
  },
  mediaList: [
    {
      name: "Reading Material",
      item: "Literature",
      index: 1,
      isScrolling: true,
      icon: "docx",
      selected: true,
      createdby: "Mona Kane",
      lastupdated: "Mon at 3:58 PM",
      fonticon: "",
      check:false
    },
    {
      name: "English Notes",
      item: "Math",
      index: 2,
      isScrolling: true,
      icon: "docx",
      selected: false,
      createdby: "Mona Kane",
      lastupdated: "Mon at 3:58 PM",
      fonticon: "",
      check:false
    },
    {
      name: "Lesson-Oct2",
      item: "History",
      index: 3,
      isScrolling: false,
      icon: "pptx",
      selected: false,
      createdby: "Mona Kane",
      lastupdated: "Mon at 3:58 PM",
      fonticon: "",
      checked:false
    },
    {
      name: "Schedule",
      item: "History",
      index: 4,
      isScrolling: false,
      icon: "docx",
      selected: false,
      createdby: "Mona Kane",
      lastupdated: "Mon at 3:58 PM",
      fonticon: "",
      checked:false
    }

  ],
  classesassignmentlist: [
    {
      name: "Book Report",
      item: "Literature",
      index: 1,
      isScrolling: true,
      icon: "docx",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"",
      uploaded:true
    },
    {
      name: "Equation",
      item: "Math",
      index: 2,
      isScrolling: true,
      icon: "xls",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"",
      uploaded:false
    },
    {
      name: "Presentation",
      item: "History",
      index: 3,
      isScrolling: false,
      icon: "pptx",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"",
      uploaded:false
    },
    {
      name: "Reading Papers",
      item: "English",
      index: 4,
      isScrolling: false,
      icon: "pptx",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"",
      uploaded:false
    }

  ],
  classeshomeworklist: [
    {
      name: "Answer workbook (pages 18-20)",
      item: "Math",
      index: 1,
      isScrolling: true,
      icon: "",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"PenWorkspace",
      uploaded:true
      
    },
    {
      name: "Read Pages 65-70",
      item: "Biology",
      index: 2,
      isScrolling: true,
      icon: "",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"ReadingMode",
      uploaded:true
    },
    {
      name: "Research work",
      item: "History",
      index: 3,
      isScrolling: false,
      icon: "",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"SearchIssue",
      uploaded:true
    },
    {
      name: "Reading work",
      item: "English",
      index: 4,
      isScrolling: false,
      icon: "",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"ReadingMode",
      uploaded:true
    }
   
  ]
};

const configureStore = () => {
  const actions = {

    UpdateSelectedSubject: (curState, subjectName) => {
      curState.classesInfo.selectedClass = subjectName;
      const updateSelected = curState.classesInfo;
      return { classesInfo: updateSelected };
    },


  };
  initStore(actions, initialState);
};
export default configureStore;