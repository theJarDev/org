
import './Collaborator.css';
import {AiFillCloseCircle, AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

const Collaborator = ({name, position, image, id, fav, color, deleteCollaborator, updateFav}) => {

    return <div className="colaborador">
        <AiFillCloseCircle className='delete' onClick={() => {deleteCollaborator(id)}} />
        <div className="encabezado" style={{backgroundColor: color}}>
            <img src={image} alt={name} />
        </div>
        <div className="info">
            <h4> {name} </h4>
            <h5> {position} </h5>
            {fav ? <AiFillHeart style={{color: 'red', width: '1.5rem', height: '1.5rem', marginTop: '.5rem', cursor: 'pointer'}} onClick={() => {updateFav(id)}}/> : <AiOutlineHeart style={{width: '1.5rem', height: '1.5rem', marginTop: '.5rem', cursor: 'pointer'}} onClick={() => {updateFav(id)}}/>}
        </div>
    </div>
}

export default Collaborator