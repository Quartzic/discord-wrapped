import React from 'react';
import * as calc from '../../DataOrg';

export default class ProfanityUsedModule extends React.Component {
  render() {
    return <p>Messages with profanity: {calc.profanityUsed(this.props.data)}</p>;
  }
}
