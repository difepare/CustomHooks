import { FetchApp } from "./Components/FetchApp"
import {CounterApp} from "./Components/CounterApp"
import {FormsApp} from "./Components/FormsApp"
export const HooksApp = () => {
  return (
    <>
    <h1>Aplicacion de Hooks</h1>
    <hr/>
    <FetchApp/>
    <hr />
    <CounterApp/>
    <hr />
   <FormsApp/>
    </>
  )
}
