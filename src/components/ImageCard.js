import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;

/*
Let the ImageCard render itself and it's images
Reach into the DOM and figure out the height of the image
Set the image height on state to get the component to rerender 
When rendering, assign a "grid-row-end" to make sure the image takes up the appropriate space 

React Refs
  Gives access to a single DOM element
  We create refs in the constructor, assign them to instance variables and then pass to a particular JSX element as props 
We have to get the height of each image after it was loaded into the browser 
*/
