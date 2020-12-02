import React, { Fragment } from 'react';
import classes from './Comments.module.scss';
import { Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export const Comments = React.memo(props => {
    const examplePersona = {
        imageUrl: props.user.imageUrl,
        imageInitials: props.user.imageInitials
    };

    
    return (
        <Fragment>
            <div className="ms-Grid-row">
                <div className={"ms-Grid-col ms-lg12 " + classes.container}>
                    <div className={"ms-Grid-col ms-lg1 " + classes.persona}>
                        <Persona
                            {...examplePersona}
                            size={PersonaSize.size32}
                            presence={props.item.status}
                            hidePersonaDetails={true}
                        />
                    </div>

                    <div className={"ms-Grid-col ms-lg11 " + classes.inputContainer}>
                        <TextField placeholder="Write a comment" className={classes.comments} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
});
