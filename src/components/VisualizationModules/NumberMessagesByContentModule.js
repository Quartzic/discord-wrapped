import React from "react";
import * as calc from "../../DataOrg";
import { FixedSizeList } from "react-window";

class ContentRow extends React.Component {
  render() {
    const content = this.props.data[this.props.index];
    return (
      <li key={content.content} style={this.props.style} className="py-4 flex">
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{content.content}</p>
          <p className="text-sm text-gray-500">{content.count} messages</p>
        </div>
      </li>
    );
  }
}

export default class NumberMessagesByContentModule extends React.Component {
  render() {
    const data = calc
      .numberMessagesByContent(this.props.data)
      .filter((item) => item.count >= 5);
    return (
      <>
        <dt className="text-sm font-medium text-gray-500 truncate">
          Top messages by content
        </dt>
        <ul className="divide-y divide-gray-200">
          {(data.length > 0) ? (
            <FixedSizeList
              itemData={data}
              height={400}
              itemCount={data.length}
              itemSize={72}
              className={"sm:rounded-lg"}
            >
              {ContentRow}
            </FixedSizeList>
          ) : (
            "No common messages found."
          )}
        </ul>
      </>
    );
  }
}
