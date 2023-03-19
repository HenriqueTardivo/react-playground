export type CalculaDate = {
  proximo: boolean;
} & CalendarioProps;

export function useMes() {
  function calculaDate({ mes, ano, proximo = true }: CalculaDate) {
    const dataAtual = new Date(ano, mes - 1);

    const mesAnterior = new Date(
      dataAtual.getFullYear(),
      dataAtual.getMonth() - 1
    );
    const proximoMes = new Date(
      dataAtual.getFullYear(),
      dataAtual.getMonth() + 1
    );

    const result = proximo ? proximoMes : mesAnterior;

    return {
      mes: result.getMonth() + 1,
      ano: result.getFullYear(),
    };
  }

  return {
    calculaDate,
  };
}
