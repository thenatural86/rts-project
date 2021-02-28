import ReactDom from 'react-dom'
import { EventComponent } from './event/EventComponent'
import GuestList from './state/GuestList'
import UserSearch from './refs/UserSearch'

const App = () => {
  return (
    <div>
      <GuestList />
      <UserSearch />
      <EventComponent />
    </div>
  )
}

ReactDom.render(<App />, document.querySelector('#root'))
