import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import base from './base'
import SignIn from './SignIn'
import SignOut from './SignOut'

class App extends Component {
  constructor() {
    super()

    this.state = {
      notes: {},
      uid: null,
    }
  }

  componentWillMount() {
    base.syncState(
      'notes',
      {
        context: this,
        state: 'notes',
      }
    )
  }

  saveNote = (note) => {
    if (!note.id) {
      note.id = `note-${Date.now()}`
    }
    const notes = {...this.state.notes}
    notes[note.id] = note
    this.setState({ notes })
  }

  signedIn = () => {
    return this.state.uid
  }

  authHandler = (user) => {
    this.setState({ uid: user.uid })
  }

  signOut = () => {
    this.setState({ uid: null })
  }

  renderMain = () => {
    return (
      <div>
        <SignOut signOut={this.signOut}/>
        <Main notes={this.state.notes} saveNote={this.saveNote} />
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        { this.signedIn() ? this.renderMain() : <SignIn authHandler={this.authHandler}/> }
      </div>
    );
  }
}

export default App;
