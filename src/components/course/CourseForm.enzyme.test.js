import expect      from 'expect';
import React       from 'react';
import { mount }   from 'enzyme';
import { shallow } from 'enzyme';
import TestUtils   from 'react-addons-test-utils';
import CourseForm  from './CourseForm';

function setup(saving) {
    const props = {
                      course:   {},
                      saving:   saving,
                      errors:   {},
                      onSave:   () => { },
                      onChange: () => { }
                  };
    
    return shallow(<CourseForm {...props} />);
}

describe('CourseForm via Enzyme', () => {
    it('renders form and h1', () => {
        const wrapper = setup(false);
        expect(wrapper.find('form').length).toBe(1);
        expect(wrapper.find('h1').text()).toBe('Manage Course');
    });

    it('Save button is labeled Save when not Saving', () => {
        const wrapper = setup(false);
        expect(wrapper.find('input').props().value).toBe('Save');
    });

    it('Save button is labeled Saving when Saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('input').props().value).toBe('Saving...');
    });
});
