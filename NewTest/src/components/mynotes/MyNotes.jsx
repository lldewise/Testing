import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import { DetailsList, DetailsListLayoutMode, SelectionMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';


export default function MyNotes() {


    const editor = useRef(null)
    const [content, setContent] = useState('')
    const _getKey = (item, index) => {

        return index;
    }
    const _onItemInvoked = (item) => {
        alert(`Item invoked: ${item.subject}`);
    }
	
	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    
    const items = [{
        title: "Pointers for the Exam on Monday",
    
    
    },
    {
        title: "Pointers for the Exam on Monday",

    
    
    },
    {
        title: "Pointers for the Exam on Monday",

    
    
    },
    {
        title: "Pointers for the Exam on Monday",

    
    
    },
    {
        title: "Pointers for the Exam on Monday",

    
    
    },
    {
        title: "Pointers for the Exam on Monday",

    
    
    },
    {
        title: "Pointers for the Exam on Monday",

    
    },
    ];
    const columns: IColumn[] = [
    
        {
            key: 'column1',
            name: '+ Add Note',
            fieldName: 'title',
            minWidth: 150,
            maxWidth: 170,
            isSorted: false,
            isSortedDescending: false,
            sortAscendingAriaLabel: 'Sorted A to Z',
            sortDescendingAriaLabel: 'Sorted Z to A',
            data: 'string',
    
        }
    ];

    return (
        <div className="ms-Grid-row ">
            <br/> 
            <div className="ms-Grid-col ms-lg12">
            <div className="ms-Grid-col ms-lg3">
            <DetailsList
                    items={items}
                    columns={columns}
                    selectionMode={SelectionMode.none}
                    getKey={_getKey}
                    setKey="none"
                    layoutMode={DetailsListLayoutMode.justified}
                    isHeaderVisible={true}
                    onItemInvoked={_onItemInvoked}

                />
            </div>
            <div className="ms-Grid-col ms-lg9">
            <JoditEditor
            	ref={editor}
                value={content}
                config={config}
                tabIndex={1} // tabIndex of textarea
                // onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                // onChange={newContent => {}}
            />
            </div>
            </div>

        </div>
        
    );
}
