import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { WelcomeMain } from '../../ui/pages/welcome.jsx';
import { FourOFourMain } from '../../ui/pages/404.jsx';
import { Main } from '../../ui/pages/app.jsx';
import AppContainer from '../../ui/containers/appContainer.jsx';
import WelcomeContainer from '../../ui/containers/welcomeContainer.jsx';
import FourOFourContainer from '../../ui/containers/404Container.jsx';

// // // // // FlowRouter routes // // // // //

// Inital welcome page.
FlowRouter.route('/', {
  action() {
    mount(WelcomeMain, { content: <WelcomeContainer /> });
  },
});

// Page showing current lecture with slider, comment section and gauge.
FlowRouter.route('/lecture/:lectureName', {
  name: 'lecture',
  action() {
    mount(Main, { content: <AppContainer /> });
  },
});

// 404 page, any other link goes here.
FlowRouter.notFound = {
  action() {
    mount(FourOFourMain, { content: <FourOFourContainer /> });
  },
};
