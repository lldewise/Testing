import React from 'react';
import classes from './Tab.module.scss';
import { FontIcon } from "office-ui-fabric-react/lib/Icon";

export const Tab = (props) => {
    let mylist = [];
    if (props.liList) {
        props.liList.forEach((item, i) => {
            let count = item.count ? <span className={classes.count}>{item.count}</span> : null;
            let fontIcon = item.icon ? <FontIcon iconName={item.icon} /> : null
            mylist.push(<li key={i} className={classes.liitem}><label className={classes.cursor + " " + item.classname} onClick={() => {
                props.linkClick(item)
            }} >{fontIcon} {item.name} {count}</label></li>);
        });
    }
    const borderActive = props.border ? classes.ulListBorder :classes.ulList
    return (
        <nav  >
            <ul className={borderActive}>
                {mylist}
            </ul>
        </nav>
    )
}