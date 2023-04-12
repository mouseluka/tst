import Widget from './Widget'
import './App.css'

const items= new Array(300).fill()
  .map(
    (item, index) => ({id: index, title: `Element ${index}`})
  )

function App() {
  return (
    <div className="app">
      <Widget options={items} />
    </div>
  )
}

export default App