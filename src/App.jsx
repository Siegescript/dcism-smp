import logo from './assets/logo.jpg'
import './styles/App.css'
import Card from './components/Card'
import minecraft_title from './assets/minecraft_title.png'

function App() {
  // toggle this while developing; later replace with fetch/ping logic
  const online = false;

  return (
    <>
      <header className="header">
        <a
          href="https://www.youtube.com/watch?v=R-94sRlAAWE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="DCISM department video"
        >
          <img src={logo} className="logo" alt="DCISM logo" />
        </a>

        <img src={minecraft_title} className="title" alt="DCISM Minecraft SMP" />
      </header>

      <main className="main">
        <Card title="Welcome">
          <p>Welcome to the unofficial USC DCISM Minecraft SMP server!</p>
        </Card>

        <Card title="Server">
          <p>
            Status:{' '}
            <span
              role="status"
              aria-live="polite"
              className={online ? 'online' : 'offline'}
            >
              {online ? 'Online' : 'Offline'}
            </span>
          </p>

          <p>
            Address:{' '}
            <strong className="address">minecraft.dcism.org:20096</strong>
          </p>
        </Card>
      </main>
    </>
  )
}

export default App
