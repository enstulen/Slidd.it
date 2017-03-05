import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import Welcome from '../../ui/pages/welcome';
import { Main } from '../../ui/pages/app';
import AppContainer from '../../ui/containers/appContainer';

FlowRouter.route('/', {
  action() {
    mount(Welcome);
  },
});

FlowRouter.route('/lecture/:lectureName', {
  name: 'lecture',
  action() {
    mount(Main, { content: <AppContainer /> });
  },
});

FlowRouter.notFound = {
  action() {
    mount(Welcome);
  },
};
