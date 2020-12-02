import * as React from 'react';
import { TextField, MaskedTextField } from 'office-ui-fabric-react/lib/TextField';
import { Stack, IStackProps } from 'office-ui-fabric-react/lib/Stack';


const iconProps = { iconName: 'Calendar' };

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};

export const FluentUITextFields = () => {
    return (
        <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12 ">
                <div className="fluenttitle divpadt10">Text Fields</div>
                <div className="divpadt10">
                    <Stack {...columnProps}>
                        <TextField label="Standard" />
                        <TextField label="Disabled" disabled defaultValue="I am disabled" />
                        <TextField label="Read-only" readOnly defaultValue="I am read-only" />
                        <TextField label="Required " required />
                        <TextField ariaLabel="Required without visible label" required />
                        <TextField label="With error message" errorMessage="Error message" />
                    </Stack>
                    <Stack {...columnProps}>
                        <MaskedTextField label="With input mask" mask="m\ask: (999) 999 - 9999" />
                        <TextField label="With an icon" iconProps={iconProps} />
                        <TextField label="With placeholder" placeholder="Please enter text here" />
                        <TextField label="Disabled with placeholder" disabled placeholder="I am disabled" />
                        <TextField label="Password with Reveal Button" type="password" canRevealPassword={true} />
                    </Stack>
                </div>
            </div>
        </div>
    );
};


export default FluentUITextFields;