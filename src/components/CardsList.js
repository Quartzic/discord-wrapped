import React from "react";

class CardsList extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return (
      <ul className="space-y-3 my-3">
        {React.Children.map(this.props.children, (child) => {
          if (child.props.handlesOwnContainer) {
            return child;
          } else {
            return <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
              {child}
            </li>;
          }
        })}
      </ul>
    );
  }
}

export default CardsList;
