import { useState } from 'react';

function Equipamentos() {
  const [nome, setNome] = useState('');
  const [id, setId] = useState('');
  const [unidade, setUnidade] = useState('');
  const [setor, setSetor] = useState('');
  const [erros, setErros] = useState({});
  const [mensagem, setMensagem] = useState('');

  function salvar(event) {
    event.preventDefault();

    const novosErros = {};

    if (nome.trim() === '') {
      novosErros.nome = 'Informe o nome';
    }

    if (id.trim() === '') {
      novosErros.id = 'Informe o ID';
    }

    if (unidade.trim() === '') {
      novosErros.unidade = 'Informe a unidade';
    }

    if (setor === '') {
      novosErros.setor = 'Selecione o setor';
    }

    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setMensagem('');
      return;
    }

    setMensagem('Equipamento cadastrado com sucesso!');
  }

  return (
    <section className="p-4">
      <h2 className="mb-4">Cadastro de Equipamento</h2>

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
          <label className="form-label">ID</label>

          <input
            type="text"
            className={`form-control ${
              erros.id ? 'is-invalid' : ''
            }`}
            value={id}
            onChange={(event) => setId(event.target.value)}
          />

          {erros.id && (
            <div className="invalid-feedback">
              {erros.id}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Unidade</label>

          <input
            type="text"
            className={`form-control ${
              erros.unidade ? 'is-invalid' : ''
            }`}
            value={unidade}
            onChange={(event) => setUnidade(event.target.value)}
          />

          {erros.unidade && (
            <div className="invalid-feedback">
              {erros.unidade}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Setor</label>

          <select
            className={`form-select ${
              erros.setor ? 'is-invalid' : ''
            }`}
            value={setor}
            onChange={(event) => setSetor(event.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Administrativo">Administrativo</option>
            <option value="Produção">Produção</option>
            <option value="Manutenção">Manutenção</option>
            <option value="TI">TI</option>
          </select>

          {erros.setor && (
            <div className="invalid-feedback">
              {erros.setor}
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

export default Equipamentos;