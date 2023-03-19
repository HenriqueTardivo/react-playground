export function useHoverEffect() {
  function calculateIndexes(index?: number) {
    if (!index) return [];

    let result = [index - 1, index, index + 1];
    result = result.concat([result[0] - 10, result[1] - 10, result[2] - 10]);
    result = result.concat([result[0] + 10, result[1] + 10, result[2] + 10]);

    return result;
  }

  return {
    calculateIndexes,
  };
}
