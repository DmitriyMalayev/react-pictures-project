import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.regular} alt={description} />;
  });
  return <div>{images}</div>;
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
