
import React, { Fragment } from 'react';
import { useStore } from '../../../store/store';
import { MediaList } from '../../../components/itemlist/MediaList'
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import classes from './Media.module.scss';

const Media = () => {
    const [data] = useStore();

    return (
        <Fragment>
            <div className="ms-Grid-row">
                <div className="ms-Grid-col ms-lg12">
                    <div className={"ms-Grid-row bclist " + classes.container}>
                        <div className={"ms-Grid-col ms-lg6 " + classes.headerFilter}>                   
                            <span className="padl5"><FontIcon iconName="Sort" className={classes.cursor} /></span>
                            <span className="padl10"> Date Created (latest-oldest)</span>
                            <span className="padl10"><FontIcon iconName="ChevronDown" className={classes.cursor} /></span>
                        </div>
                        <div className={"ms-Grid-col ms-lg6 " + classes.commandright}>                   
                            <span className="padl10"><FontIcon iconName="Sort" className={classes.cursor} /></span>
                            <span className="padl10"> New</span>
                            <span className="padl10 padR15"><FontIcon iconName="ChevronDown" className={classes.cursor} /></span>

                            <span className="padl10"><FontIcon iconName="Sort" className={classes.cursor} /></span>
                            <span className="padl10"> Upload</span>
                            <span className="padl10 padR15"><FontIcon iconName="ChevronDown" className={classes.cursor} /></span>

                            <span className="padl10"><FontIcon iconName="Sort" className={classes.cursor} /></span>
                            <span className="padl10"> Download</span>
                            <span className="padl10"><FontIcon iconName="ChevronDown" className={classes.cursor} /></span>


                        </div>
                    </div>
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-lg12">
                            <MediaList itemlist={data.mediaList} />
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}


export default Media