import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import { FourOFour } from '../imports/ui/pages/404.jsx';

describe('404 component', () => {
  it('Renders correctly', () => {
    const rendered = renderer.create(
      <FourOFour lectures={[]}/>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('Correct length', () => {

    const wrapper = shallow(<FourOFour />);
    expect(wrapper.find('.navbar').length).toEqual(1);
    expect(wrapper.find('.btn-lg').length).toEqual(1);

  });
});
