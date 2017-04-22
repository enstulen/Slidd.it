import renderer from 'react-test-renderer';
import React from 'react';
import { mount, shallow } from 'enzyme';
import GaugeWrapper from '../imports/ui/GaugeWrapper.jsx';

describe('GaugeWrapper component', () => {
  it('Renders correctly', () => {
    const rendered = renderer.create(
      <GaugeWrapper sliderValues={[1, 4]} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('Correct length', () => {

    const wrapper = shallow(<GaugeWrapper sliderValues={[1]} />);
    expect(wrapper.find('.gauge').length).toEqual(1);
  });
});
