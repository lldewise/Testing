import React, { Fragment } from 'react';
import {Image} from 'react'
import classes from './AttachmentCard.module.scss';
import { FontIcon,Icon } from "office-ui-fabric-react/lib/Icon";
import { getFileTypeIconProps } from '@uifabric/file-type-icons';
import { DocumentCard, DocumentCardImage, DocumentCardPreview, DocumentCardTitle } from '@fluentui/react';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';

import ReactPlayer from "react-player"

export const AttachmentCard = (props) => {
    const myicon = props.item.icon.length > 0 ?
        <Icon  {...getFileTypeIconProps({ extension: props.item.icon, size: 32, imageFileType: 'png' })} /> :
       <fontIcon className={classes.fontIcon} iconName={props.item.fonticon} />
      
    return (
        <Fragment>
            <div className={"ms-Grid-col " + classes.container} >    
               
                    <div className={"ms-Grid-col lg4 "+ classes.AttachmentCard}>
                            {myicon}
                        <div className={classes.title}> {props.item.fileName}</div>
                    </div>
 
            </div>
                    {/* <div className={classes.itemIndex + " " +classes.title}>{props.item.fileName}</div> */}
              
             
    </Fragment> 
    )
}