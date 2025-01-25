import React from 'react'
export default class Counter extends React.Component {
    state = {
        count: 0,
    };
   
    incrementCount = () => {
        this.setState((prevState) => ({count: prevState.count + 1}));
    };

  render() {
    // eslint-disable-next-line react/prop-types
    const { render } = this.props;
    const { count  } = this.state;

    return render(count, this.incrementCount)
    
  }
}
