import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {textInput: '', itemsList: []}

  onInputChange = event => {
    this.setState({textInput: event.target.value})
  }

  addClick = () => {
    const {textInput, itemsList} = this.state
    const item = {
      id: v4(),
      text: textInput,
    }
    this.setState(prev => ({
      itemsList: [...prev.itemsList, item],
      textInput: '',
    }))
    console.log(itemsList)
  }

  render() {
    const {textInput, itemsList} = this.state
    const zeroList = itemsList.length === 0
    return (
      <div>
        <div>
          <h1>Count the characters like a Boss</h1>
          {zeroList ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul>
              {itemsList.map(i => (
                <li key={i.id}>
                  <p>{`${i.text} : ${i.text.length}`}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <form>
          <h1>Character Counter</h1>
          <div>
            <input
              onChange={this.onInputChange}
              type="text"
              value={textInput}
              placeholder="Enter the Characters here"
            />
            <button onClick={this.addClick} type="button">
              Add
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default App
