import React, { useState } from "react";
import {
    FocusZone,
    FocusZoneDirection,
} from "office-ui-fabric-react/lib/FocusZone";
import { List } from "office-ui-fabric-react/lib/List";
import { FontIcon, Icon } from "office-ui-fabric-react/lib/Icon";
import { getFileTypeIconProps } from '@uifabric/file-type-icons';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';
import classes from "./MediaList.module.scss";





export const MediaList = (props) => {
    const [itemList,setItemList]= useState(props.itemlist);

    const selecteditem=(index)=>{
        const updateItemList = [...props.itemlist];        
        updateItemList.forEach(item=>{
                item.selected=false;
                if(item.index===index) item.selected=true;
        });
        setItemList(updateItemList);
    }
    const _onChange=(isChecked,index)=>{        
        const updateItemList = [...props.itemlist];        
        updateItemList.forEach(item=>{
                item.selected=false;
                if(item.index===index) item.checked=!isChecked;
        });
        setItemList(updateItemList);
    }

    const onRenderCell = (item: IExampleItem, index: number, isScrolling: boolean) => {
        const depth = item.selected ? 'ms-depth-8 ' + classes.itemCell : classes.itemCell;
        let checkbox =null;
        
        if(item.selected){
            checkbox =<Checkbox className={classes.checkboxdiv} onChange={()=>{_onChange(item.checked,item.index)}} />
            if(item.checked)
            checkbox =<Checkbox className={classes.checkboxdiv} defaultChecked onChange={()=>{_onChange(item.checked,item.index)}} />                       
        }
        

        if(item.checked && !item.selected){
            checkbox =<Checkbox className={classes.checkboxdiv} defaultChecked onChange={()=>{_onChange(item.index)}} />                       
        }
        


        const shared = item.selected ? <div className={classes.itemSingle}> <FontIcon iconName="MoreVertical" /></div> : null;
        const myicon = item.icon.length > 0 ? <Icon  {...getFileTypeIconProps({ extension: item.icon, size: 40, imageFileType: 'png' })} /> : <FontIcon className={classes.fontIcon} iconName={item.fonticon} />
        return (
            <div className={classes.mb2 + ' ' + classes.itemhover}  onClick={()=>{selecteditem(item.index)}}>
                {/* props.updateSelected.bind(this, item) */}
                <div className={depth} onClick={() => { }}  >
                    <div className={classes.divCheck}>           
                            {checkbox}                                        
                    </div>
                    <div>
                        {myicon}
                    </div>
                    <div className={classes.itemContent}>
                        <div className={classes.itemName}>{item.name}</div>
              
                    </div>
                    {shared}
                    <div>
                        <div className={classes.itemSingle}>Oct 2</div>
                    </div>
                    <div>
                        <div className={classes.itemSingle}>Submitted</div>
                    </div>
                    <div>
                        <div className={classes.itemSingle}>{item.selected}</div>
                    </div>
                    <div>
                        <div className={classes.itemSingle}>
                            <FontIcon iconName="Edit" className={classes.iconEdit} />
                        </div>
                    </div>

                    <div className="floatR">
                        <div className={classes.listrightwidth}>
                            <div>
                                <span className={classes.itemDetailsBold}>{item.createdby}</span>
                                <span> edited</span>
                            </div>
                            <div className={classes.itemDetails}>{item.lastupdated}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="ms-Grid-row" >
            <div className="ms-Grid-col ms-sm12  ms-lg12">
                <div className="ms-Grid-row ">
                    <div className="ms-Grid-col ms-sm12  ms-lg12 bclist ">

                        <div className="ms-Grid-row ">
                            <div className={classes.assignmentDetails}>
                                <FocusZone direction={FocusZoneDirection.vertical}>
                                    <div className={classes.container} data-is-scrollable>
                                        <List items={itemList} onRenderCell={onRenderCell} />
                                    </div>
                                </FocusZone>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};


