import * as Snabbdom from "snabbdom-pragma";
const toHTML = require("snabbdom-to-html");

interface IHeaderProps {
  color: string;
}

function Header(props: IHeaderProps, children: JSX.Element[]) {
  return (
    <h1 style={{ color: props.color }} className="foo">
      {[
        "Hello ", 
        <em>world</em>, 
        ...children
      ]}
    </h1>
  );
}

const el = (
  <Header color="green">
    <h2>EITA</h2>
  </Header>
);

console.log(toHTML(el));
