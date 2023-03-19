import { useState } from "react";
import "./App.css";
import { Calendario } from "./components/calendario/calendario";
import { Mes } from "./components/mes/mes";

export function App() {
  const initialValue = {
    mes: new Date().getMonth() + 1,
    ano: new Date().getFullYear(),
  };

  const [date, setDate] = useState<CalendarioProps>(initialValue);

  return (
    <main>
      <Mes date={date} mudaData={(mes) => setDate(mes)} />
      <Calendario mes={date.mes} ano={date.ano} />
    </main>
  );
}

export default App;
