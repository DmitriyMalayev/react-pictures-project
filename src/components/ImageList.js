import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard"

const ImageList = (props) => {
  
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

// import React from "react";

// const users = [
//   { id: 1, name: "Leanne Graham" },
//   { id: 2, name: "Ervin Howell" },
//   { id: 3, name: "Clementine Bauch" },
//   { id: 4, name: "Patricia Lebsack" },
// ];

// export default class App extends React.Component {
//   render() {
//     const listOfUsers = users.map((user) => {
//       return <li key={user.id}>{user.name}</li>;
//     });
//     return <ul>{listOfUsers}</ul>;
//   }
// }
