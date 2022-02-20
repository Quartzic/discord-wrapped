import React from 'react';

class UserInfoPanel extends React.Component {
  render() {
    return <p>Name: {this.props.name}</p>;
  }
}

export default UserInfoPanel;
