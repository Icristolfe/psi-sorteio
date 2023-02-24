import React, { useState } from 'react';

import {
  Container,
  FraseContainer,
  ContainerItems,
  InputContainer,
  SortButton,
  EditContainer,
  SortContainer,
  ButtonsContainer,
  H1
} from './style'

function App() {
  const [frases, setFrases] = useState([]);
  const [fraseAtual, setFraseAtual] = useState('');
  const [proximoId, setProximoId] = useState(1);
  const [fraseEditada, setFraseEditada] = useState('');
  const [fraseEditadaId, setFraseEditadaId] = useState(null);
  const [sortContainer, setSortContainer] = useState(false)
  const [indice, setIndice] = useState()

  function adicionarFrase() {
    const novaFrase = { id: proximoId, texto: fraseAtual };
    setFrases([...frases, novaFrase]);
    setFraseAtual('');
    setProximoId(proximoId + 1);
  }

  function removerFrase(id) {
    const novasFrases = frases.filter(frase => frase.id !== id);
    setFrases(novasFrases);
  }

  function editarFrase(id) {
    const fraseParaEditar = frases.find(frase => frase.id === id);
    setFraseEditada(fraseParaEditar.texto);
    setFraseEditadaId(id);
  }

  function salvarFraseEditada() {
    const novasFrases = frases.map(frase => {
      if (frase.id === fraseEditadaId) {
        return { id: frase.id, texto: fraseEditada };
      }
      return frase;
    });
    setFrases(novasFrases);
    setFraseEditada('');
    setFraseEditadaId(null);
  }

  function sortearFrase() {
    if (frases.length === 0) {
      alert('Adicione pelo menos uma frase antes de sortear!');
      return;
    }
  
    const indice = Math.floor(Math.random() * frases.length);
    setSortContainer(true);
    setIndice(indice);
  }

  return (
    
    <Container>
      <H1>Plataforma de Sorteios</H1>
      <InputContainer>
      <input value={fraseAtual} onChange={e => setFraseAtual(e.target.value)}/>
      <button onClick={adicionarFrase}>Adicionar Tema</button>
      </InputContainer>
      
      <ContainerItems>

        {frases.map(frase => (
          <FraseContainer key={frase.id}>
            {frase.texto}
            <div>
            <ButtonsContainer onClick={() => removerFrase(frase.id)}>Remover</ButtonsContainer>
            <ButtonsContainer onClick={() => editarFrase(frase.id)}>Editar</ButtonsContainer>
            </div>
          </FraseContainer>
        ))}
     
     </ContainerItems>
      <SortButton onClick={sortearFrase}>Sortear Tema</SortButton>

      {fraseEditadaId && (
        <EditContainer>
          <input value={fraseEditada} onChange={e => setFraseEditada(e.target.value)} />
          <button onClick={salvarFraseEditada}>Salvar edição</button>
        </EditContainer>
      )}

      {
        sortContainer && (
        <SortContainer>
          <h2>{ frases[indice].texto }</h2>
          <div>
          <ButtonsContainer onClick={sortearFrase}>Sortear</ButtonsContainer>
          <ButtonsContainer onClick={e => setSortContainer(false)}>Ok</ButtonsContainer>
          </div>
        </SortContainer>
      )}
    
      
    </Container>
    
  );
}

export default App;
