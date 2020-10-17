import React from 'react';
import Pictureviewer from './Pictureviewer';
import ThumbnailViewer from './Thumbnailviewer';
import '../styles/Content.css';
import { CSSTransitionGroup } from 'react-transition-group' // ES6

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
            <CSSTransitionGroup 
                transitionName="example"
                transitionEnterTimeout={0}
                transitionLeaveTimeout={0}>
                {!isThumbnail && <Pictureviewer shiftViewer={this.shiftViewer} images={images}></Pictureviewer>}
                {isThumbnail && <ThumbnailViewer shiftViewer={this.shiftViewer} images={images}></ThumbnailViewer>}                   
            </CSSTransitionGroup>
        );
    }
}

export default Content;