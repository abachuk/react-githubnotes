var React = require('react');

var UserProfile = React.createClass({
    
  propTypes: {
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },

  render: function() {

    return (
      <div>
      <h3>User Profile</h3>
      <h4>username: {this.props.username}</h4>
      <h4>bio: {this.props.bio}</h4>
      </div>
    )
  }
});

module.exports = UserProfile;