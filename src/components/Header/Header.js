import NavBar from '../NavBar/NavBar'
import './Header.scss'

const Header = () => {

	return (
		<header>
			<div className="container flex">
				<div className="logo">
					tooly<span>.com</span>
				</div>
				<NavBar />
			</div>
		</header>
	)

}

export default Header