import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../Icon';

describe('Icon', () => {
  test('renders', () => {
    const json = renderer.create(<Icon name="flag" />).toJSON();
    expect(json).toMatchSnapshot();
  });

  test('large prop', () => {
    const json = renderer.create(<Icon name="flag" large />).toJSON();
    expect(json).toMatchSnapshot();
    expect(json).toHaveStyleRule('width', '48px');
    expect(json).toHaveStyleRule('height', '48px');
  });
});
