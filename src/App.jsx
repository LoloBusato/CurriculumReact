import './App.css'
import { LeftCurrContainer } from './Containers/LeftCurrContainer'
import { RightCurrContainer } from './Containers/RightCurrContainer'
import { CoursesContainer } from './Containers/CoursesContainer'

function App() {
  return (
    <div className="curriculum">
      <LeftCurrContainer />
      <RightCurrContainer />
    </div>
  )
}

export default App
