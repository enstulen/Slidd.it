import renderer from 'react-test-renderer';
import React from 'react';
import { mount, shallow } from 'enzyme';
import Lecture from '../imports/ui/Lecture.jsx';

describe('Lecture component', () => {
  it('Renders correctly', () => {
    const rendered = renderer.create(
      <Lecture lecture={[]} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('Correct length frontPage', () => {
    const wrapper = shallow(<Lecture lecture={[]} frontPage={true} />);
    expect(wrapper.find('.left').length).toEqual(1);
    expect(wrapper.find('.right').length).toEqual(1);
  });
  it('Correct length frontPage', () => {
    const wrapper = shallow(<Lecture lecture={[]} frontPage={false} />);
    expect(wrapper.find('.liButton').length).toEqual(1);
  });
});
