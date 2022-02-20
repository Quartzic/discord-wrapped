import React from "react";
import classNames from "classnames";

export default class HorizontalCardsList extends React.Component {
  render() {
    return (
      <div>
        <dl
          className={classNames(
            "mt-5 grid grid-cols-2 gap-5",
          )}
        >
          {this.props.data.map((stat) => {
            return (
              <div
                key={stat.name}
                className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
              >
                <dt className="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {stat.value}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    );
  }
}
