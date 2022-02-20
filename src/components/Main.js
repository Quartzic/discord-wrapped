import React from "react";
import FilePicker from "./FilePicker.js";
import { Disclosure } from "@headlessui/react";
import ReactJson from "react-json-view";
import NumberOfCallsModule from "./VisualizationModules/NumberOfCallsModule.js";
import NumberOfAttachmentsModule from "./VisualizationModules/NumberOfAttachmentsModule.js";
import NumberMessagesByPersonModule from "./VisualizationModules/NumberMessagesByPersonModule.js";
import NumberMessagesByContentModule from "./VisualizationModules/NumberMessagesByContentModule.js";
import ProfanityUsedModule from "./VisualizationModules/ProfanityUsedModule.js";
import MostCommonReactionModule from "./VisualizationModules/MostCommonReactionModule.js";
import BasicInfoModule from "./VisualizationModules/BasicInfoModule.js";
import HourGraph from "./VisualizationModules/HourGraph.js";
import DayGraph from "./VisualizationModules/DayGraph.js";
import VerticalModuleList from "./LayoutModules/VerticalModuleList.js";
import SpecialMessageTypesInfo from "./VisualizationModules/SpecialMessageTypesInfo.js";
import CallInfoModule from "./VisualizationModules/CallInfoModule.js";
import StatsCards from "./LayoutModules/StatsCards.js";
import FAQ from "./LayoutModules/FAQ.js";
import * as calc from "../DataOrg.js";
class Main extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      data: null,
    };
  }

  handleChange(data) {
    this.setState({
      data: data,
    });
  }

  render() {
    return (
      <div className="p-6 shadow-xl">
        <FilePicker handleChange={this.handleChange} />

        {this.state.data ? (
          <>
            <VerticalModuleList>
              <BasicInfoModule data={this.state.data} handlesOwnContainer />
              <SpecialMessageTypesInfo
                data={this.state.data}
                handlesOwnContainer
              />
              <CallInfoModule data={this.state.data} handlesOwnContainer />
              {/* <ProfanityUsedModule data={this.state.data} /> */}
              <NumberMessagesByPersonModule data={this.state.data} />
              <NumberMessagesByContentModule data={this.state.data} />
              <MostCommonReactionModule data={this.state.data} />
              {/* <StatsCards
                cols={1}
                data={[
                  {
                    name: "Time Messages Were Sent Most",
                    value: calc.timeSentMost(this.state.data),
                  },
                ]}
                handlesOwnContainer
              /> */}
              <HourGraph data={this.state.data} />
              <DayGraph data={this.state.data} />
            </VerticalModuleList>
          </>
        ) : <FAQ
        data={[
          {
            question: "How do I export my data for use with this tool?",
            answer: (
              <p>
                You can use{" "}
                <a
                  href="https://github.com/Tyrrrz/DiscordChatExporter"
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  DiscordChatExporter
                </a>{" "}
                to export your chat history from Discord to a JSON file.
                Then, upload the file to this website.
              </p>
            ),
          },
          {
            question: "Is this site private?",
            answer: (
              <>
                <p>
                  Discord Chat Analyzer runs entirely in-browser and{" "}
                  <b>does not store or send any chat data</b>. We use{" "}
                  <a
                    href="https://www.goatcounter.com"
                    className="underline text-blue-600 hover:text-blue-800"
                  >
                    Goat Counter
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://sentry.io"
                    className="underline text-blue-600 hover:text-blue-800"
                  >
                    Sentry
                  </a>{" "}
                  for analytics and error-monitoring.
                </p>
              </>
            ),
          },
        ]}
      />}

      </div>
    );
  }
}

export default Main;
