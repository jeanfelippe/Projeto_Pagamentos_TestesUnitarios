import assert from 'assert';
import ServicoDePagamento from '../src/ServicoDePagamento.js';

describe('ServicoDePagamento', () => {

  describe('#pagar()', () => {
    it('deve registrar um pagamento corretamente', () => {
      const servico = new ServicoDePagamento();
      servico.realizarPagamento('0987-7656-0011', 'Atlas', 120.87);

      const ultimo = servico.consultarUltimoPagamento();
      assert.equal(ultimo.codigoBarras, '0987-7656-0011');
      assert.equal(ultimo.empresa, 'Atlas');
      assert.equal(ultimo.valor, 120.87);
    });

    it(' cara quando o valor for maior que 100.00', () => {
      const servico = new ServicoDePagamento();
      servico.realizarPagamento('5510-7011-3313', 'JulioCompany', 190.00);

      const ultimo = servico.consultarUltimoPagamento();
      assert.equal(ultimo.categoria, 'cara');
    });



    it('padrao quando o valor for menor que 100.00', () => {
      const servico = new ServicoDePagamento();
      servico.realizarPagamento('7557-8888-0011', 'EmpresaPadrao', 40.10);

      const ultimo = servico.consultarUltimoPagamento();
      assert.equal(ultimo.categoria, 'padrão');
    });

 
  });

  describe('#consultarUltimoPagamento()', () => {


    it('deve retornar apenas o último pagamento realizado', () => {
      const servico = new ServicoDePagamento();
      servico.realizarPagamento('1234-5678-0000', 'PrimeiraEmpresa', 50.00);
      servico.realizarPagamento('0100-7116-0000', 'JulioCompany', 110.87);

      const ultimo = servico.consultarUltimoPagamento();
      assert.equal(ultimo.codigoBarras, '0100-7116-0000');
      assert.equal(ultimo.empresa, 'JulioCompany');
      assert.equal(ultimo.valor, 110.87);
      assert.equal(ultimo.categoria, 'cara');
    });


  });

});