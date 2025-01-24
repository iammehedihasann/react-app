

import React, { Component } from 'react';

class Bpp extends Component {

    constructor(props) {
        super(props);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e) {
        // eslint-disable-next-line react/prop-types
        this.props.handleTextChange(e.target.value);
    }

    render() {
        return (
            // eslint-disable-next-line react/prop-types
            <input value={this.props.text}
                onChange={this.handleTextChange} />
        );
    }
}

export default Bpp;
