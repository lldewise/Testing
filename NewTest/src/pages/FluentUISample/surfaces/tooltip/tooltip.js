import React from 'react'
import TooltipBasicExample from './defaulttooltip/defaulttooltip'
import TooltipDisplayExample from './tooltipwrappinginline/tooltipwrappinginline'
import TooltipCustomExample from './tooltipwithcustomcontent/tooltipwithcustomcontent'
import TooltipInteractiveExample from './tooltipwithclosingdelay/tooltipwithclosingdelay'
import TooltipOverflowExample from './tooltiponlyonoverflow/tooltiponlyonoverflow'
import TooltipAbsolutePositionExample from './tooltiponabsoluteposition/tooltiponabsoluteposition'


const Tooltip = () => {
    return(
        <div className="ms-Grid-row">
            <TooltipBasicExample/>
            <TooltipDisplayExample/>
            <TooltipCustomExample/>
            <TooltipInteractiveExample/>
            <TooltipOverflowExample/>
            <TooltipAbsolutePositionExample/>
        </div>    
    );
}

export default Tooltip;