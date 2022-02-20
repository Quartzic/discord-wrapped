import React from "react";
import * as calc from "../../DataOrg";
import Plot from "react-plotly.js";

export default class TimeSentMostModule extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {console.log(this.props.data.messages.map(msg => new Date(msg.timestamp).getHours()))}
        <Plot
          data={[
            {
              xbins: {
                start: 0,
                end: 24,
              },
              x: this.props.data.messages.map(msg => new Date(msg.timestamp).getHours()),
              type: "histogram",
              histnorm: "percent",
            },
          ]}
          layout={{
            title: "Time sent most",
            xaxis: {
              range: [0, 24],
              dtick: 1,
            }
          }}
        />
      </>
    );
  }

  componentDidMount() {
  }
}

