import React, { Fragment, useEffect, useState } from 'react';
import RightLayoutClasses from '../../components/layout/RightLayoutClasses/RightLayoutClasses';
import { Tab } from '../../components/ui/tab'
import { Breadcrumb, IBreadcrumbItem } from 'office-ui-fabric-react/lib/Breadcrumb';
import classes from './Classes.module.scss';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { useStore } from '../../store/store';
import Todos from './Todos/Todos';
import TeachersNotes from './TeachersNotes/TeachersNotes';
import Media from './Media/Media';
import Grades from './Grades/Grades';
import Quizzes from './Quizzes/Quizzes';
import MyNotes from '../../components/mynotes/MyNotes';


const items: IBreadcrumbItem[] = [
  { text: 'Classes' },
  { text: 'English' },
  { text: 'To Do', isCurrentItem: true },
];

const linkItem = [
  {

    name: "To Do",
    classname: classes.aLinkactive,
    icon: "WaitlistConfirm",
    count: 3
  },
  {
    name: "Teacher's Notes",
    classname: classes.aLink,
    icon: "Comment"
  },
  {
    name: "My Notes",
    classname: classes.aLink,
    icon: "QuickNote"
  },
  {
    name: "Media",
    classname: classes.aLink,
    icon: "Media"
  },
  {
    name: "Quizzes",
    classname: classes.aLink,
    icon: "Design"
  },
  {
    name: "Grades",
    classname: classes.aLink,
    icon: "LineChart"
  }

]
const dueSoonList = [
  {
    duedate: "Due Today",
    title: "Reaction Paper",
    postedby: "Posted by Clarrise",
    icon: "docx",
    fonticon: ""
  },
  {
    duedate: "Due tomorrow",
    title: "Reaction Paper",
    postedby: "Posted by Clarrise",
    icon: "docx",
    fonticon: ""
  },
  {
    duedate: "Due 3 days from now",
    title: "Read page 100",
    postedby: "Posted by Clarrise",
    icon: "",
    fonticon: "ReadingMode"
  }
]

const chartData = [{
    gradepercentage:95,
    gradecolor: "#8ED85F",
    gradedesc: "Almost perfect!",
    datasets: [
      {
        data: [95, 5],
        backgroundColor: ["#8ED85F", "#E1DFDD"],
        hoverBackgroundColor: ["#8ED85F", "#E1DFDD"],
      },
    ]
  },
  {
    gradepercentage:85,
    gradecolor: "#8ED85F",
    gradedesc: "Good job!",
    datasets: [
      {
        data: [85, 15],
        backgroundColor: ["#8ED85F", "#E1DFDD"],
        hoverBackgroundColor: ["#8ED85F", "#E1DFDD"],
      },
    ]
  },
  {
    gradepercentage:25,
    gradecolor: "#8ED85F",
    gradedesc: "Need help?",
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ["red", "#E1DFDD"],
        hoverBackgroundColor: ["red", "#E1DFDD"],
      },
    ]
  }
]

export default function Classes() {
  const [data] = useStore();
  const [liList, setliList] = useState();
  const [breadcrumbList, setBreadCrumb] = useState();
  const [containerTab, setContainerTab] = useState(<Todos dueSoonList={dueSoonList} />);

  const linkHandler = (value) => {
    const updatedList = [...linkItem];
    updatedList.forEach(item => {
      item.classname = classes.aLink;
      if (item.name === value.name) {
        item.classname = classes.aLinkactive;
      }
    });
    setliList(updatedList);
    updateBreadCrumbList1(value);
    updateContainerTab(value.name)
  }

  const updateBreadCrumbList1 = (value) => {
    const updatedBreadCrumb = [...items];
    const lastIndex = items.length - 1;
    updatedBreadCrumb.splice(lastIndex, 1);
    updatedBreadCrumb.push({ text: value.name, isCurrentItem: true })
    setBreadCrumb(updatedBreadCrumb);

  }

  const updateContainerTab = (value) => {
    switch (value) {
      case "To Do":
        return setContainerTab(<Todos dueSoonList={dueSoonList} />)
      case "Teacher's Notes":
        return setContainerTab(<TeachersNotes user={data.userprofile} />);
      case "Media":
        return setContainerTab(<Media />);
      case "Grades":
        return setContainerTab(<Grades />);
      case "Quizzes":
        return setContainerTab(<Quizzes chartData={chartData}/>);
      case "My Notes":
        return setContainerTab(<MyNotes />);
      default:
        return setContainerTab(<Todos dueSoonList={dueSoonList} />)
    }
  }

  useEffect(() => {
    setBreadCrumb(items);
    const updatedList = [...linkItem];
    updatedList.forEach(item => {
      item.classname = classes.aLink;
      if (item.name === "To Do") {
        item.classname = classes.aLinkactive;
      }
    });
    setliList(updatedList);
  }, [])

  return (
    <Fragment>
      <div className="ms-Grid-row">
        <div className={"ms-Grid-col ms-lg12 " + classes.borderbot}>
          <div className="ms-Grid-col ms-lg8">
            <Breadcrumb
              items={breadcrumbList}
              maxDisplayedItems={10}
              ariaLabel="Breadcrumb with items rendered as buttons"
              overflowAriaLabel="More links"
              className={classes.BreadcrumbContainer}
            />
          </div>

          <div className={"ms-Grid-col  ms-lg4 text-right " + classes.padUS}>
            <span className="padl10">
              <FontIcon iconName="CalculatorAddition" className={classes.iconColor} />
            </span>
            <span className={"padl10 " + classes.uploadText}> Add Notes</span>
            <span className="padl10">
              <FontIcon iconName="Upload" className={classes.iconColor} />
            </span>
            <span className={"padl10 " + classes.uploadText}> Upload Homework</span>
          </div>
        </div>
      </div>



      <div className={"ms-Grid-row "}>
        <div className={"ms-Grid-col ms-lg12 "}>
          <div className={"ms-Grid-col ms-lg9 hideScroll " + classes.container}>

            <br />
            <div className="ms-Grid-row">
              <div className={"ms-Grid-col ms-lg12 " + classes.titleSubject}>
                {data.classesInfo.selectedClass}
              </div>
            </div>
            <br />
            <br />

            <div className="ms-Grid-row">
              <div className={"ms-Grid-col ms-lg12 " + classes.borderbottab} >
                <Tab linkClick={linkHandler} border={true} liList={liList} />
              </div>
            </div>

            <div className="ms-Grid-row">
              <div className="ms-Grid-col ms-lg12" >
                {containerTab}
              </div>
            </div>
          </div>
          <div className={"ms-Grid-col ms-lg3 " + classes.righLayout}>
            <RightLayoutClasses />
          </div>

        </div>
      </div>

    </Fragment>
  )
}
