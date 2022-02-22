import React from 'react';
import StatsCards from '../LayoutModules/StatsCards';
import * as calc from '../../DataOrg';
class SpecialMessageTypesInfo extends React.Component {
  render() {
    return (
        <StatsCards
        cols={2}
          data={[
            {
              name: "Attachments",
              value: calc.numberOfAttachments(this.props.data),
            },
            {
              name: "Average message length",
              value: Math.round(calc.avgMessageLength(this.props.data)) + " characters",
            }
          ]} 
        />
      );
  }
}

export default SpecialMessageTypesInfo;
