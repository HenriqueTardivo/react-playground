import { diasDaSemana } from "../../constants";
import { useDias } from "./logic/useDias";
import * as styles from "./style/calendario.style";

export type CalendarioProps = {
  mes: number;
  ano: number;
};

export const Calendario = ({ mes, ano }: CalendarioProps) => {
  const { calculaDias } = useDias(),
    dias = calculaDias({ mes, ano });

  return (
    <table style={styles.table}>
      <tr>
        {diasDaSemana.map((dia, index) => (
          <th style={styles.tableData} key={index}>
            {dia}
          </th>
        ))}
      </tr>
      {dias.map((semana, index) => (
        <tr key={index}>
          {semana.map((nr_dias, index) => (
            <td style={styles.tableData} key={index}>
              {nr_dias}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
};
