import React from "react";
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import DashboardDailySchedule from "../../calendar/DashboardDailySchedule/DashboardDailySchedule";
import { FontIcon } from "office-ui-fabric-react/lib/Icon";
import { useStore } from '../../../store/store';
import { intl } from "../../../util/commonFunction";
import { LabelNames } from "../../../util/constant";
import mona from '../../../assets/images/persona/mona.png'

const RightLayout = () => {

  const userProfile = useStore()[0];  
  const examplePersona = {
    imageUrl: mona,
    imageInitials:userProfile.userprofile.imageInitials,
    text: userProfile.userprofile.text,
    secondaryText:  userProfile.userprofile.secondaryText,
    tertiaryText:  userProfile.userprofile.tertiaryText,
    optionalText:  userProfile.userprofile.optionalText
  }; 
  

  return (
    <div className="ms-Grid-col ms-lg12 rightpanel">
      <div className="ms-Grid-col ms-lg12 loginuser">
        <div className="ms-Grid-col  ms-lg10">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-lg12">
              <Persona
                {...examplePersona}
                size={PersonaSize.size48}                       
                presence={PersonaPresence.online}
                imageAlt="Annie Lindqvist, status is online"
              />
            </div>           
          </div>
        </div>
        <div className="ms-Grid-col  ms-lg2 text-right ">
          <span className="padl10">
            {" "}
            <FontIcon iconName="More" className="icondDefault card-title" />
          </span>
        </div>
      </div>
      <hr className="divider" />
      <div className="ms-Grid-col ms-lg12 calendarday">
        <div className="ms-Grid-col  ms-lg6 card-title">{intl(LabelNames.lbl_schedules)}</div>
        <div className="ms-Grid-col  ms-lg6 text-right ">
          <span className="padl10">
            {" "}
            <FontIcon iconName="More" className="icondDefault card-title" />
          </span>
        </div>
        <br />
        <DashboardDailySchedule />
      </div>
    </div>
  );
};

export default RightLayout;
