import { useState } from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import Form from './components/Form';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [form, setForm] = useState(false);
  const [teams, setTeams] = useState([
    {
      id: uuidv4(),
      title: 'Programación',
      mainColor: '#57C278',
      secondaryColor: '#D9F7E9'
    },
    {
      id: uuidv4(),
      title: 'Front End',
      mainColor: '#82CFFA',
      secondaryColor: '#E8F8FF'
    },
    {
      id: uuidv4(),
      title: 'Data Science',
      mainColor: '#A6D157',
      secondaryColor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      title: 'Devops',
      mainColor: '#E06B69',
      secondaryColor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      title: 'UX y Diseño',
      mainColor: '#DB6EBF',
      secondaryColor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      title: 'Móvil',
      mainColor: '#FFBA05',
      secondaryColor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      title: 'Innovación y  Gestión',
      mainColor: '#FF8A29',
      secondaryColor: '#FFEEDF'
    }
  ]);
  const [collaborators, setCollaborators] = useState([
    {
      id: uuidv4(),
      name: 'Christopher',
      position: 'Developer',
      image: 'https://github.com/thejardev.png',
      team: 'Front End',
      fav: false
    },
    {
      id: uuidv4(),
      name: 'Christopher',
      position: 'Developer',
      image: 'https://github.com/thejardev.png',
      team: 'Devops',
      fav: false
    },
    {
      id: uuidv4(),
      name: 'José',
      position: 'Developer',
      image: 'https://github.com/JoseDarioGonzalezCha.png',
      team: 'Móvil',
      fav: false
    },
    {
      id: uuidv4(),
      name: 'Harland Lohora',
      position: 'Fullstack Developer',
      image: 'https://github.com/harlandlohora.png',
      team: 'Programación',
      fav: false
    },
    {
      id: uuidv4(),
      name: 'Christopher',
      position: 'Developer',
      image: 'https://github.com/thejardev.png',
      team: 'UX y Diseño',
      fav: false
    },
    {
      id: uuidv4(),
      name: 'Christian',
      position: 'Head de Alura Latam',
      image: 'https://github.com/christianpva.png',
      team: 'Data Science',
      fav: false
    },
    {
      id: uuidv4(),
      name: 'JeanMarie',
      position: 'Diseñadora Web',
      image: 'https://github.com/JeanmarieAluraLatam.png',
      team: 'UX y Diseño',
      fav: false
    },
    {
      id: uuidv4(),
      name: 'Harland',
      position: 'Developer',
      image: 'https://github.com/harlandlohora.png',
      team: 'Front End',
      fav: false
    },
  ]);

  const addCollaborator = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  const deleteCollaborator = (id) =>{
    const filteredCollaborators = collaborators.filter(collaborator => collaborator.id !== id);
    setCollaborators(filteredCollaborators);
  };

  const updateFav = (id) => {
    const updatedCollaborators = collaborators.map(collaborator => {
      if(collaborator.id === id){
        collaborator.fav = !collaborator.fav;
      }
      return collaborator;
    });
    setCollaborators(updatedCollaborators);
  }

  const addTeam = (team) => {
    setTeams([...teams, team]);
  };

  const updateColor = (id, color) => {
    const updatedTeams = teams.map(team => {
      if(team.id === id){
        team.mainColor = color;
      }
      return team;
    });
    setTeams(updatedTeams);
  };

  const hideForm = () => {
    setForm(!form);
  };

  return (
    <div className="App">
      <Header />
      {form && <Form teams={teams.map(team => team.title)} addCollaborator={addCollaborator} addTeam={addTeam} />}
      <MyOrg hideForm={hideForm} />
      {teams.map((team, index) => <Team key={index} team={team} collaborators={collaborators.filter(collaborator => collaborator.team === team.title)} deleteCollaborator={deleteCollaborator} updateColor={updateColor} updateFav={updateFav}  />)}
      <Footer />
    </div>
  );
}

export default App;
