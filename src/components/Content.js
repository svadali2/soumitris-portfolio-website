import React from 'react';
import Pictureviewer from './Pictureviewer';
import ThumbnailViewer from './Thumbnailviewer';
import { CSSTransition } from 'react-transition-group';

class Content extends React.Component {
    constructor(props) {
        super();
        this.state = {
            isThumbnail: false
        }
    }

    shiftViewer = (isThumbnail) => {
        this.setState({ isThumbnail });
    }

    render() {
        const { images } = this.props;
        const { isThumbnail } = this.state;
        return (
            <div>
            <CSSTransition in={isThumbnail} timeout={1000}>
                <div>
                {!isThumbnail && <Pictureviewer shiftViewer={this.shiftViewer} images={images}></Pictureviewer>}
                {isThumbnail && <ThumbnailViewer shiftViewer={this.shiftViewer} images={images}></ThumbnailViewer>}                     
                </div>
            </CSSTransition>    
            </div>
            
        );
    }
}

export default Content;