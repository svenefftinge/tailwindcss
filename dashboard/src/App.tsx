import React from 'react';
import Menu from './Menu';
import workspace from './icons/Workspaces.svg'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Workspaces } from './workspaces/Workspaces';
import { Usage } from './account/Usage';
import { Settings } from './settings/Settings';
import { ServiceContext, SimpleServiceImpl } from './service/service';

function App() {
  return (
    <BrowserRouter>
      <ServiceContext.Provider value={new SimpleServiceImpl()}>

        <div>
          <Menu entries={[
            {
              icon: workspace,
              title: 'Workspaces',
              link: '/'
            },
            {
              title: 'Docs',
              link: 'https://www.gitpod.io/docs/',
            },
            {
              title: 'Community',
              link: 'https://community.gitpod.io/',
            },
            {
              title: 'Blog',
              link: 'https://www.gitpod.io/blog/',
            },
          ]} />
          <Switch>
            <Route path="/" exact component={Workspaces} />
            <Route path="/settings/" component={Settings} />
            <Route path="/usage" exact component={Usage} />
          </Switch>
        </div>
      </ServiceContext.Provider>
    </BrowserRouter>
  );
}

export default App;
