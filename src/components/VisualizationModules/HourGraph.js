import React from "react";
import * as calc from "../../DataOrg";
import Plot from "react-plotly.js";

export default class HourGraph extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <Plot
          data={[
            {
              type: "histogram",
              histnorm: "percent",
              xbins: {
                start: 0,
                end: 24,
              },
              x: this.props.data.messages.map(msg => new Date(msg.timestamp).getHours()),
            },
          ]}
          layout={{
            title: "Distribution of messages over hours of the day",
            xaxis: {
              range: [0, 24],
              dtick: 1,
            }
          }}
        />
      </>
    );
  }
}
