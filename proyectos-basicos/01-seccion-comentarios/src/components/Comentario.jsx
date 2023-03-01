import Header from './Header';
import Footer from './Footer';
const Comentario = ({ imgUser, comentario }) => {
	return (
		<div className='card'>
			<Header imgUser={imgUser} />
			<p className='parrafo'>{comentario}</p>
			<Footer />
		</div>
	);
};

export default Comentario;
