import React from 'react';
import PivotIconCountExample from './countandicon/countandicon';
import PivotBasicExample from './defaultpivot/defaultpivot';
import PivotLargeExample from './largelinksize/largelinksize';
import PivotTabsLargeExample from './linkoflargetabstyle/linkoflargetabstyle';
import PivotTabsExample from './linksoftabstyle/linksoftabstyle';
import PivotOverrideExample from './overrideselecteditem/overrideselecteditem';
import PivotSeparateExample from './rendercontentseperately/rendercontentseperately';
import PivotRemoveExample from './showhidepivotitem/showhidepivotitem';
import PivotOnChangeExample from './triggeronchangeevent/triggeronchangeevent';


const Pivot =()=>{
    return (<div className="ms-Grid-row">
            <PivotBasicExample/>
            <PivotIconCountExample/>
            <PivotLargeExample/>
            <PivotTabsExample/>
            <PivotTabsLargeExample/>
            <PivotOnChangeExample/>
            <PivotRemoveExample/>
            <PivotOverrideExample/>
            <PivotSeparateExample/>
    </div>);
}

export default Pivot;
