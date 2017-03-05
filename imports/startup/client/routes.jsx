import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import Welcome from '../../ui/pages/welcome.jsx';
import FourOFour from '../../ui/pages/404.jsx';
import {App, Main} from '../../ui/pages/app.jsx';
import AppContainer from '../../ui/containers/appContainer.jsx';

FlowRouter.route('/', {
  action() {
    mount(Welcome);
  },
});

FlowRouter.route('/lecture/:lectureName', {
  name: 'lecture',
  action() {
    mount(Main, {content: <AppContainer />});
  },
});

FlowRouter.notFound = {
  action() {
    mount(FourOFour);
  },
};
