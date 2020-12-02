import { initStore } from '../store';
import excel from "../../assets/images/office/excel.PNG";
import powerpoint from "../../assets/images/office/powerpoint.PNG";

const initialState = {
  assignmentlist: [
    {
      name: "Book Report",
      item: "Literature",
      index: 1,
      isScrolling: true,
      icon: "docx",
      selected: true,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"",
      
    },
    {
      name: "Equation",
      item: "Math",
      index: 2,
      isScrolling: true,
      icon: "xlsx",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"",
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
      fonticon:""
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
      fonticon:""
    }

  ],
  homeworklist: [
    {
      name: "Answer workbook (pages 18-20)",
      item: "Math",
      index: 1,
      isScrolling: true,
      icon: "",
      selected: true,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:"PenWorkspace"
      
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
      fonticon:"ReadingMode"
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
      fonticon:"SearchIssue"
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
      fonticon:"ReadingMode"
    }
   
  ],
  documentslist: [
    {
      name: "Introduction",
      item: "Literature",
      index: 1,
      isScrolling: true,
      icon: "docx",
      selected: true,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:""
    },
    {
      name: "Module",
      item: "Math",
      index: 2,
      isScrolling: true,
      icon: "docx",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:""
    },
    {
      name: "Reading Material",
      item: "History",
      index: 3,
      isScrolling: false,
      icon: "docx",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:""
    },
    {
      name: "Lesson",
      item: "English",
      index: 4,
      isScrolling: false,
      icon: "docx",
      selected: false,
      createdby:"Mona Kane",
      lastupdated:"Mon at 3:58 PM",
      fonticon:""
    }
  ]
}

const configureStore = () => {
  const actions = {

    Update_Selected: (curState, assignmentId) => {

      const listIndex = curState.assignmentlist.findIndex(p => p.index === assignmentId);
      const newStatus = !curState.assignmentlist[listIndex].selected;
      const updatedList = [...curState.assignmentlist];
      updatedList.map(item => {
        return item.selected = false;
      });
      updatedList[listIndex] = {
        ...curState.assignmentlist[listIndex],
        selected: newStatus
      };
      return { assignmentlist: updatedList };
    },

    showMore: (curState) => {
      const addedList = [{
        name: "Equation",
        item: "Math",
        index: 4,
        isScrolling: true,
        thumbnail: excel,
        selected: false
      },
      {
        name: "Presentation",
        item: "History",
        index: 5,
        isScrolling: false,
        thumbnail: powerpoint,
        selected: false
      }];

      const updateList = [...curState.assignmentlist];
      let x = updateList.length;
      addedList.map(item => {
        x++;
        item.index = x;
        return updateList.push(item);
      });
      return { assignmentlist: updateList };;

    }
  };

  initStore(actions, initialState)
};

export default configureStore;