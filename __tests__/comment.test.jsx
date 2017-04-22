import renderer from 'react-test-renderer';
import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../imports/ui/components/comment.jsx';

describe('Comment component', () => {
  it('Renders correctly', () => {
    const rendered = renderer.create(
      <Comment key={123} comment="hei" createdAt={new Date()} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });
  it('Correct length', () => {
    const wrapper = shallow(<Comment key={123} comment="hi" createdAt={new Date()} />);

    expect(wrapper.find('.right').length).toEqual(1);
    expect(wrapper.find('.left').length).toEqual(1);
  });
});
