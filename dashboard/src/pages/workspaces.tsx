import React from 'react';
import Menu from '../components/Menu';
import { TopMenuEntries } from '../menu-map';
import { WorkspacesDetails } from '../workspaces/WorkspacesDetails';

export default () => {
  return (
      <div>
          <Menu entries={TopMenuEntries}/>
          <WorkspacesDetails/>
      </div>
  );
};
