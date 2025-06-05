const heading = React.createElement(
  "div",
  { id: "heading", className: "title" },
  [React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello world from the react!"),
    React.createElement("h2", {}, "this is h2 tag!"),
  ]),React.createElement("div", {}, [
    React.createElement("h1", {}, "Hey I am pravin React Master"),
    React.createElement("h2", {}, "this is h2 tag!"),
  ])]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log(heading);
