import React from 'react';
import * as calc from '../../DataOrg';

export default class NumberOfAttachmentsModule extends React.Component {
  render() {
    return <p>Number of attachments: {calc.numberOfAttachments(this.props.data)}</p>;
  }
}
