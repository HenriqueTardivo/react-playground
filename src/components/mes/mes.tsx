import { CaretLeft, CaretRight } from "phosphor-react";
import { useMemo, useState } from "react";
import { Meses, mesesNumero } from "../../constants";
import { useMes, CalculaDate } from "./logic/useMes";
import "./styles.css";

type Props = {
  date: CalendarioProps;
  mudaData: (data: CalendarioProps) => void;
};

export const Mes = ({ date, mudaData }: Props) => {
  const { mes, ano } = date;
  const descMes = Meses[date.mes] || "";
  const [trigger, setTrigger] = useState<CalculaDate>();

  const { calculaDate } = useMes();

  useMemo(() => {
    if (trigger) mudaData(calculaDate(trigger));
  }, [trigger]);

  function handleNavigate(proximo: boolean) {
    setTrigger({
      ano,
      mes,
      proximo,
    });
  }

  return (
    <div className="container">
      <button className="btnNavigator" onClick={() => handleNavigate(false)}>
        <CaretLeft size={32} />
      </button>

      <div className="mes">{descMes} </div>

      <button className="btnNavigator" onClick={() => handleNavigate(true)}>
        <CaretRight size={32} />
      </button>
    </div>
  );
};
