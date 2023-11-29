
import { useState } from 'react';
import './App.css';
import CadastrarAnimal from './components/cadastrarAnimal';
import Filtrar from './components/Filtrar';
import Listagem from './components/Listagem';

function App() {
  const [listaAnimais, setListaAnimais] = useState([
    { id: 1, fotoUrl: "https://manualpet.com/wp-content/uploads/others/image/7fede22418b72ef0256415d3bfcf6732.jpg",
     raca: "Gato Bengal", nome: "Kiara",local: "Rua: Castro Alves, Lençóis Paulista-SP", tipo: "Perdido" },
    { id: 2, fotoUrl: "https://petcare.com.br/wp-content/uploads/2022/11/2-23.jpg", raca: "Golden retriever",nome: "Simba",  local: "Rua:Vinte e Oito de Abril, Lençóis Paulista-SP", tipo: "Perdido" },
    { id: 3, fotoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxa2Uf0D-kogsJErCQtr0iNTHN6rcAfFkD-A&usqp=CAU", raca: " Gato Persa",nome: "Pantera",  local: "Rua: Osvaldo Cruz, Leçóis Paulista-SP", tipo: "Resgatado" },

  ]);

  const addAnimal = (animalInfo) => {
    const newListaAnimais = [...listaAnimais, { id: Math.floor(Math.random() * 1000000), ...animalInfo }];
    setListaAnimais(newListaAnimais);
  };

  const alterarStatusAnimal = (id) => {
    const newListaAnimais = listaAnimais.map(animal => {
      if (animal.id === id) {
        return { ...animal, tipo: animal.tipo === "Perdido" ? "Resgatado" : "Perdido" };
      }
      return animal;
    });
    setListaAnimais(newListaAnimais);
  };

  const removerAnimal = (id) => {
    const newListaAnimais = listaAnimais.filter(animal => animal.id !== id);
    setListaAnimais(newListaAnimais);
  };

  const [search, setSearch] = useState('');
  const [filtro, setFiltro] = useState('Todos');
  const [ordem, setOrdem] = useState('');

  return (
    <>
      <div className='app'>
        <h1 className='alerta_pet'>AlertaPet</h1>
        <CadastrarAnimal addAnimal={addAnimal} />
        <Filtrar
          search={search}
          setSearch={setSearch}
          filtro={filtro}
          setFiltro={setFiltro}
          setOrdem={setOrdem}
        />
        {listaAnimais
          .filter(animal => {
            if (filtro === "Concluido") {
              return animal.tipo === "Resgatado";
            } else if (filtro === "Pendente") {
              return animal.tipo === "Perdido";
            } else {
              return animal;
            }
          })
          .filter(animal => animal.raca.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) => {
            if (ordem === "Crescente") {
              return a.raca.localeCompare(b.raca);
            } else if (ordem === "Decrescente") {
              return b.raca.localeCompare(a.raca);
            } else {
              return false;
            }
          })
          .map((animal) => (
            <Listagem
              key={animal.id}
              animal={animal}
              alterarStatusAnimal={alterarStatusAnimal}
              removerAnimal={removerAnimal}
            />
          ))}
      </div>
    </>
  );
}

export default App;

