import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import NavbarHeader from '../imports/ui/NavbarHeader.jsx';

describe('NavbarHeader component', () => {
  it('Renders correctly', () => {
    const rendered = renderer.create(
      <NavbarHeader lectures={[]} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('Correct length', () => {

    const wrapper = shallow(<NavbarHeader lectures={[]} />);
    expect(wrapper.find('.container-fluid').length).toEqual(1);
    expect(wrapper.find('.navbar-default').length).toEqual(1);
    expect(wrapper.find('.collapsed').length).toEqual(1);
    expect(wrapper.find('.icon-bar').length).toEqual(3);
    expect(wrapper.find('.invisibleButton').length).toEqual(1);
    expect(wrapper.find('.img-responsive').length).toEqual(1);
    expect(wrapper.find('.navbar-collapse').length).toEqual(1);
    expect(wrapper.find('.navbar-nav').length).toEqual(1);
    expect(wrapper.find('.dropdown-toggle').length).toEqual(1);
    expect(wrapper.find('.dropdown-menu').length).toEqual(1);
    expect(wrapper.find('.liButton').length).toEqual(1);

  });
});
