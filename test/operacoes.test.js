const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('6a. deve lançar erro para número negativo na raiz quadrada', () => {
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  test('6b. deve calcular a raiz quadrada de zero', () => { expect(raizQuadrada(0)).toBe(0); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('8a. deve calcular o fatorial de 0', () => { expect(fatorial(0)).toBe(1); });
  test('8b. deve calcular o fatorial de 1', () => { expect(fatorial(1)).toBe(1); });
  test('8d. deve garantir que fatorial de 2 retorna 2 (não 1)', () => { expect(fatorial(2)).toBe(2); });
  test('8c. deve lançar erro para número negativo no fatorial', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('9a. deve retornar 0 para array vazio na média', () => { expect(mediaArray([])).toBe(0); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('11a. deve lançar erro para array vazio no máximo', () => {
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('12a. deve lançar erro para array vazio no mínimo', () => {
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('15a. deve retornar false para um número ímpar', () => { expect(isPar(7)).toBe(false); });
  test('15b. deve retornar true para zero', () => { expect(isPar(0)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('16a. deve retornar false para um número par', () => { expect(isImpar(100)).toBe(false); });
  test('16b. deve retornar false para zero', () => { expect(isImpar(0)).toBe(false); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('33a. deve retornar false para números menores ou iguais a 1', () => {
    expect(isPrimo(1)).toBe(false);
    expect(isPrimo(0)).toBe(false);
    expect(isPrimo(-1)).toBe(false);
  });
  test('33b. deve retornar false para números compostos', () => {
    expect(isPrimo(4)).toBe(false);
    expect(isPrimo(6)).toBe(false);
    expect(isPrimo(9)).toBe(false);
    expect(isPrimo(10)).toBe(false);
  });
  test('33c. deve retornar true para outros números primos', () => {
    expect(isPrimo(2)).toBe(true);
    expect(isPrimo(3)).toBe(true);
    expect(isPrimo(5)).toBe(true);
    expect(isPrimo(11)).toBe(true);
  });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('35a. deve retornar 1 para array vazio no produto', () => { expect(produtoArray([])).toBe(1); });
  test('35b. deve calcular produto de array com um elemento', () => { expect(produtoArray([5])).toBe(5); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('36a. deve retornar min quando valor é menor que min', () => { expect(clamp(-1, 0, 10)).toBe(0); });
  test('36b. deve retornar max quando valor é maior que max', () => { expect(clamp(15, 0, 10)).toBe(10); });
  test('36c. deve retornar o valor quando está no limite inferior', () => { expect(clamp(0, 0, 10)).toBe(0); });
  test('36d. deve retornar o valor quando está no limite superior', () => { expect(clamp(10, 0, 10)).toBe(10); });
  test('36e. deve garantir que clamp(1, 0, 10) retorna 1 e não 0', () => { expect(clamp(1, 0, 10)).toBe(1); });
  test('36f. deve garantir que clamp(9, 0, 10) retorna 9 e não 10', () => { expect(clamp(9, 0, 10)).toBe(9); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('37a. deve retornar false quando não é divisível', () => { expect(isDivisivel(10, 3)).toBe(false); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('38a. deve converter Celsius para Fahrenheit com outro valor', () => { expect(celsiusParaFahrenheit(100)).toBe(212); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('39a. deve converter Fahrenheit para Celsius com outro valor', () => { expect(fahrenheitParaCelsius(212)).toBe(100); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });
  test('40a. deve lançar erro para inverso de zero', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('44a. deve retornar false quando não é maior', () => { expect(isMaiorQue(5, 10)).toBe(false); });
  test('44b. deve retornar false quando são iguais', () => { expect(isMaiorQue(5, 5)).toBe(false); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('45a. deve retornar false quando não é menor', () => { expect(isMenorQue(10, 5)).toBe(false); });
  test('45b. deve retornar false quando são iguais', () => { expect(isMenorQue(5, 5)).toBe(false); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('46a. deve retornar false quando números são diferentes', () => { expect(isEqual(7, 8)).toBe(false); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('47a. deve calcular a mediana de um array par', () => { expect(medianaArray([1, 2, 3, 4])).toBe(2.5); });
  test('47b. deve calcular a mediana de um array não ordenado', () => { expect(medianaArray([5, 1, 3, 2, 4])).toBe(3); });
  test('47d. deve calcular a mediana corretamente quando array está invertido', () => { 
    expect(medianaArray([10, 20, 30])).toBe(20); 
    expect(medianaArray([30, 10, 20])).toBe(20);
  });
  test('47c. deve lançar erro para array vazio na mediana', () => {
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
  });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});