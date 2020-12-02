import React from "react";
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import classes from "./NotificationPanel.module.scss";

export const NotificationPanel = (props) => {
  return (
    <Panel
        headerText="Notifications"
        // this prop makes the panel non-modal
        isBlocking={false}
        isOpen={props.isOpenNotifications}
        onDismiss={props.dismissPanelNotifications}
        closeButtonAriaLabel="Close"
        className={classes.Panel}
      >
          <div className="notif-padding-top">
              <div className="ms-Grid-row notif-padding" dir="ltr">
                    <div className="ms-Grid-col  ms-lg1">
                        <div className={classes.customWidth}>
                        <i className="ms-Icon ms-Icon--StatusCircleBlock" aria-hidden="true"></i>
                        <p className="messages-padding"></p>
                      </div>
                    </div>
                    <div className="ms-Grid-col  ms-lg10">
                      <span className="padl10">
                      Dennis cancelled a meeting.
                      </span>
                    </div>
                  </div>
                  <hr className="divider" />

                  <div className="ms-Grid-row notif-padding" dir="ltr">
                    <div className="ms-Grid-col  ms-lg1">
                        <div className={classes.customWidth}>
                        <i className="ms-Icon ms-Icon--StatusCircleBlock" aria-hidden="true"></i>
                        <p className="messages-padding"></p>
                      </div>
                    </div>
                    <div className="ms-Grid-col  ms-lg10">
                      <span className="padl10">
                      Jay cancelled a meeting.
                      </span>
                    </div>
                  </div>
                  <hr className="divider" />
            </div>
      </Panel>
  );
};
