import * as React from 'react';
import { SpinButton } from 'office-ui-fabric-react/lib/SpinButton';



const FluetUISpinButton = () => (
    <div>
        <div className="fluenttitle divpadt10">Spin Button</div>
        <div className="divpadt10">
            <div className="divpadt10">
                <SpinButton
                    defaultValue="0"
                    label={'Basic SpinButton:'}
                    min={0}
                    max={100}
                    step={1}
                    iconProps={{ iconName: 'IncreaseIndentLegacy' }}
                    incrementButtonAriaLabel={'Increase value by 1'}
                    decrementButtonAriaLabel={'Decrease value by 1'}
                /></div>
            <div className="divpadt10">
                <SpinButton
                    defaultValue="0"
                    label={'Decimal SpinButton:'}
                    min={0}
                    max={10}
                    step={0.1}
                    incrementButtonAriaLabel={'Increase value by 0.1'}
                    decrementButtonAriaLabel={'Decrease value by 0.1'}
                />
            </div>
        </div>
    </div>

);


export default FluetUISpinButton;