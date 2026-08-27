import { useState } from 'react';

function TipoInformacao() {
  const [nome, setNome] = useState('');
  const [unidademedida, setUnidadeMedida] = useState('');
  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState('');

  function salvar(event) {
    event.preventDefault();

    const novosErros = {};

    if (nome.trim() === '') {
      novosErros.nome = 'Informe o nome';
    }

    if (unidademedida.trim() === '') {
      novosErros.unidademedida = 'Informe a unidade de medida';
    }


    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setMensagem('');
      return;
    }

    setMensagem('Tipo de Informação cadastrado com sucesso!');
  }

  return (
    <section className="p-4">
      <h2 className="mb-4">Cadastro de Tipo de Informação</h2>

      {mensagem && (
        <div className="alert alert-success">
          {mensagem}
        </div>
      )}

      

      <form onSubmit={salvar}>

      

        <div className="mb-3">
          <label className="form-label">Nome</label>

          <input
            type="text"
            className={`form-control ${
              erros.nome ? 'is-invalid' : ''
            }`}
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

          {erros.nome && (
            <div className="invalid-feedback">
              {erros.nome}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Unidade de Medida</label>

          <input
            type="text"
            className={`form-control ${
              erros.unidademedida ? 'is-invalid' : ''
            }`}
            value={unidademedida}
            onChange={(event) => setUnidadeMedida(event.target.value)}
          />

          {erros.unidademedida && (
            <div className="invalid-feedback">
              {erros.unidademedida}
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

export default TipoInformacao;