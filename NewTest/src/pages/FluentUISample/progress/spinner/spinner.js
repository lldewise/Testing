import React from 'react';
import SpinnerBasicExample from './spinnersizes/spinnersizes'
import SpinnerLabeledExample from './spinnerlabelpositioning/spinnerlabelpositioning'
const Spinner = () => {
    return(
        <div className="ms-Grid-row">
            <SpinnerBasicExample/>
            <SpinnerLabeledExample/>
        </div>
    );
}

export default Spinner;