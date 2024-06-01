import { useNavigate, useLocation } from 'react-router-dom';
import NavBar from './NavBar';

function Formulario() {
	const navigate = useNavigate();

	const { state } = useLocation();
	console.log('Form', state);
	const guardarBlog = (e) => {
		e.preventDefault();
		let estado = [];
		if (state !== null) {
			const datosFormulario = {
				id : state.length + 1,
				title: e.target.tituloBlog.value,
				content: e.target.bodyBlog.value,
				fecha: new Date(),
			}
			estado = [...state, datosFormulario];
		} else {
			estado = [{
				id: 1,
				title: e.target.tituloBlog.value,
				content: e.target.bodyBlog.value,
				fecha: new Date(),
			}]
		}
		navigate('/', {
			state: estado
		});
	};
	return (
		<div>
			<NavBar/>
			<form className='divFormulario' onSubmit={guardarBlog}>
				<input
					name='tituloBlog'
					type='text'
					placeholder='Ingresa un titulo para el Blog'
					required
				/>
				<textarea
					name='bodyBlog'
					id=''
					placeholder='Ingresa el contenido del blog aqui'
					required
				></textarea>
				<button>Guardar</button>
			</form>
		</div>
	);
}

export default Formulario;
