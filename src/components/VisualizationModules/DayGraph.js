import React from "react";
import * as calc from "../../DataOrg";
import Plot from "react-plotly.js";
import classNames from "classnames";
import { Switch } from "@headlessui/react";

export default class DayGraph extends React.Component {
  constructor() {
    super();
    this.state = (
      {highResEnabled: false}
    )
  }

  render() {
    const dates = this.props.data.messages.map(msg => new Date(msg.timestamp));
    const days = dates.map(date => new Date(date.getFullYear(), date.getMonth(), date.getDate()));
    const times = dates.map((date, i) => (date - days[i]) / 1000 / 60 / 60);
    return (
      <>
        <Plot
          data={[
            {
              type: "scatter",
              x: days,
              y: times,
              mode: "markers",
              marker: {
                size: this.state.highResEnabled ? 2 : 6,
              }
            },
          ]}
          layout={{
            title: "Message scatterplot",
            yaxis: {
              range: [24, 0],
              dtick: 1,
            }
          }}
        />
        <Switch.Group as="div" className="flex items-center justify-between">
      <span className="flex-grow flex flex-col">
        <Switch.Label as="span" className="text-sm font-medium text-gray-900" passive>
          High resolution
        </Switch.Label>
        <Switch.Description as="span" className="text-sm text-gray-500">
          Render points smaller to see discrete messages.
        </Switch.Description>
      </span>
      <Switch
        checked={this.state.highResEnabled}
        onChange={() => this.setState({highResEnabled: !this.state.highResEnabled})}
        className={classNames(
          this.state.highResEnabled ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            this.state.highResEnabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
    </Switch.Group>
      </>
    );
  }
}
