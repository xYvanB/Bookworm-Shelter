import React from 'react';
import { FaCartArrowDown, FaCartPlus} from 'react-icons/fa'
import { FcDislike, FcLike } from 'react-icons/fc'

  class ButtonItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        <div className="button">
          <button className={this.state.isToggleOn ? 'addCart' : 'deleteCart'} onClick={this.handleClick}> 
            <span className='iconButton'>{this.state.isToggleOn ? <FaCartPlus/> : <FaCartArrowDown />}</span>
            <span className='textButton'>{this.state.isToggleOn ? 'Add to cart' : 'Remove to cart'}</span>
          </button>
        </div>
      );
    }
  }

  class ButtonLikes extends React.Component{
    constructor(props){
      super(props);
      this.state={
        textDisplay: false,
      }
    }

    ToggleButton(){
      this.setState(currentState => ({
        textDisplay: !currentState.textDisplay, 
      })); 
    }

    render(){
      return(
        <div className="button">
          <button onClick={() => this.ToggleButton()} className={this.state.textDisplay ? 'dislike' : 'like'}>
            <span className='iconButton'>{this.state.textDisplay ? <FcDislike /> : <FcLike />}</span>
            <span className='textButton'>{this.state.textDisplay ? 'Dislike' : 'Like'}</span>
          </button>
        </div>
      )
    }
}

  // class ButtonLikes extends React.Component {
  //   constructor(props){
  //     super(props);
  //     this.state = {
  //         likes: 0,
  //         updated: false
  //     };
  //   }
  //   updateLikes = () => {
  //     if(!this.state.updated) {
  //       this.setState((prevState, props) => {
  //         return {
  //           likes: prevState.likes + 1,
  //           updated: true
  //       };
  //     });
  //   } else {
  //       this.setState((prevState, props) => {
  //       return {
  //         likes: prevState.likes - 1,
  //         updated: false
  //       };
  //     });
  //   }
  // }

  // render(){
  //   return(
  //     <div className='containerButtons'>
  //       <button className='likes' onClick={this.updateLikes}>Likes: {this.state.likes}</button>
  //     </div>
  //   );
  //   }
  // }


export {
  ButtonItem,
  ButtonLikes
}