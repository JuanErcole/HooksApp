import React from 'react'
import ReactDOM from 'react-dom/client'
/* import { Layout } from './05-useLayoutEffect/Layout'
import { FocusScreen } from './04-useRef/FocusScreen'
import { CounterApp } from './01-useState/CounterApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
import { HooksApp } from './HooksApp' 
import { SimpleForm } from './02-useEffect/SimpleForm' 
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook' 
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks' 
import { Memorize } from './06-memos/Memorize' 
import { MemorizeHook } from './06-memos/MemorizeHook' 
import { CallbackHook } from './06-memos/CallbackHook' */
import { Padre } from './07-tarea-memo/07-tarea-memo/Padre'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <Padre />
  //</React.StrictMode>
)