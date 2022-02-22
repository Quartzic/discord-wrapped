import React from 'react';
import StatsCards from '../LayoutModules/StatsCards';
import * as calc from '../../DataOrg';
export default class SpecialMessageTypesInfo extends React.Component {
  render() {
    return (
        <StatsCards
        cols={2}
          data={[
            {
              name: "Number of calls",
              value: calc.numberOfCalls(this.props.data),
            },
            {
              name: "Total minutes called",
              value: Math.round(calc.totalLengthOfCalls(this.props.data) / 1000 / 60),
            },
          ]} 
        />
      );
  }
}
