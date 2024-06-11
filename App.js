// it is the core react thing
const heading = React.createElement(
  "h1",
  { id: "heading", className: "heading" }, // set the attribute to the tag
  "Hello world from reactjs"
);
const heading2 = React.createElement(
  "h1",
  { id: "heading", className: "heading" }, // set the attribute to the tag
  "Hello world from reactjs 2.0"
);

const child = React.createElement(
  "div",
  { id: "child" },
  [heading, heading2].map((head, index) => {
    return head;
  })
);
const parent = React.createElement("div", { id: " parent" }, child);

// its crea te by the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));

// Now render the heading
root.render(parent);
