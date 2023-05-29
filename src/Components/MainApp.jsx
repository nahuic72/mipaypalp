import { Toaster } from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

const MainApp = () => {
  return (
    <main>
      <Outlet />
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: '#29efcb',
              color: ' #363b3e',
            },
          },
          error: {
            style: {
              background: '#29efcb',
              color: ' #363b3e',
            },
          },
        }}
      />
    </main>
  )
}

export default MainApp
