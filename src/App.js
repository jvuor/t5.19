import React from 'react';
import { actionFor } from './reducer'

class App extends React.Component {
  
  constructor(props) {
    super(props)

  }

  vote = (event) => {
    event.preventDefault()
    const id = event.target.name
    console.log('id', id)
    this.props.store.dispatch(
      actionFor.vote(id)
    )
  }

  addAnecdote = (event) => {
    event.preventDefault()
    const newContent = event.target.content.value
    this.props.store.dispatch(actionFor.anecdoteCreation(newContent))

  }

  render() {
    const anecdotes = this.props.store.getState()
    anecdotes.sort((a,b) => b.votes - a.votes)
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.map(anecdote=>
          <div key={anecdote.id}>
            <div>
              {anecdote.content} 
            </div>
            <div>
              has {anecdote.votes} 
              <button onClick={this.vote} name={anecdote.id}>vote</button>
            </div>
          </div>
        )}
        <h2>create new</h2>
        <form onSubmit={this.addAnecdote}>
          <div><input name='content'/></div>
          <button type='submit'>create</button> 
        </form>
      </div>
    )
  }
}

export default App