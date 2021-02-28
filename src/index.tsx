import ReactDom from 'react-dom'

const App = () => {
  return (
    <div>
      <h1>Yolo</h1>
    </div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))
