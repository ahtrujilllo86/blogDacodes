import { useNavigate, useLocation } from 'react-router-dom';

function BotonNuevoBlog() {
	const navigate = useNavigate();
  const {state} = useLocation();

	return (
		<div>
			<button
				className='botonNuevoBlog'
				onClick={() => {
					navigate('/crear', {state});
				}}
			>
				+
			</button>
		</div>
	);
}

export default BotonNuevoBlog;
