import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function NavBar(props) {

	// console.log(props)

	const navigate = useNavigate();
	const { state } = useLocation();

	const busqueda = (e) => {
		props.buscar(e.target.value);
	}


	return (
		<>
			<div className='navBar'>
				<div>
					<img
						src='\src\assets\logoDacodes.jpg'
						alt=''
						style={ { width: 70, height: 60, borderRadius: 10 } }
						onClick={() => {
							navigate('/', {
								state
							});
						}}
					/>
				</div>
				<div className='barraBusqueda'>
					<input
						name='busqueda'
						type='text'
						placeholder='Buscar en el blog...'
						onChange={busqueda}
					/>
				</div>
			</div>
		</>
	);
}

export default NavBar;
