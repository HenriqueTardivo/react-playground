import { CalendarioProps } from "../calendario";

export function useDias() {
  function diasMes(ano: number, mes: number) {
    return new Date(ano, mes, 0).getDate();
  }

  function primeiroDia(ano: number, mes: number) {
    return new Date(`${mes}/01/${ano}`).getDay();
  }

  function ultimoDia(ano: number, mes: number) {
    return new Date(ano, mes, 0).getDay();
  }

  function arrayPrimeirosDias(qtdeAnterior: number, diaSemana: number) {
    let resultado: number[] = [];

    if (diaSemana === 0) return resultado;

    do {
      resultado.push(qtdeAnterior);
      qtdeAnterior -= 1;
      diaSemana -= 1;
    } while (diaSemana > 1);

    return resultado.reverse();
  }

  function arrayUltimosDias(ultimoDia: number) {
    let resultado: number[] = [],
      dia = 1;

    if (ultimoDia === 7) return resultado;

    do {
      resultado.push(dia);
      dia += 1;
      ultimoDia += 1;
    } while (ultimoDia < 7);

    return resultado;
  }

  function montaMes(primeiros: number[], ultimos: number[]) {
    let semanaAtual = 5,
      dia = 0,
      result: [number[]] = [[]];

    const completa = (array: number[], onde: "comeco" | "fim") => {
      const paramLeng = 7 - array.length;

      let result = [];

      do {
        dia += 1;
        result.push(dia);
      } while (result.length < paramLeng);

      if (onde === "comeco") {
        result = [...array, ...result];
      } else {
        result = [...result, ...array];
      }

      return result;
    };

    do {
      let semana: number[] = [];

      switch (semanaAtual) {
        case 5:
          semana = completa(primeiros, "comeco");
          break;
        case 1:
          semana = completa(ultimos, "fim");
          break;

        default:
          semana = completa([], "comeco");
          break;
      }

      semanaAtual -= 1;
      result.push(semana);
    } while (semanaAtual > 0);

    return result;
  }

  function calculaDias({ mes, ano }: CalendarioProps) {
    const dias = {
      qtdeDias: {
        anterior: diasMes(ano, mes - 1),
        atual: diasMes(ano, mes),
      },
      diasSemana: {
        primeiro: primeiroDia(ano, mes),
        ultimo: ultimoDia(ano, mes),
      },
    };

    console.log(dias);

    const diasMesPassado = arrayPrimeirosDias(
      dias.qtdeDias.anterior,
      dias.diasSemana.primeiro
    );

    const diasProximoMes = arrayUltimosDias(dias.diasSemana.ultimo);

    const arrayMes = montaMes(diasMesPassado, diasProximoMes);

    return arrayMes;
  }

  return {
    calculaDias,
  };
}
