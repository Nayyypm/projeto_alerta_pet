
import React, { useState } from "react";

function CadastrarAnimal({ addAnimal }) {
  const [fotoUrl, setFotoUrl] = useState('');
  const [raca, setRaca] = useState('');
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');
  const [tipo, setTipo] = useState('');

  const cadastrar = () => {
    if (fotoUrl === '' || raca === '' || nome === '' || local === '' || tipo === '') return;

    addAnimal({ fotoUrl, raca, nome,  local, tipo });

   
    setFotoUrl('');
    setRaca('');
    setNome('');
    setLocal('');
    setTipo('');
  };

  return (
    <>
      <h2 className="cadastrar_animal">Cadastrar Animal</h2>
      <div className="cadastrar">
        <input type="text" onChange={(e) => setFotoUrl(e.target.value)} placeholder="URL da Foto" />
        <input type="text" onChange={(e) => setRaca(e.target.value)} placeholder="Raça" />
        <input type="text" onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
        <input type="text" onChange={(e) => setLocal(e.target.value)} placeholder="Local (Perdido/Encontrado)" />
        <input type="text" onChange={(e) => setTipo(e.target.value)} placeholder="Tipo (Perdido/Resgatado)" />
        <button className="bt_concluir" onClick={cadastrar}>Cadastrar</button>
      </div>
    </>
  );
}

export default CadastrarAnimal;
