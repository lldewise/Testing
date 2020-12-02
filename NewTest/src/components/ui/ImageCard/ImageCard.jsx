import React, { Fragment } from 'react';
 
import classes from './ImageCard.module.scss';
 
export const ImageCard = (props) => {

    return (
        <Fragment>
            <div className={"ms-Grid-col " + classes.container} >            
                    <div className={"ms-Grid-col lg4 "+ classes.divpad10X}>
               
                    <img height='150px' src={props.item.src} />
                    {/* <div className={classes.itemIndex + " " +classes.title}>{props.item.fileName}</div> */}
                </div>
            </div>  
 
    </Fragment> 
    )
}