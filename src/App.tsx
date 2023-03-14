import { useState } from "react";
import "./App.css";
import { Calendario } from "./components/calendario/calendario";
import { Mes } from "./components/mes/mes";

export function App() {
  const [mes, setMes] = useState<number>(new Date().getMonth() + 1);

  return (
    <main>
      <Mes mes={mes} mudaMes={(mes: number) => setMes(mes)} />
      <Calendario mes={mes} ano={2023} />
    </main>
  );
}

export default App;
