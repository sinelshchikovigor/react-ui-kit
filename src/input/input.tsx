import * as React from 'react';

interface InputProps {
    /**
     * 'Input' component disaplyed value. 
     * 
     * @type {string}
     * @memberOf InputProps
     */
    value?: string
}

interface InputState {
    /**
     * 'Input' component disaplyed value.
     * 
     * @type {string}
     * @memberOf InputState
     */
    value: string
}

/**
 * Class of 'Input' component.
 * 
 * @export
 * @class Input
 * @extends {React.Component<InputProps, InputState>}
 */
export class Input extends React.Component<InputProps, InputState> {
    /**
     * 'Input' component state.
     * 
     * @type {InputState}
     * @memberOf Input
     */
    public state: InputState = {
        value: this.props.value || ''
    };

    /**
     * Returns 'Input' element.
     * 
     * @returns React element
     * 
     * @memberOf Input
     */
    public render() {
        return <input value={this.state.value} onChange={(event: any) => this.onChange(event)} />;
    }

    /**
     * 'onChange' input event handler. Sets 'Input' component value when user changes the input content.
     * 
     * @private
     * @param {*} event HTML event
     * 
     * @memberOf Input
     */
    private onChange(event: any) {
        this.setState({
            value: event.target.value
        });
    }
}