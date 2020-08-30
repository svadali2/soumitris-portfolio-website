import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../styles/Pictureviewer.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

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
      showNav: false,
      isRTL: false,
      slideDuration: 750,
      slideInterval: 4000,
      slideOnThumbnailOver: false,
      autoPlay: true,
      thumbnailPosition: 'bottom',
      showVideo: {}
    }
  }

  render() {
    return (
            <ImageGallery
              ref={i => this._imageGallery = i}
              items={images}
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
