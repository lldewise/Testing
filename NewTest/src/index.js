import React from 'react';
import ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AuthenticationProvider } from './util/context/authentication';
import configureUserProfileStore from './store/User/userProfile';
import configureTeacherProfileStore from './store/TeacherProfile/teacherProfile';
import configureDashboardStore from './store/Dashboard/dashboard';
import configureClassesStore from './store/Classes/classes';
import {  initializeFileTypeIcons } from '@uifabric/file-type-icons';

configureUserProfileStore();
configureDashboardStore();
configureTeacherProfileStore();
configureClassesStore();
initializeIcons();
initializeFileTypeIcons(undefined);

ReactDOM.render(
  <AuthenticationProvider>  
      <App />    
  </AuthenticationProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
