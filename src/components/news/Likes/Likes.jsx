import React, { Fragment } from 'react';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import classes from './Likes.module.scss';


export const Likes = React.memo(props => {

    const icon = props.active ? <FontIcon iconName="HeartFill" className={classes.heartActiveIcon} /> : <FontIcon iconName="Heart" className={classes.heartIcon} />;
    const commentCount  = props.commentCount>0 ? <span>{props.commentCount } Comment</span>: null
    return (
        <Fragment>
            <div className="ms-Grid-row">
                <div className={"ms-Grid-col ms-lg12 " + classes.container}>
                    <div className="ms-Grid-col ms-lg6">
                    <span className="padR5"> {icon}</span> 
                    <span className="padR5"> {props.count}</span>
                    <span>Likes</span>
                    </div>
                    <div onClick={props.clickComment} className={"ms-Grid-col ms-lg6 " + classes.commentCount}>
                        {commentCount}
                    </div>
                </div>
            </div>
        </Fragment>
    );
});
