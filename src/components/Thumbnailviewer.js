import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Thumbnailviewer.css'


class Thumbnailviewer extends React.Component {

    render() {
        const { images, shiftViewer } = this.props;
        return (
            <div className={"row viewer"}>
                <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12"}>
                    {images.slice(0, Math.ceil(images.length/2)).map((image, index) => {
                        return <img key={index} src={image} className={"thumbnail"} onClick={() => shiftViewer(false)} alt="" />
                    })}
                </div>
                <div className={"col-lg-6 col-md-6 col-sm-12 col-xs-12"}>
                    {images.slice(Math.ceil(images.length/2)).map((image, index) => {
                        return <img key={index} src={image} className={"thumbnail"} onClick={() => shiftViewer(false)} alt="" />
                    })}
                </div>
            </div>
        );
    }
}

export default Thumbnailviewer;