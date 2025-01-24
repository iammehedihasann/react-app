import React from 'react';
import Bpp from './Bpp';
import Cpp from './Cpp'

export default class App extends React.Component {
 constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = { text: ''}; 
 }
 
  handleTextChange(newText){
    this.setState({ text: newText });
  }
  render(){
    return (
        // eslint-disable-next-line react/jsx-no-comment-textnodes
        <React.Fragment>
            // eslint-disable-next-line react/jsx-no-undef
            <Bpp text = {this.state.text}
            handleTextChange = {this.handleTextChange} />
            <Cpp text = {this.state.text} />
        </React.Fragment>
    );
  }

}