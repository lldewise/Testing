import React from 'react';
import {get} from 'lodash-es';
import paths from 'path';
import { intl } from "./util/commonFunction";
import { LabelNames } from "./util/constant";
import { hierarchize } from './util/hierarchical';


const keyName = 'key';
const pathName = 'path';
const uniqueKeyName = 'uniqueKey';

function pathGenerator(node, parent) {
  const parentUniqueKey = get(parent, uniqueKeyName);
  const uniqueKey = parentUniqueKey
    ? parentUniqueKey + '.' + node[keyName]
    : node[keyName];

  const parentPath = get(parent, pathName, '');
  const path = get(node, pathName, paths.join(parentPath, node[keyName]));
  node[uniqueKeyName] = uniqueKey;
  node[pathName] = path;
}

const routeConfig = hierarchize(  
  {    
      key: 'dashboard',
      name: 'Dashboard',
      icon: 'Home',
      path: '/' ,      
      component: React.lazy(() => import('./pages/Dashboard')),
      children: [      
      {
        key: 'login',
        name: 'Login',
        isPublic: true,
        isHidden: true,
        component: React.lazy(() => import('./pages/Login')),
      },
      {
        key: 'profile',
        name: 'Profile',
        isHidden: true
      },
      {
        key: 'schedules',
        name: intl(LabelNames.smenu_schedules),
        component: React.lazy(() => import('./pages/Schedules')),
        icon: "Calendar",
      },
      {
        key: 'classes',
        name: intl(LabelNames.smenu_classes),
        component: React.lazy(() => import('./pages/Classes')),
        icon: "Dictionary",
      },
      {
        key: 'documents',
        name: intl(LabelNames.smenu_documents),
        icon: 'FabricFolder'
      },
      {
        key: 'assignments',
        name: intl(LabelNames.smenu_assignments),
        icon: 'EditNote'
      },
      {
        key: 'groups',
        name: intl(LabelNames.smenu_groups),
        icon: 'Group'
      },
      {
        key: 'messages',
        name: intl(LabelNames.smenu_messages),
        icon: 'Message'
      },
      {
        key: 'attendance',
        name: intl(LabelNames.smenu_attendance),
        icon: 'ReportDocument'
      },
      {
        key: 'news',
        name: intl(LabelNames.smenu_news),
        icon: 'News',
        component: React.lazy(() => import('./pages/News'))     
      },
      {
        key: 'newsdetails',
        name: intl(LabelNames.smenu_news),
        icon: 'News',
        isHidden: true,
        component: React.lazy(() => import('./pages/NewsDetails'))     
      },
      {
        key: 'events',
        name: intl(LabelNames.smenu_events),
        icon: 'FavoriteStar'
      },
      {
        key: 'fluentui',
        name: 'FluentUI',
        icon: 'SecurityGroup',
        isHidden: true,
        component: React.lazy(() => import('./pages/FluentUISample/fluentuisample')),
      },
      {
        key: 'storagepoc',
        name: 'Storage POC',
        icon: 'SecurityGroup',
        isHidden: true,
        component: React.lazy(() => import('./pages/StoragePOC'))     
      },
      {
        key: 'reacthookforms',
        name: 'React Hook Form',
        icon: 'SecurityGroup',
        isHidden: true,        
        component: React.lazy(() => import('./pages/ReactHookForm'))     
      }
      // {
      //   key: 'user',
      //   name: 'User',
      //   icon: 'People'
      // },
      // {
      //   key: 'authority',
      //   name: 'Authority',
      //   icon: 'SecurityGroup'
      // },
      // {
      //   key: 'settings',
      //   name: 'Settings',
      //   icon: 'Settings',
      //   children: [
      //     {
      //       key: 'list',
      //       name: 'List'
      //     },
      //     {
      //       key: 'unit',
      //       name: 'Unit'
      //     }
      //   ]
      // }
    ]
  },
  null,
  pathGenerator
);

export default routeConfig;
