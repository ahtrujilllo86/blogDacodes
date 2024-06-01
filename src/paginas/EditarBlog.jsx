import { useNavigate, useLocation, useParams } from 'react-router-dom';
import '../App.css';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';

function EditarBlog() {
	const navigate = useNavigate();
	const { id } = useParams();
	const { state } = useLocation();
	const [titulo, settitulo] = useState('');
	const [contenido, setcontenido] = useState('');

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
	let blogUnitario;

	if (state === null) {
		blogUnitario = datosIniciales.find((blog) => blog.id == id);
	} else {
		blogUnitario = state.find((blog) => blog.id == id);
	}
  
	const guardarBlog = (e) => {
    e.preventDefault();
    blogUnitario.title = e.target.tituloBlog.value;
    blogUnitario.content = e.target.bodyBlog.value;
    blogUnitario.fecha = new Date();
		navigate('/', {
			state,
		});
  };

  useEffect(() => {
    settitulo(blogUnitario.title)
    setcontenido(blogUnitario.content)
  }, [])
  
  const editarTitulo = (e) => {
    settitulo(e.target.value)
    blogUnitario.title = e.target.value;
  }

  const editarContenido = (e) => {
    setcontenido(e.target.value)
    blogUnitario.content = e.target.value;
  }

	return (
		<div>
			<NavBar/>
			<form className='divFormulario' onSubmit={guardarBlog}>
				<input
					name='tituloBlog'
					type='text'
					placeholder='Ingresa un titulo para el Blog'
					required
          value={ titulo }
          onChange={editarTitulo}
				/>
				<textarea
					name='bodyBlog'
					id=''
					placeholder='Ingresa el contenido del blog aqui'
          required
          value={ contenido }
          onChange={editarContenido}
				></textarea>
				<button>Guardar</button>
			</form>
		</div>
	);
}

export default EditarBlog;
