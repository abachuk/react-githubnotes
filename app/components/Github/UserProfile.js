var React = require('react');

var UserProfile = React.createClass({
  render: function() {
    return (
      <div>
      <h3>User Profile</h3>
      <h4>username: {this.props.username}</h4>
      </div>
    )
  }
});

module.exports = UserProfile;