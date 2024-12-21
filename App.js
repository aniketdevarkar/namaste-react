{/* <div id="parent">
  <div id="child1">
    <h1>Hi World i am h1</h1>
    <h2>Hi World i am h2</h2>
  </div>
  <div id="child2">
    <h1>Hi World i am h1</h1>
    <h2>Hi World i am h2</h2>
  </div>
</div>; */}

const header = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "Hello world i am h1"),
    React.createElement("h2", {}, "Hello world i am h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello world i am h1"),
    React.createElement("h2", {}, "Hello world i am h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
