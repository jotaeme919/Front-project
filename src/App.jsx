import { useState } from 'react';
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import Conteudo from './components/Conteudo';
import Equipamentos from './components/cadastros/equipamentos';
import Indicadores from './components/cadastros/indicadores';
import Medicao from './components/cadastros/medicao';
import Safra from './components/cadastros/safra';
import TipoInformacao from './components/cadastros/tipoInformacao';
import Unidade from './components/cadastros/unidade';
import UnidadeMedida from './components/cadastros/unidadeMedida';
import Funcionarios from './components/cadastros/funcionarios';
import Usuarios from './components/cadastros/usuarios'
import Login from './components/login'

import './App.css';

function App() {
  const [menuAberto, setMenuAberto] = useState(true);
  const [tela, setTela] = useState('inicio');

  function alterarMenu() {
    setMenuAberto(!menuAberto);
  }

  return (
    <>
      <Header />

      <div className="layout">
        <MenuLateral
          aberto={menuAberto}
          setTela={setTela}
        />

        <main className="area-conteudo">
          <div className="p-3 border-bottom bg-white">
            <button
              className="btn btn-primary"
              onClick={alterarMenu}
            >
              ☰ Menu
            </button>
          </div>

          {tela === 'inicio' && <Conteudo />}

          {tela === 'equipamentos' && <Equipamentos />}
          {tela === 'indicadores' && <Indicadores />}
          {tela === 'medicao' && <Medicao />}
          {tela === 'safra' && <Safra />}
          {tela === 'tipo-informacao' && <TipoInformacao />}
          {tela === 'unidade' && <Unidade />}
          {tela === 'unidade-medida' && <UnidadeMedida />}
          {tela === 'funcionarios' && <Funcionarios />}
          {tela === 'usuarios' && <Usuarios />}
          {tela === 'login' && <Login setTela={setTela} />}

          
        </main>
      </div>
    </>
  );
}

export default App;