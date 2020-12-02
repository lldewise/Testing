import React from "react";
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import classes from "./MessagePanel.module.scss";


export const MessagePanel = (props) => {
  return (
    <Panel
        headerText="Messages"
        // this prop makes the panel non-modal
        isBlocking={false}
        isOpen={props.isOpenMessage}
        onDismiss={props.dismissPanelMessages}
        closeButtonAriaLabel="Close"
        className={classes.Panel}
      >

      {/* {data?.map(row => (
      <Fragment>
      <div className="ms-Grid-row loginuser" dir="ltr" key={row.id}>
        <div className="ms-Grid-col  ms-lg8">
            <div style={{width:"200px"}}>
              <Persona
                size={PersonaSize.size40}                       
                presence={PersonaPresence.online}
                imageUrl = {row.avatar}
                imageAlt="Annie Lindqvist, status is online"
                text= {row.senderName}
                secondaryText={row.title}
              />
            <p className="messages-padding">{row.message}</p>
          </div>
        </div>
        <div className="ms-Grid-col  ms-lg4 text-right ">
          <span className="padl10">
           
           { Moment(row.createdAt).format('MMM Do') }
          </span>
        </div>
      </div>
      <hr className="divider" />
      </Fragment>
      ))} */}

      <div className="ms-Grid-row loginuser" dir="ltr">
        <div className="ms-Grid-col  ms-lg8">

            <div className={classes.customWidth}>

              <Persona
                size={PersonaSize.size40}                       
                presence={PersonaPresence.online}
                imageAlt="Annie Lindqvist, status is online"
                text="Dennis Migriño"
                secondaryText="Sample Subject"
              />
            <p className="messages-padding">Sample Message</p>

          </div>
        </div>
        <div className="ms-Grid-col  ms-lg4 text-right ">
          <span className="padl10">
            Sept 10
          </span>
        </div>
      </div>
      <hr className="divider" />

      <div className="ms-Grid-row loginuser" dir="ltr">
        <div className="ms-Grid-col  ms-lg8">

            <div className={classes.customWidth}>

              <Persona
                size={PersonaSize.size40}                       
                presence={PersonaPresence.online}
                imageAlt="Annie Lindqvist, status is online"
                text="Jay Celeste"
                secondaryText="Sample Subject"
              />
            <p className="messages-padding">Sample Message</p>

          </div>
        </div>
        <div className="ms-Grid-col  ms-lg4 text-right ">
          <span className="padl10">
            Sept 10
          </span>
        </div>
      </div>
      <hr className="divider" />

      <div className="ms-Grid-row loginuser" dir="ltr">
        <div className="ms-Grid-col  ms-lg8">

            <div className={classes.customWidth}>
              <Persona
                size={PersonaSize.size40}                       
                presence={PersonaPresence.online}
                imageAlt="Annie Lindqvist, status is online"
                text="Eric Cantorna"
                secondaryText="Sample Subject"
                tertiaryText="Unverified sender"
              />
            {/* <div className="ms-Grid-col  ms-lg12">
              {userProfile.userprofile.name}
            </div>
            <div className="ms-Grid-col  ms-lg12">
              {userProfile.userprofile.description}
            </div> */}
            <p className="messages-padding">Sample Message</p>
          </div>
        </div>
        <div className="ms-Grid-col  ms-lg4 text-right ">
          <span className="padl10">
            Sept 10
          </span>
        </div>
      </div>
      <hr className="divider" />

      </Panel>
  );
};
