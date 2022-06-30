import { Header } from './components/Header'
import { List } from './components/Todo/List'
import { AppProvider } from './context'

import './global.css'

function App() {

  return (
    <AppProvider>
      <Header />
      <List />
    </AppProvider>
  )
}

export default App
