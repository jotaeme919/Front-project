import { useState } from 'react';

function Medicao() {
  const [safra, setSafra] = useState('');
  const [equipamentos, setEquipamentos] = useState('');
  const [tipoinformacao, setTipoInformacao] = useState('');
  const [valor, setValor] = useState('');
  const [data, setData] = useState('');
  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState('');

  function salvar(event) {
    event.preventDefault();

    const novosErros = {};

    if (safra.trim() === '') {
      novosErros.safra = 'Informe a safra';
    }

    if (equipamento.trim() === '') {
      novosErros.equipamento = 'Informe o equipamento';
    }

    if (tipoinformacao.trim() === '') {
      novosErros.tipoinformacao = 'Informe o tipo de informação';
    }

    if (valor.trim() === '') {
      novosErros.valor = 'Informe o valor';
    }

    if (data.trim() === '') {
      novosErros.data = 'Informe a data';
    }

    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setMensagem('');
      return;
    }

    setMensagem('Medição cadastrada com sucesso!');
  }

  return (
    <section className="p-4">
      <h2 className="mb-4">Cadastro de Medição</h2>

      {mensagem && (
        <div className="alert alert-success">
          {mensagem}
        </div>
      )}

      <form onSubmit={salvar}>

        <div className="mb-3">
          <label className="form-label">Safra</label>

          <input
            type="text"
            className={`form-control ${
              erros.safra ? 'is-invalid' : ''
            }`}
            value={safra}
            onChange={(event) => setSafra(event.target.value)}
          />

          {erros.safra && (
            <div className="invalid-feedback">
              {erros.safra}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Equipamentos</label>

          <input
            type="text"
            className={`form-control ${
              erros.equipamentos ? 'is-invalid' : ''
            }`}
            value={equipamentos}
            onChange={(event) => setEquipamentos(event.target.value)}
          />

          {erros.equipamentos && (
            <div className="invalid-feedback">
              {erros.equipamentos}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Tipo de Informação</label>

          <input
            type="text"
            className={`form-control ${
              erros.tipoinformacao ? 'is-invalid' : ''
            }`}
            value={tipoinformacao}
            onChange={(event) => setTipoInformacao(event.target.value)}
          />

          {erros.tipoinformacao && (
            <div className="invalid-feedback">
              {erros.tipoinformacao}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Valor</label> 
          <input
            type="number"
            className={`form-control ${
              erros.valor ? 'is-invalid' : ''
            }`}
            value={valor}
            onChange={(event) => setValor(event.target.value)}
          />
          {erros.valor && (
            <div className="invalid-feedback">
              {erros.valor}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Data</label>
          <input
            type="date"
            className={`form-control ${
              erros.data ? 'is-invalid' : ''
            }`}
            value={data}
            onChange={(event) => setData(event.target.value)}
          />
          {erros.data && (
            <div className="invalid-feedback">
              {erros.data}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Cadastrar
        </button>

      </form>
    </section>
  );
}

export default Medicao;
 