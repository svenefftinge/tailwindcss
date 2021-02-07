import React from 'react';
import Menu from './Menu';
import workspace from './icons/Workspaces.svg'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Workspaces } from './workspaces/Workspaces';
import { Settings } from './settings/Settings';

function App() {
  return (
    <Router>
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

        <Route path="/" exact component={Workspaces} />
        <Route path="/settings/" component={Settings} />
      </div>
    </Router>
  );
}

export default App;
