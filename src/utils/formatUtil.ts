const formatValue = (value: number): string =>
  Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

const formatDate = (value: Date): string =>
  Intl.DateTimeFormat('pt-BR').format(value);

export { formatValue, formatDate };
