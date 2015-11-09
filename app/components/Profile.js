var React = require('react');
var Router = require('react-router');

var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');

var Firebase = require('firebase');
var ReactFireMixin = require('reactfire');

var Profile = React.createClass({
  mixins: [Router.State, ReactFireMixin], //allows access to URL stateParams

  getInitialState: function() {

    return {
      notes: [],
      bio: {},
      repos: []
    }
  },

  //all ajax requests go here, listeners, etc., it's a callback
  componentDidMount: function() {
    this.ref = new Firebase('https://tutorialwikireactdemo.firebaseio.com');
    var childref = this.ref.child(this.props.params.username);
    this.bindAsArray(childref, 'notes'); //firebase helper
  },


  //
  componentDidUnmount: function() {
    this.unbind('notes'); //removes listener
  },


  handleAddNotes: function(newNote) {
    this.ref.child(this.props.params.username).set(this.state.notes.concat([newNote]))
  },


  render: function() {
    var username = this.props.params.username;
    console.log(username);
    return (
    <div className="row">
      <div className="col-md-4">
        <UserProfile username={username} bio={this.state.bio}/>
      </div>
      <div className="col-md-4">
        <Repos username={username} repos={this.state.repos} />
      </div>
      <div className="col-md-4">
        <Notes username={username} notes={this.state.notes} addNote={this.handleAddNotes} />
      </div>
    </div>
    )
  }

});

module.exports = Profile;