import { useLocation, useNavigate } from 'react-router-dom';
import BotonNuevoBlog from '../components/BotonNuevoBlog';
import TarjetaBlog from '../components/TarjetaBlog';
import { useEffect, useState } from 'react';

function HomePage() {
	let { state } = useLocation();
	const navigate = useNavigate();
	console.log('HomePageState=> ', state);
	let datosIniciales = [
		{
			id: 1,
			title: 'Primer Blog Ejemplo',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas velit praesentium quisquam voluptatibus! Ipsa quas magnam molestiae voluptatem ullam!',
			fecha: new Date(),
		},
		{
			id: 2,
			title: 'Segundo Blog Ejemplo',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas velit praesentium quisquam voluptatibus! Ipsa quas magnam molestiae voluptatem ullam!',
			fecha: new Date(),
		},
		{
			id: 3,
			title: 'Tercer Blog Ejemplo',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas velit praesentium quisquam voluptatibus! Ipsa quas magnam molestiae voluptatem ullam!',
			fecha: new Date(),
		},
	];
	let [listadoBlogs, setlistadoBlogs] = useState(state)
	const [datosInicio, setdatosInicio] = useState([])

	useEffect(() => {
		setdatosInicio(datosIniciales);
	}, [ ])
	

	listadoBlogs === null ? listadoBlogs = datosInicio : listadoBlogs;
	// listadoBlogs = datosIniciales;

	const eliminar = (nuevaLista) => {
		console.log('nuevaLista ',nuevaLista)
		state = state != null ? nuevaLista : state;
		if (nuevaLista.length === 0) state = null;
		console.log('state ',state)
		setlistadoBlogs(state);
		if (state === null) setdatosInicio(nuevaLista);
		if (state === null && nuevaLista.length === 0) setdatosInicio(datosIniciales);
		navigate('/', {
			state
		});
	}
  
	return (
		<>
			<div className='contenedorBlogs'>
				{listadoBlogs.map((blog) => (
					<TarjetaBlog key={ blog.id } blog={ blog } eliminar={ eliminar } datosIniciales={datosInicio} />
				))}
				;
			</div>
			<BotonNuevoBlog />
		</>
	);
}

export default HomePage;
