import { CaretLeft, CaretRight } from "phosphor-react";
import { Meses, mesesNumero } from "../../constants";
import * as styles from "./style/mes.style";

type Props = {
  mes: typeof mesesNumero[number];
  mudaMes: (mes: number) => void;
};

export const Mes = ({ mes, mudaMes }: Props) => {
  const descMes = Meses[mes] || "";

  return (
    <div style={styles.conatainer}>
      <div>
        <CaretLeft size={32} />
      </div>

      <div style={styles.mes}>{descMes} </div>

      <div>
        <CaretRight size={32} />
      </div>
    </div>
  );
};
