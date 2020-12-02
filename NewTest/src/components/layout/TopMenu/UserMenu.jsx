import React from 'react';
// import { useAuthentication } from '../../../util/context/authentication';
// import { useHistory } from 'react-router-dom';
import { useBoolean } from '@uifabric/react-hooks';
import ateduLogo from '../../../assets/images/atedu-logo.png';
import { FontIcon } from 'office-ui-fabric-react/lib/Icon';
//import { useStore } from '../../../store/store';
import {MessagePanel,NotificationPanel} from '../../panel';


export function UserMenu() {  
  //const { principal, logout } = useAuthentication();

  const [isOpenMessage, { setTrue: openPanelMessages, setFalse: dismissPanelMessages }] = useBoolean(false);
  const [isOpenNotifications, { setTrue: openPanelNotifications, setFalse: dismissPanelNotifications }] = useBoolean(false);
  
  //const userProfile = useStore()[0];

  // const examplePersona = {
  //   imageUrl: null,
  //   imageInitials:userProfile.userprofile.imageInitials,
  //   text: userProfile.userprofile.text,
  //   secondaryText:  userProfile.userprofile.secondaryText,
  //   tertiaryText:  userProfile.userprofile.tertiaryText,
  //   optionalText:  userProfile.userprofile.optionalText
  // };

  //const history = useHistory();
  // const menuProps = {
  //   shouldFocusOnMount: true,
  //   items: [
  //     {
  //       key: 'profile',
  //       text: 'Profile',
  //       iconProps: { iconName: 'PlayerSettings' },
  //       onClick: () => history.push('/profile')
  //     },
  //     {
  //       key: 'logout',
  //       text: 'Logout',
  //       iconProps: { iconName: 'SignOut' },
  //       onClick: logout
  //     },
  //   ]
  // };

// const { data } = useRequest('/messages');
  const iconClass = {
    fontSize: 20,
    height: 20,
    width: 25,
    margin: '0 8px',
    color: '#fff',
    paddingTop: '5px'

};

  return (
    <React.Fragment>

      {/* <CommandBarButton
        menuProps={menuProps}
        iconProps={{ iconName: 'UserOptional' }}>
        {principal.username}
      </CommandBarButton> */}

    <div className="ms-Grid-col ms-lg7 navtopbar vl">

    <a  className="notification">
    <FontIcon iconName="Message" style={iconClass} onClick={openPanelMessages}/>
    {/* <span className="badge">{data?.length}</span> */}
    <span className="badge">3</span>
    </a>
    
    <MessagePanel  isOpenMessage={isOpenMessage}
        dismissPanelMessages={dismissPanelMessages}/>
      
    <a className="notification">
    <FontIcon iconName="Ringer" style={iconClass} onClick={openPanelNotifications}/>
    <span className="badge">2</span>
    </a>
      
    <NotificationPanel isOpenNotifications={isOpenNotifications}
        dismissPanelNotifications={dismissPanelNotifications}/>

      <FontIcon iconName="Settings" style={iconClass} />

    </div>

    <div className="ms-Grid-col ms-lg2">
                <img src={ateduLogo} alt="Logo" className="logo-right" />
    </div>

    </React.Fragment>
  );
}
