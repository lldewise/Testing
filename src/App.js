import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProgressIndicator, styled } from '@fluentui/react';

import { AutoSwitchLayout } from './components/layout';
import { renderRoutes } from './util/route';
import routeConfig from './routeConfig';
import i18n from './i18n/i18n'
import 'office-ui-fabric-react/dist/css/fabric.css';
import './App.scss';

function App() {

  React.useLayoutEffect(() => {
    document.body.style.backgroundColor = "#fffff";
    document.body.style.color = "#323130";
  }, []);
  
  const updatedRoute = routeConfig;
  updatedRoute['path'] = "/" + i18n.language + "/";
  updatedRoute.children.map(item => {
    return item.path = "/" + i18n.language + item.path;
  });
  

  return (
    <Router>
      <AutoSwitchLayout>
        <Suspense fallback={<ProgressIndicator label="Page loading..." />}>
          <div className="ms-Grid" dir="ltr" style={{overflow:'hidden'}}>
            {renderRoutes(routeConfig)}
          </div>
        </Suspense>
      </AutoSwitchLayout>
    </Router>
  );
}


console.log( process.env.NODE_ENV);
// Live reload != hot reload! CRA doesn't do hot reload, so we install it here.
 //let HotApp = process.env.NODE_ENV === 'production' ? App : hot(module)(App);

export default styled(App);
