import React, { Fragment, useEffect, useState } from 'react';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import classes from './NewsFeeds.module.scss';

export const NewsFeeds = React.memo(props => {
    const [divHeight, setDivHeight] = useState(0);
    const [divComment, setDivComment] = useState("");
    const [seeMore, setseeMore] = useState("");
    const [attachment, setAttachment] = useState("");
    const examplePersona = {
        imageUrl: props.item.persona,
        imageInitials: props.item.initial
    };


    const getDivHeight = (divElement) => {
        if (divElement) {
            setDivHeight(divElement.clientHeight)
        }
    }

    useEffect(() => {
        if (divHeight > 87) {
            console.log("Ulit ")
            console.log(props.item.comments);
            const comment = (<div>
                <div className={classes.divComment}
                    dangerouslySetInnerHTML={{ __html: props.item.comments }}
                >
                </div><div className="fade"></div></div>

            );
            setDivComment(comment);
            setseeMore(seeMoreDiv);
        }
    }, [divHeight])

    useEffect(() => {
        setDivComment(<div            
            ref={(divElement) => {
                getDivHeight(divElement)
            }}
            dangerouslySetInnerHTML={{ __html: props.item.comments }}
        >
        </div>);
    }, [props.item.comments])

    const seeMoreHandler = (value) => {
        const comment = (
            <div
                dangerouslySetInnerHTML={{ __html: value }}
            >
            </div>
        );
        setDivComment(comment);
        setseeMore(hideMoreDiv);
    }

    const hideHandler = (value) => {
        const comment = (<div>
            <div className={classes.divComment}
                dangerouslySetInnerHTML={{ __html: value}}
            >
            </div><div className="fade"></div></div>
        );
        setDivComment(comment);
        setseeMore(seeMoreDiv);
    }


    const seeMoreDiv = () => {
        const updatedSeeMore = (<div className={"ms-Grid-col ms-lg12 " + classes.seeMore} onClick={() => {
            seeMoreHandler(props.item.comments)
        }}>See More
        </div>);
        return updatedSeeMore
    }

    const hideMoreDiv = () => {
        const updatedSeeMore = (<div className={"ms-Grid-col ms-lg12 " + classes.seeMore} onClick={() => {
            hideHandler(props.item.comments)
        }}>See Less
        </div>);
        return updatedSeeMore;
    }

/*     const previewProps  = {
        previewImages: [
          {
            name: 'Revenue stream proposal fiscal year 2016 version02.pptx',
            linkProps: {
              href: 'http://bing.com',
              target: '_blank',
            },
            previewImageSrc: TestImages.documentPreview,
            iconSrc: TestImages.iconPpt,
            imageFit: ImageFit.cover,
            width: 318,
            height: 196,
          },
        ],
      }; */
      
    return (
        <Fragment>
            <div className="ms-Grid-row">
                <div className={"ms-Grid-col ms-lg12 " + classes.container}>
                    <div className="ms-Grid-row">
                        <div className={"ms-Grid-col ms-lg12 " + classes.containerPad}>
                            <div className="ms-Grid-row">
                                <div className={"ms-Grid-col ms-lg12 "}>
                                    <div className="ms-Grid-col ms-lg1">
                                        <Persona
                                            {...examplePersona}
                                            size={PersonaSize.size48}
                                            presence={props.item.status}
                                            hidePersonaDetails={true}
                                        />
                                    </div>
                                    <div className="ms-Grid-col ms-lg11">
                                        <div className={classes.divname}><span className={classes.name}>{props.item.name}</span> posted this</div>
                                        <div><span><FontIcon className={classes.fontIcon} iconName="People" /></span>
                        Shared
                        <span><FontIcon className={classes.fontIcon} iconName="LocationDot" /></span>
                                            <span>{props.item.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ms-Grid-row">
                                <div className="ms-Grid-col ms-lg12">
                                    {divComment}
                                </div>
                            </div>
                            <div className="ms-Grid-row">
                                {seeMore}
                            </div>
                         
                       
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
});
