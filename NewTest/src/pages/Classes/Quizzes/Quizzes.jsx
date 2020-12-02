
import React, { Fragment } from 'react';
import { QuizzesCard } from '../../../components/ui/quizzescard';
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import classes from './Quizzes.module.scss';
import { useStore } from '../../../store/store';

const _onColumnClick = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
    const { columns, items } = this.state;
    const newColumns: IColumn[] = columns.slice();
    const currColumn: IColumn = newColumns.filter(currCol => column.key === currCol.key)[0];
    newColumns.forEach((newCol: IColumn) => {
        if (newCol === currColumn) {
            currColumn.isSortedDescending = !currColumn.isSortedDescending;
            currColumn.isSorted = true;
            this.setState({
                announcedMessage: `${currColumn.name} is sorted ${currColumn.isSortedDescending ? 'descending' : 'ascending'
                    }`,
            });
        } else {
            newCol.isSorted = false;
            newCol.isSortedDescending = true;
        }
    });
    const newItems = _copyAndSort(items, currColumn.fieldName, currColumn.isSortedDescending);
    this.setState({
        columns: newColumns,
        items: newItems,
    });
};


function _copyAndSort(items: T[], columnKey: string, isSortedDescending?: boolean): T[] {
    const key = columnKey;
    return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}

const items = [{
    title: "Quiz #7",
    score: 95,
    quizDate: "Yesterday",
    uploadedBy: 'Clarrise Washington',


},
{
    title: "Quiz #6",
    score: 95,
    quizDate: "2 days ago",
    uploadedBy: 'Clarrise Washington',


},
{
    title: "Quiz #5",
    score: 25,
    quizDate: "3 days ago",
    uploadedBy: 'Clarrise Washington',


},
{
    title: "Quiz #4",
    score: 50,
    quizDate: "Last week",
    uploadedBy: 'Clarrise Washington',


},
{
    title: "Quiz #3",
    score: 95,
    quizDate: "Yesterday",
    uploadedBy: 'Clarrise Washington',


},
{
    title: "Quiz #2",
    score: 95,
    quizDate: "Yesterday",
    uploadedBy: 'Clarrise Washington',


},
{
    title: "Quiz #1",
    score: 95,
    quizDate: "Yesterday",
    uploadedBy: 'Clarrise Washington',


},
];
const columns: IColumn[] = [

    {
        key: 'column1',
        name: 'Title',
        fieldName: 'title',
        minWidth: 150,
        maxWidth: 170,
        isSorted: false,
        isSortedDescending: false,
        sortAscendingAriaLabel: 'Sorted A to Z',
        sortDescendingAriaLabel: 'Sorted Z to A',
        onColumnClick: _onColumnClick,
        data: 'string',

    },
    {
        key: 'column2',
        name: 'Score',
        fieldName: 'score',
        minWidth: 250,
        maxWidth: 270,

        data: 'number',
        onColumnClick: _onColumnClick,

    },
    {
        key: 'column3',
        name: 'Quiz',
        fieldName: 'quizDate',
        minWidth: 100,
        maxWidth: 150,
        onColumnClick: _onColumnClick,

    },
    {
        key: "column4",
        name: "Uploaded By",
        fieldName: 'uploadedBy',
        minWidth: 100,
        maxWidth: 150,

        data: 'string',
        onColumnClick: _onColumnClick,
    },
];


const Quizzes = (props) => {
    const [data] = useStore();
    let cardView = []
    props.chartData.forEach((item, i) => {
      cardView.push(<div className="ms-Grid-col ms-lg4 padR15" key={i}><QuizzesCard item={item} /></div>)
    });

    const isCompactMode = false;
    const _getKey = (item, index) => {

        return index;
    }
    const _onItemInvoked = (item) => {
        alert(`Item invoked: ${item.subject}`);
    }
    const onRenderCell = (item: IExampleItem, index: number, column: IColumn) => {
        const fieldContent = item[column.fieldName];
        let value = "-";
        if (fieldContent?.toString().length > 0) {
            if (fieldContent?.toString() !== "0"){
                value = fieldContent;
            }                
        } else {
            value = "-";
        }
        let result = <div className="ms-Grid-row"><div className="ms-Grid-col-lg12">
            <span className={classes.detailslist}>{value}</span>

        </div></div>
        const grade = item.score<75?    <div className={classes.progressBarFail} style={{width: item.score+"%"}}></div> : <div className={classes.progressBarPass} style={{width: item.score+"%"}}></div>
        const gradeLabel = item.score<75? <label className={classes.scoreFailLabel}>{item.score}%</label> : <label className={classes.scorePassLabel}>{item.score}%</label>
        if (column.data === "number") {
             result = 
             <div className={"ms-Grid-row " + classes.scoreMargin}>
                 {/* <progress className max="100" value={item.score}></progress> */}
                 <div className={classes.progressPass}>
                    {grade}
                </div>
                {gradeLabel}
            </div>
        }
        return result
    }

    return (
        <Fragment>
            <br/>
                <div className="ms-Grid-row">
                    <div className={"ms-Grid-col ms-lg12 " + classes.recentScore}>
                        Recent Score
                    </div>
                </div>
            <br />
                <div className="ms-Grid-row">
                    <div className="ms-Grid-col ms-lg12">
                    {cardView}
                    </div>
                </div>
            <br/>

            <div className={"ms-Grid-row " + classes.divGrade}>
            <div className="ms-Grid-col ms-sm12  ms-lg12">
                <label className={classes.labelGrade}>Average Score 95%</label>
            </div>
            </div>

            <div className="ms-Grid-row" >
            <div className="ms-Grid-col ms-sm12  ms-lg12">
                <DetailsList
                    items={items}
                    columns={columns}
                    selectionMode={SelectionMode.none}
                    getKey={_getKey}
                    setKey="none"
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                    onItemInvoked={_onItemInvoked}
                    onRenderItemColumn={onRenderCell}

                />
            </div>
        </div>
            

        </Fragment>
    )
}


export default Quizzes