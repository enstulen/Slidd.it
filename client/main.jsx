import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../imports/ui/App.jsx';
import { CurrentUser } from '../imports/startup/xUser';


Meteor.startup(() => {
  render(<App />, document.getElementById('react-root'));
  CurrentUser.registerUser();
});
