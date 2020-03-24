function GreetByName(props) {   // This component represents each list-item (li)
  return <li>Hello, {props.first} {props.last}</li>;
}

function Greeting() {      // This component represents the list (ul)
  return (
    <ul>
      <GreetByName first="George" last="Brown" />
      <GreetByName first="Grace" last="Hopper" />
      <GreetByName first="Alan" last="Turing" />
    </ul>
  );
}

ReactDOM.render(<Greeting />, document.getElementById('greeting'));
