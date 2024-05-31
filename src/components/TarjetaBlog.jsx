import { Link, useLocation, useNavigate } from "react-router-dom";

function TarjetaBlog({ blog, eliminar }) {
	let { state } = useLocation();
	const navigate = useNavigate();
	// console.log('tarjetaBlog', state.length);

	const editar = () => {
		navigate(`/edit/blog/${blog.id}`, {
			state: state.length === 0 ? blog : state
		});
	};

	const eliminarBlog = (e) => {
		const nuevaLista = state.filter(blog => blog.id != e.target.name)
		// state = nuevaLista;
		// console.log(nuevaLista)
		eliminar(nuevaLista)
	}

	return (
		<div className="tarjetaBlog">
			<h1><Link to={`/view/blog/${blog.id}`} state={state}>{blog.title}</Link></h1>
			<p>
				{blog.content}
			</p>
			<span>{blog.fecha.toLocaleString()}</span>
			<div className="contenedorBotones">
				<button className='botonEditar' onClick={editar}>
				Editar
			</button>
				<button className='botonEliminar' name={ blog.id } onClick={eliminarBlog}>
				Eliminar
				</button>
			</div>
			
		</div>
	);
}

export default TarjetaBlog;
