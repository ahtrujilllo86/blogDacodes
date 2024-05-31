import { useLocation, useNavigate } from 'react-router-dom';
import BotonNuevoBlog from '../components/BotonNuevoBlog';
import TarjetaBlog from '../components/TarjetaBlog';
import { useState } from 'react';

function HomePage() {
	let { state } = useLocation();
	const navigate = useNavigate();
	console.log('HomepAge=> ',state);
	const datosIniciales = [
		{
			id: 1,
			title: 'Primer Blog Ejemplo',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas velit praesentium quisquam voluptatibus! Ipsa quas magnam molestiae voluptatem ullam!',
			fecha : new Date(),
    },
    {
			id: 2,
			title: 'Segundo Blog Ejemplo',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas velit praesentium quisquam voluptatibus! Ipsa quas magnam molestiae voluptatem ullam!',
			fecha : new Date(),
    },
    {
			id: 3,
			title: 'Tercer Blog Ejemplo',
			content:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quas velit praesentium quisquam voluptatibus! Ipsa quas magnam molestiae voluptatem ullam!',
			fecha : new Date(),
		},
	];
	let [listadoBlogs, setlistadoBlogs] = useState(state)

	listadoBlogs.length === 0 ? listadoBlogs = datosIniciales : listadoBlogs;
	// listadoBlogs = datosIniciales;
	// console.log('listadoBlogs=> ', listadoBlogs)
	const eliminar = (nuevaLista) => {
		// invoca funcion desde HomePage
		// console.log('IdBlog', state);
		// console.log(nuevaLista)
		setlistadoBlogs(nuevaLista);
		state = nuevaLista;
		navigate('/', {
			state
		});
		// const nuevaLista = state.filter(blog => blog.id != e.target.name)
		// state = nuevaLista;
		// console.log(state)
	}
  
	return (
		<>
			<div className='contenedorBlogs'>
				{listadoBlogs.map((blog) => (
					<TarjetaBlog key={ blog.id } blog={ blog } eliminar={eliminar} />
				))}
				;
			</div>
			<BotonNuevoBlog />
		</>
	);
}

export default HomePage;
