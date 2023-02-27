import React from 'react';
import './Styles/App.css';
import ModalApp from './Modal';
import { Button, useModal } from '@nextui-org/react';

function App() {
  const { visible, setVisible, bindings } = useModal();
  return (
    <div className="App">
      <header className="App-header">
        <img src='Cap3.jpg' alt='usco-banner' />
        <h1>CURSO DE APLICACIONES MÓVILES 2022-1</h1>
        <h2>Programa de Ingeniería Electrónica</h2>
        <div>
          <h4>Jorge Daniel Quintero Galindo - 20181170054</h4>
          <h4>Karen Yulieth Hernandez Castro - 20181166704</h4>
        </div>
        <Button shadow color='error' onPress={() => setVisible(true)}>
          VER CIRCUITO
        </Button>
        <ModalApp
          visible={visible}
          setVisible={setVisible}
          bindings={bindings}
        />
      </header>
    </div>
  );
}

export default App;
