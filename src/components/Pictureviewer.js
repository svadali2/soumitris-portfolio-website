import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/Pictureviewer.css';

class Pictureviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showIndex: false,
      showBullets: false,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 750,
      slideInterval: 4000,
      slideOnThumbnailOver: false,
      autoPlay: this.props.autoPlay,
      thumbnailPosition: 'right',
      showVideo: {}
    }
  }

  render() {
    return (
            <ImageGallery
              ref={i => this._imageGallery = i}
              items={this.props.images}
              lazyLoad={false}
              infinite={this.state.infinite}
              showBullets={this.state.showBullets}
              showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
              showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
              showThumbnails={this.state.showThumbnails}
              showIndex={this.state.showIndex}
              showNav={this.state.showNav}
              isRTL={this.state.isRTL}
              thumbnailPosition={this.state.thumbnailPosition}
              slideDuration={parseInt(this.state.slideDuration)}
              slideInterval={parseInt(this.state.slideInterval)}
              slideOnThumbnailOver={this.state.slideOnThumbnailOver}
              autoPlay={this.state.autoPlay}
            />
    );
  }
}

export default Pictureviewer;
