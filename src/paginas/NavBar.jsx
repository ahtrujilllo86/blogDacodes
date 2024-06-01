import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function NavBar(props) {

	// console.log(props)
	let datosIniciales = [
		{
			id: 1,
			title: 'Primer Texto de Ejemplo',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas velit praesentium quisquam voluptatibus! Ipsa quas magnam molestiae voluptatem ullam!',
			fecha: new Date(),
		},
		{
			id: 2,
			title: 'Segunda Entrada',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas velit praesentium quisquam voluptatibus! Ipsa quas magnam molestiae voluptatem ullam!',
			fecha: new Date(),
		},
		{
			id: 3,
			title: 'Tercer Intento',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas velit praesentium quisquam voluptatibus! Ipsa quas magnam molestiae voluptatem ullam!',
			fecha: new Date(),
		},
	];

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
