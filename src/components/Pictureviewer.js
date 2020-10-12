import React from 'react';
import '../styles/Pictureviewer.css';

class Pictureviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    }

  }

  updateIndex = () => {
    const { activeIndex } = this.state;
    const { images } = this.props;
    this.setState( { activeIndex: activeIndex + 1 === images.length ? 0 : activeIndex + 1 } );
  }

  render() {
    const { images } = this.props;
    const { activeIndex } = this.state;
    return (
            <div className={"container"}>
              { 
              images.map((image, index) => {
                return <img className={"image"+(activeIndex !== index ? " hidden" : "")} src={images[index]} alt="" onClick={this.updateIndex}/>
              })
              }
              
            </div>
    );
  }
}

export default Pictureviewer;
