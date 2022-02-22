import React from "react";
import * as calc from "../../DataOrg";
import { FixedSizeList } from "react-window";

class PersonRow extends React.Component {
  render() {
    const person = this.props.data[this.props.index];
    return(
    <li key={person.name} style={this.props.style} className="py-4 flex">
      <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{person.name}</p>
        <p className="text-sm text-gray-500">{person.count} messages</p>
      </div>
    </li>);
  }
}

export default class NumberMessagesByPersonModule extends React.Component {
  render() {
    const data = calc.numberMessagesByPerson(this.props.data);
    return (
      <>
        <dt className="text-sm font-medium text-gray-500 truncate">
          Top messages by person
        </dt>
        <ul className="divide-y divide-gray-200">
        {(data.length > 0) ? (
          <FixedSizeList
            itemData={data}
            height={200}
            itemCount={data.length}
            itemSize={72}
            className={"sm:rounded-lg"}
          >
            {PersonRow}
          </FixedSizeList>)
          : "No people found."}
        </ul>
      </>
    );
  }
}
