import React from "react";
import Files from "react-files";

class FilePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      filename: null,
      isFileLoaded: false
    };

    this.fileReader = new FileReader();
    this.handleClearFile = this.handleClearFile.bind(this);
    this.fileReader.onload = (event) => {
      // or do whatever manipulation you want on JSON.parse(event.target.result) here.
      try{
        let jsonFile = JSON.parse(event.target.result);
        this.setState({isFileLoaded: true});
        this.props.handleChange(jsonFile);
      } catch(e){
        alert("Something went wrong parsing your file.");
      }
      
    };
  }
  
  handleClearFile(){
      this.setState({isFileLoaded: false});
      this.props.handleChange(null);
  }

  render() {
    return (
        !this.state.isFileLoaded ?
      <div className="files mb-5">
        <Files
          className="w-full border-2 border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 "
          onChange={(files) => {
            this.setState({filename: files[0].name});
            this.fileReader.readAsText(files[0]);
          }}
        >
          <p>{ this.state.isFileLoaded ? <>Currently loaded <i>{this.state.filename}</i></> : "Drop your JSON export here, or click to upload" }</p>
        </Files>
      </div> :     <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate">{this.state.filename}</h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={this.handleClearFile}
        >
          View another file
        </button>
      </div>
    </div>
    );
  }
}

export default FilePicker;
