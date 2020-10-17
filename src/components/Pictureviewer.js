import React from 'react';
import '../styles/Pictureviewer.css';

class Pictureviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      viewThumbnails: false
    }
    this.pictureViewer = React.createRef();
    
  }

  changeCursor = (event) => {
    const x = event.clientX;
    let start = this.pictureViewer.current.offsetLeft;
    let width = this.pictureViewer.current.offsetWidth;
    var divLeftBounds = (0.45) * width + start;
    var divRightBounds = (0.55) * width + start;
    console.log(x);
    console.log(divLeftBounds);
    console.log(divRightBounds);
    if (x < divLeftBounds) {
      event.target.style.cursor = 'e-resize';
    } else if (x >= divLeftBounds && x <= divRightBounds) {
      event.target.style.cursor = 's-resize';
    } else if (x > divRightBounds) {
      event.target.style.cursor = 'e-resize';
    }
  }

  updateIndex = (event) => {
    const { activeIndex } = this.state;
    const { images } = this.props;
    const x = event.clientX;
    let start = this.pictureViewer.current.offsetLeft;
    let width = this.pictureViewer.current.offsetWidth;
    var divLeftBounds = (0.45) * width + start;
    var divRightBounds = (0.55) * width + start;
    if (x < divLeftBounds) {
      this.setState( { activeIndex: activeIndex - 1 === -1 ? images.length - 1 : activeIndex - 1 } );
    } else if (x >= divLeftBounds && x <= divRightBounds) {

    } else if (x > divRightBounds) {
      this.setState( { activeIndex: activeIndex + 1 === images.length ? 0 : activeIndex + 1 } );
    }
  }

  render() {
    const { images } = this.props;
    const { activeIndex } = this.state;
    return (
            <div className={"container"} onClick={(e) => this.updateIndex(e)} onMouseMove={(e) => this.changeCursor(e)} ref={this.pictureViewer}>
              { 
              images.map((image, index) => {
                return <img key={index} className={"image"+(activeIndex !== index ? " hidden" : "")} src={images[index]} alt="" />
              })
              }
            </div>
    );
  }
}

export default Pictureviewer;
