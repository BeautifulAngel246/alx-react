import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<BodySection />', () => {
  it('renders a <BodySection /> component', () => {
		const wrapper = shallow(
			<BodySection title="test title">
				<p>test children node</p>
			</BodySection>
		);
		expect(wrapper).toHaveLength(1);
		expect(wrapper.find('h2').length).toEqual(1);
		expect(wrapper.find('h2').text()).toEqual('test title');
		expect(wrapper.find('p').length).toEqual(1);
		expect(wrapper.find('p').text()).toEqual('test children node');
	});
});
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
BodySection.test.js [unix] (15:59 31/12/1969)                                          0,1 All
-- INSERT --

