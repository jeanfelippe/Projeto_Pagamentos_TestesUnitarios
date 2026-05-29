export default class ServicoDePagamento {
  constructor() {
    this._pagamentos = [];
  }
 
  realizarPagamento(codigoBarras, empresa, valor) {
    const pagamento = {
      codigoBarras,
      empresa,
      valor,
      categoria: valor > 100.00 ? 'cara' : 'padrão',
    };
 
    this._pagamentos.push(pagamento);
  }
 
  consultarUltimoPagamento() {
    if (this._pagamentos.length === 0) {
      return null;
    }
 
    return this._pagamentos[this._pagamentos.length - 1];
  }
}
 
