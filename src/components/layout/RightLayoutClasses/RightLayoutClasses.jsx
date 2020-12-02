import React from "react";
import { Persona, PersonaSize, PersonaPresence } from 'office-ui-fabric-react/lib/Persona';
import { useStore } from '../../../store/store';
import mona from '../../../assets/images/persona/mona.png'
import CalendarWeekList from "../../calendar/CalendarWeekList/CalendarWeekList";

const RightLayoutClasses = () => {

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
      <div className="ms-Grid-col ms-lg12 loginuser padt40">
        <div className="ms-Grid-col  ms-lg12">
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
      </div>
      <div className="ms-Grid-row">
                <CalendarWeekList/>
      </div>      
    </div>
  );
};

export default RightLayoutClasses;
