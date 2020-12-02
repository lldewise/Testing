import React from 'react';
import { ChoiceGroup, IChoiceGroupOption } from 'office-ui-fabric-react/lib/ChoiceGroup';


const options:IChoiceGroupOption [] = [
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C', disabled: true },
    { key: 'D', text: 'Option D' },
];

function _onChange(ev: React.FormEvent<HTMLInputElement>, option: IChoiceGroupOption): void {
    console.dir(option);
}

const FluentUIGroupChoice = () => {
    return (<div>
        <div className="fluenttitle divpadt10">ChoiceGroup</div>
        <div className="divpadt10">
            <ChoiceGroup defaultSelectedKey="B" options={options} onChange={_onChange} label="Pick one" required={true} />
        </div>
    </div>);
}

export default FluentUIGroupChoice