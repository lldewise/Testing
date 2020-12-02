import React, { Fragment } from 'react';
import { DocumentCard, IDocumentCardPreviewProps,DocumentCardActivity, DocumentCardPreview, DocumentCardTitle, DocumentCardImage } from '@fluentui/react';
import { TestImages } from '@uifabric/example-data';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import classes from './Attachment.module.scss';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
import { getFileTypeIconProps } from '@uifabric/file-type-icons';
import { AttachmentCard } from '../../ui/AttachmentCard';
import { VideoAttachmentCard } from './../../ui/VideoAttachmentCard';
import { ImageCard } from './../../ui/ImageCard/ImageCard';
 
export const Attachment = (props) => { 

    let cardView = []
    props.item.forEach((item, i) => {
        if (item.fileType==='video') {
            cardView.push(<div className={classes.cardContainer} key={i}><VideoAttachmentCard item={item} /></div>)
        }
        else if(item.fileType==='image') {
            cardView.push(<div className={classes.cardContainer} key={i}><ImageCard item={item} /></div>)
        }
        else {
            cardView.push(<div className={classes.cardContainer} key={i}><AttachmentCard item={item} /></div>) 
        }

    });
 return (
  
        <div  className={ classes.containerAttachment }>  {cardView}</div>
  
    );
};
