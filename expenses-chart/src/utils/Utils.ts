export default class Utils {
  static currency(number: number) {
    return new Intl.NumberFormat('es-ES', {style: 'currency',currency: 'EUR', minimumFractionDigits: 2}).format(number);
  };
}
