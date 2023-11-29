
import React from 'react';

function Listagem({ animal, alterarStatusAnimal, removerAnimal }) {
  return (
    <>
      <div className="tarefa">
        <img src={animal.fotoUrl} className="imagem" alt={animal.raca} style={{ width: '100px', height: '100px' }} />
        <h3 className='raca'>{animal.raca} {animal.nome}</h3>
        <p className='infos'>{`Local: ${animal.local}, Tipo: ${animal.tipo}`}</p>
        <div>
          <button className="bt_concluir" onClick={() => alterarStatusAnimal(animal.id)}>Alterar Status</button>
          <button className="bt_remover" onClick={() => removerAnimal(animal.id)}>Remover</button>
        </div>
      </div>
    </>
  );
}

export default Listagem;
