import './MyOrg.css';

const MyOrg = ({hideForm}) => {

    return <section className='org-section'>
        <h2>Mi organización</h2>
        <img src='./img/add.png' alt='add' onClick={hideForm} />
    </section>
}

export default MyOrg