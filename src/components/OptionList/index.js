import './OptionList.css';

const OptionList = ({value, setTeam, teams}) => {

    const getSelect = (e) => {
        setTeam(e.target.value);
    };

    return <div className='option-list'>
        <label>Equipo</label>
        <select value={value} onChange={getSelect}>
            <option value='' disabled defaultValue='' hidden >Seleccionar equipo</option>
            {teams.map((team, index) => <option key={index} value={team}>{team}</option> )}
        </select>
    </div>
}

export default OptionList