import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { Input, InputProps, InputState } from '../../src';

describe('Input component tests', () => {

    it('Input exists', () => {
        let input = shallow(<Input />);
        expect(input).toBeDefined();
    });

    it('Input value equals props value', () => {
        let testValue: string = "Hello world!";
        let input: ShallowWrapper<InputProps, InputState> = shallow<InputProps, InputState>(
            <Input value={testValue} />
        );
        let inputProps: InputProps = input.props();
        let inputPropsValue: string = inputProps.value;
        let inputState: InputState = input.state();
        let inputStateValue: string = inputState.value;

        expect(inputPropsValue).toEqual(testValue);
        expect(inputStateValue).toEqual(testValue);
    });

    it('Input state changes when user types something in the input', () => {
        let testValue: string = "Hello world!";
        let input = shallow<InputProps, InputState>(
            <Input value={testValue} />
        );
        let inputEl = input.find('input');

        testValue = 'New value';

        inputEl.simulate('change', {
            target: {
                value: testValue
            }
        });

        let inputState: InputState = input.state();
        let inputStateValue: string = inputState.value;

        expect(inputStateValue).toEqual(testValue);
    });
});
