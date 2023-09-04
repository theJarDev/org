import { useState } from 'react';
import './Form.css';
import Input from '../Input';
import OptionList from '../OptionList';
import Button from '../Button';
import {v4 as uuidv4} from 'uuid';

const Form = ({teams, addCollaborator, addTeam}) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const [title, setTitle] = useState('');
    const [mainColor, setMainColor] = useState('');

    const formSubmit = (event) => {
        event.preventDefault();
        let formData = {
            id: uuidv4(),
            name,
            position,
            image,
            team
        };
        // console.log(formData);
        addCollaborator(formData);
    }

    const formTeamSubmit = (event) => {
        event.preventDefault();
        let formData = {
            id: uuidv4(),
            title,
            mainColor
        };
        // console.log(formData);
        addTeam(formData);
    }

    return <section className='form'>
        <form onSubmit={formSubmit}>
            <div>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Input 
                    title='Nombre' 
                    placeholder='Ingresar nombre' 
                    required
                    value = {name}
                    setValue = {setName}
                />
                <Input 
                    title='Puesto' 
                    placeholder='Ingresar puesto' 
                    required
                    value = {position}
                    setValue = {setPosition}
                />
                <Input 
                    title='Foto' 
                    placeholder='Ingresar enlace de foto' 
                    required
                    value = {image}
                    setValue = {setImage}
                />
                <OptionList value = {team} setTeam = {setTeam} teams={teams} />
            </div>
            <Button>Crear colaborador</Button>
        </form>
        <form onSubmit={formTeamSubmit}>
            <div>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Input 
                    title='Nombre' 
                    placeholder='Ingresar nombre' 
                    required
                    value = {title}
                    setValue = {setTitle}
                />
                <Input 
                    title='Color' 
                    placeholder='Ingresar color' 
                    required
                    value = {mainColor}
                    setValue = {setMainColor}
                    type='color'
                />
            </div>
            <Button>Crear equipo</Button>
        </form>
    </section>
}

export default Form