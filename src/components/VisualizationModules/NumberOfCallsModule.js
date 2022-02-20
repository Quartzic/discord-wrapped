import React from 'react';
import * as calc from '../../DataOrg';

export default class NumberOfCallsModule extends React.Component {
  render() {
    return <p>Number of calls: {calc.numberOfCalls(this.props.data)}</p>;
  }
}
