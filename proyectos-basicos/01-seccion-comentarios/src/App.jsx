import Comentario from './components/Comentario';
import './app.css';
function App() {
	return (
		<main className='mainCard'>
			<Comentario
				imgUser={'josuejouvin'}
				comentario={
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sint odio, delectus illum architecto eius beatae perspiciatis nemo debitis reprehenderit aspernatur autem quam nostrum enim voluptate suscipit animi rem!'
				}
			/>
			<Comentario imgUser={'javascript'} comentario={'Javascript es lo mejor'} />
			<Comentario imgUser={'youtube'} comentario={'Suscribete - campanita activada'} />
		</main>
	);
}

export default App;
