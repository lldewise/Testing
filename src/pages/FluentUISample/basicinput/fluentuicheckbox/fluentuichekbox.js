import React from 'react';
import { Checkbox } from 'office-ui-fabric-react/lib/Checkbox';

function _onChange(ev: React.FormEvent<HTMLElement>, isChecked: boolean) {
    console.log(`The option has been changed to ${isChecked}.`);
  }

const FluentUICheckbox = () => {
    return (<div>
        <div className="fluenttitle divpadt10">Checkboxex</div>
        <div className="divpadt10">
            <Checkbox label="Unchecked checkbox (uncontrolled)" onChange={_onChange} />

            <Checkbox label="Checked checkbox (uncontrolled)" defaultChecked onChange={_onChange} />

            <Checkbox label="Disabled checkbox" disabled />

            <Checkbox label="Disabled checked checkbox" disabled defaultChecked />

        </div>
    </div>);


}

export default FluentUICheckbox;