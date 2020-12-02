import React from 'react'
import CalloutBasicExample from './defaultcallout/defaultcallout'
import CalloutFocusTrapExample from './focustrapcalloutvariant/focustrapcalloutvariant'
import StatusCalloutExample from './nonfocusablecallout/nonfocusablecallout'
import CalloutDirectionalExample from './calloutwithdirectionalhint/calloutwithdirectionalhint'
import CalloutCoverExample from './calloutthatcoversthetargets/calloutthatcoversthetargets'


const CallOut = () => {
    return (<div className="ms-Grid-row">
        <CalloutBasicExample/>
        <CalloutFocusTrapExample/>
        <StatusCalloutExample/>
        <CalloutDirectionalExample/>
        <CalloutCoverExample/>
      </div> 
    );
}

export default CallOut;