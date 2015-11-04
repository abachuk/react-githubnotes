var React = require('react');
var NoteList = require('./NotesList');

var Notes = React.createClass({
  render: function() {
    return (
      <div>
        <h4>Notes for {this.props.username}:</h4>
        <NoteList notes={this.props.notes} />
      </div>
    )
  }
});

module.exports = Notes;