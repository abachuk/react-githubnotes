var React = require('react');
var NoteList = require('./NotesList');
var Notes = require('./Notes');

var AddNote = React.createClass({
  
  propTypes: {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
  },

  handleSubmit: function() {
    var newNote = this.refs.note.getDOMNode().value;
    this.refs.note.getDOMNode().value = '';
    this.props.addNote(newNote);
  },

  render: function() {  
    return (
      <div className="input-group">
        <h4>Adding a Note</h4>
        <input type="text" className="form-control" ref="note" placeholder="Add new note" />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit}> Submit </button>
        </span>
        
      </div>
    )
  }
});

module.exports = AddNote;