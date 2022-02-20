import React from "react";
import ErrorBoundary from "../ErrorBoundary";
class VerticalModuleList extends React.Component {
  render() {
    return (
      <ul className="space-y-3 my-3">
        {React.Children.map(this.props.children, (child) => {
          if (child.props.handlesOwnContainer) {
            return <ErrorBoundary>{child}</ErrorBoundary>;
          } else {
            return <li className="bg-white shadow overflow-hidden rounded-md px-6 py-4">
              <ErrorBoundary>{child}</ErrorBoundary>
            </li>;
          }
        })}
      </ul>
    );
  }
}

export default VerticalModuleList;
