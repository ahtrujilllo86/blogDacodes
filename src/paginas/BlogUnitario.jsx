import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../App.css';

function BlogUnitario() {
	const navigate = useNavigate();
	const { id } = useParams();
	const location = useLocation();
	const { state } = useLocation();

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

	const blogUnitario =
		state !== null
			? state.find((blog) => blog.id == id)
			: datosIniciales.find((blog) => blog.id == id);

	const regresar = () => {
		navigate('/', {
			state: location.state,
		});
	};

	return (
		<div className='unitBlog'>
			<h1>{blogUnitario.title}</h1>
			<p>{ blogUnitario.content }</p>
			<span>{blogUnitario.fecha.toLocaleString()}</span>
			<button className='botonRegresar' onClick={regresar}>
				Regresar
			</button>
		</div>
	);
}

export default BlogUnitario;
