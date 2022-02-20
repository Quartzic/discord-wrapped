import React from "react";
import StatsCards from "../LayoutModules/StatsCards";
export default class BasicInfoModule extends React.Component {
  render() {
    return (
      <StatsCards
      cols={2}
        data={[
          {
            name: "Channel name",
            value: this.props.data.channel.name,
          },
          {
            name: "Total messages",
            value: this.props.data.messages.length,
          }
        ]} 
      />
    );
  }
}
