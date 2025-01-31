/* @refresh reload */
import { render } from 'solid-js/web'

import './index.css'
import App from './App'

const root = document.getElementById('root')

// biome-ignore lint/style/noNonNullAssertion: <explanation>
render(() => <App />, root!)
