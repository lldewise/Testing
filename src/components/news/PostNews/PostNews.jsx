import React from 'react';
import classes from './PostNews.module.scss';
import {
    DocumentCard,
    //DocumentCardPreview,
    DocumentCardTitle,
    //IDocumentCardPreviewProps,
} from 'office-ui-fabric-react/lib/DocumentCard';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";



export const PostNews = React.memo(props => {

    const examplePersona = {
        imageUrl: props.item.persona,
        imageInitials: props.item.initial
    };

    // const previewProps = {
    //     previewImages: [
    //         {
    //             previewImageSrc: props.item.image,
    //             imageFit: ImageFit.cover,
    //             width: 318,
    //             height: 196,
    //         },
    //     ],
    // };

    return (

        <div className={classes.newContent}>
            <DocumentCard className={classes.documentRaduis} 
                aria-label="Default Document Card with large file name. Created by Annie Lindqvist a few minutes ago."
            >
                {/* <DocumentCardPreview className={classes.documentRaduis} {...previewProps} /> */}
                <div><div className={classes.imageDiv}>
                    <img src={props.item.image} className={classes.imageList} alt={props.item.image} />
                </div></div>
                <DocumentCardTitle className={classes.padTBTitle}
                    title={props.item.title
                    }
                    shouldTruncate
                />
                <div className="ms-Grid-row">
                    <div className={"ms-Grid-col ms-lg-12 " + classes.padBName}>
                        <div className="ms-Grid-col  ms-lg-1 ">
                            <div className={classes.imagePad}>
                                <Persona
                                    {...examplePersona}
                                    size={PersonaSize.size32}
                                    presence={props.item.status}
                                    hidePersonaDetails={true}
                                />
                            </div>
                        </div>
                        <div className="ms-Grid-col  ms-lg-11 ">
                            <div className="ms-Grid-row"><span className={classes.personaName}>{props.item.name}</span></div>
                            <div className="ms-Grid-row"><span className={classes.personSecondary}>October 2020</span>
                                <span className={"pad10 " + classes.personSecondary}><FontIcon className={classes.fontIcon} iconName={props.item.icon} /></span>
                                <span className={classes.personSecondary + " " + classes.newtyoe}>{props.item.type}</span></div>
                        </div>
                    </div>
                </div>
            </DocumentCard>
        </div>


    );
});
