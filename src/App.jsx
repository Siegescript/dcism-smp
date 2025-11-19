import logo from './assets/logo.jpg'
import './styles/App.css'
import Card from './components/Card'
import minecraft_title from './assets/minecraft_title.png'

function App() {

  return (
    <>
      <div>
        <a href="https://www.youtube.com/watch?v=R-94sRlAAWE" target="_blank">
          <img src={logo} className="logo" alt="DCISM logo" />
        </a>
      </div>

      <img src={minecraft_title} className="title" alt="DCISMP" />

      <Card>
        <p>Welcome to the unofficial USC DCISM Minecraft SMP server!</p>
      </Card>

      <Card>
        <p>Status: <strong>Offline</strong></p>
        <p>Address: <strong>minecaft.dcism.org:20096</strong></p>
      </Card>
    </>
  )
}

export default App
