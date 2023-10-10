import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import AppNavigator from './navigation/AppNavigator'

const container = document.getElementById('root')

if (!container) {
  throw new Error("React root element doesn't exist!")
}

const root = createRoot(container)

root.render(
  <StrictMode>
    <AppNavigator />
  </StrictMode>,
)
