export default class Cpf {
  FACTOR_DIGIT_1 = 10;
  FACTOR_DIGIT_2 = 11;
  MAX_DIGITS_1 = 9;
  MAX_DIGITS_2 = 10;

  constructor(value: string) {
    if (!this.validate(value)) {
      throw new Error("Invalid CPF");
    }
  }

  public validate(cpf = "") {
    cpf = this.extractDigits(cpf);
    if (this.isInvalidLength(cpf)) {
      return false;
    }
    if (this.isBlocked(cpf)) {
      return false;
    }
    const digit1 = this.calculateDigit(cpf, this.FACTOR_DIGIT_1, this.MAX_DIGITS_1);
    const digit2 = this.calculateDigit(cpf, this.FACTOR_DIGIT_2, this.MAX_DIGITS_2);
    let calculatedCheckDigit = `${digit1}${digit2}`;  
    return this.getCheckDigit(cpf) == calculatedCheckDigit;
  }

  public extractDigits(cpf: string): string {
    return cpf.replace(/\D/g, "");
  }

  public isInvalidLength(cpf: string): boolean {
    return cpf.length !== 11;
  }

  public isBlocked(cpf: string): boolean {
    const [digit1] = cpf;
    return cpf.split("").every(digit => digit === digit1);
  }

  public calculateDigit(cpf: string, factor: number, max: number): number {
    let total = 0;
    for (const digit of this.toDigitArray(cpf).slice(0, max)) {
      total += digit * factor--;
    }
    return (total%11 < 2) ? 0 : (11 - total%11);
  }

  public toDigitArray(cpf: string): number[] {
    return [...cpf].map(digit => parseInt(digit));
  }

  public getCheckDigit(cpf: string): string {
    return cpf.slice(9);
  }
}
