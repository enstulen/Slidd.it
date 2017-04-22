import renderer from 'react-test-renderer';
import React from 'react';
import { mount, shallow } from 'enzyme';
import SliderWrapper from '../imports/ui/SliderWrapper.jsx';

describe('SliderWrapper component', () => {
  it('Correct length', () => {
    const wrapper = shallow(<SliderWrapper value={15} />);
    expect(wrapper.find('.slider').length).toEqual(1);
  });
});
