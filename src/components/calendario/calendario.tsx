import { useState } from "react";
import { diasDaSemana } from "../../constants";
import { useDias } from "./logic/useDias";
import { useHoverEffect } from "./logic/useHoverEffect";
import "./styles.css";

export const Calendario = ({ mes, ano }: CalendarioProps) => {
  const [hoveredIndexes, setHoveredIndexes] = useState<Number[]>();
  const { calculateIndexes } = useHoverEffect();
  const { calculaDias } = useDias(),
    dias = calculaDias({ mes, ano });

  return (
    <table>
      <tr>
        {diasDaSemana.map((dia, index) => (
          <th key={index}>{dia}</th>
        ))}
      </tr>
      {dias.map((semana, linha) => (
        <tr key={linha}>
          {semana.map(({ dia, atual }, coluna) => {
            const key = Number(`${linha}${coluna}`);

            return (
              <td
                className={`
                ${atual ? "atual" : ""} 
                ${hoveredIndexes?.includes(key) ? "hover" : ""}`}
                key={key}
                onMouseOver={() => setHoveredIndexes(calculateIndexes(key))}
              >
                {dia}
              </td>
            );
          })}
        </tr>
      ))}
    </table>
  );
};
