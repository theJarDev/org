import Collaborator from '../Collaborator';
import './Team.css';
import hexToRgba from 'hex-to-rgba';

const Team = ({team, collaborators, deleteCollaborator, updateColor, updateFav}) => {
    const {id, title, mainColor, secondaryColor} = team;

    const changeColor = (e) => {
        updateColor(id, e.target.value);
    }

    return <>{collaborators.length > 0 && <div className='team-container' style={{backgroundColor: hexToRgba(mainColor, 0.3)}}>
        <input type='color' value={mainColor} className='color-input' onChange={changeColor} />
        <h3 style={{borderColor: mainColor}}>{title}</h3>
        <div className='collaborator-container'>
        {collaborators.map((collaborator, index) => <Collaborator key={index} name={collaborator.name} position={collaborator.position} image={collaborator.image} id={collaborator.id} fav={collaborator.fav} color={mainColor} deleteCollaborator={deleteCollaborator} updateFav={updateFav} />)}
            {/* <Collaborator />
            <Collaborator />
            <Collaborator /> */}
        </div>
    </div>}</>
}

export default Team