import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    //  let op = this.props.opacity - 0.1
    // console.log({op});
    // return (
    //   <div className="color-box" style={{opacity: op}}>
       

        
    //         {op < 0.2 ? null :( <div><ColorBox opacity={op}/></div>)}

        
    //   </div>
    // )
   
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
       

          {console.log(this.props.opacity)}
            {this.props.opacity < 0.2 ? null :( <div><ColorBox opacity={+(this.props.opacity - 0.1).toFixed(1)}/></div>)}

        
      </div>
    )
  }

}

