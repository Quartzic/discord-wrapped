import React from 'react';
import * as calc from '../../DataOrg';
import { FixedSizeList } from "react-window";

class ReactRow extends React.Component {
  render() {
    const react = this.props.data[this.props.index];
    return(
    <li key={react.name} style={this.props.style} className="py-4 flex">
      <img className="h-10 w-10" src={react.image} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{react.name}</p>
        <p className="text-sm text-gray-500">{react.count} messages</p>
      </div>
    </li>);
  }
}

export default class MostCommonReactionModule extends React.Component {
  render() {
    const data = calc.numberReactions(this.props.data);
    return (
      <>
        <dt className="text-sm font-medium text-gray-500 truncate">Top reactions</dt>
        <ul className="divide-y divide-gray-200">
        {(data.length > 0) ? (
          <FixedSizeList
            itemData={data}
            height={300}
            itemCount={data.length}
            itemSize={72}
            className={"sm:rounded-lg"}
          >
            {ReactRow}
          </FixedSizeList>)
          : "No reactions found."}
        </ul>
      </>
    );
  }
}
