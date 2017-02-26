import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { CurrentUser } from '../imports/startup/xUser';
import '../imports/startup/client/routes.jsx';


Meteor.startup(() => {
  CurrentUser.registerUser();
});
