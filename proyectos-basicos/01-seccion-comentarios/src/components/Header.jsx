const Header = ({ imgUser, userName }) => {
	return (
		<header className='header'>
			<div className='user'>
				<img src={`https://unavatar.io/${imgUser}`} alt={imgUser} />
				<div className='userName'>
					<span className='nameUser'>{imgUser}</span>
					<span className='timeUser'>Hace 2 minutos</span>
				</div>
			</div>
			<span>
				<img className='trashImg' src='./src/icons/trash-2.svg' alt='' />
			</span>
		</header>
	);
};

export default Header;
