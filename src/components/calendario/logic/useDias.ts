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
    let resultado: Dia[] = [];

    if (diaSemana === 0) return resultado;

    do {
      resultado.push({ dia: qtdeAnterior, atual: false });
      qtdeAnterior -= 1;
      diaSemana -= 1;
    } while (diaSemana > 1);

    return resultado.reverse();
  }

  function arrayDiasSeq(qtdeDias: number, atual: boolean) {
    let result: Dia[] = [],
      dia = 1;

    do {
      result.push({
        dia,
        atual,
      });
      dia += 1;
    } while (dia <= qtdeDias);

    return result;
  }

  function montaMes(primeiros: Dia[], diasAtuais: Dia[], ultimos: Dia[]) {
    let result = Array.from({ length: 6 }, () => new Array(7) as Dia[]),
      linha = 0,
      coluna = 0;

    const concatArray = (dia: Dia) => {
      result[linha][coluna] = dia;

      coluna += 1;
      if (coluna === 7) {
        linha += 1;
        coluna = 0;
      }
    };

    primeiros.forEach((dia) => concatArray(dia));

    diasAtuais.forEach((dia) => concatArray(dia));

    ultimos.forEach((dia) => concatArray(dia));

    return result;
  }

  function calculaDias({ mes, ano }: { mes: number; ano: number }): Dia[][] {
    const dias = {
      qt_anterior: diasMes(ano, mes - 1),
      qt_atual: diasMes(ano, mes),
      primeiro: primeiroDia(ano, mes),
      ultimo: ultimoDia(ano, mes),
    };

    const diasMesPassado = arrayPrimeirosDias(dias.qt_anterior, dias.primeiro);

    const qtDiasProx = 42 - dias.qt_atual - diasMesPassado.length;

    const diasProximoMes = arrayDiasSeq(qtDiasProx, false);

    const diasAtuais = arrayDiasSeq(dias.qt_atual, true);

    const arrayMes = montaMes(diasMesPassado, diasAtuais, diasProximoMes);

    return arrayMes;
  }

  return {
    calculaDias,
  };
}
