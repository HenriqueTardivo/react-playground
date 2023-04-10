import { useState } from "react";
import { Calendario, Mes, Center } from "../../components";
import { GoBack } from "../../components/go-back";

interface Props {}

export function CalendarioPage(props: Props) {
  const initialValue = {
    mes: new Date().getMonth() + 1,
    ano: new Date().getFullYear(),
  };

  const [date, setDate] = useState<CalendarioProps>(initialValue);

  return (
    <>
      <GoBack />

      <Center>
        <Mes date={date} mudaData={(mes) => setDate(mes)} />
        <Calendario mes={date.mes} ano={date.ano} />
      </Center>
    </>
  );
}
