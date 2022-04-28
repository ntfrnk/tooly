import { Link } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import './Header.scss'

const Header = () => {

	return (
		<header>
			<div className="container flex">
				<div className="logo">
					<Link to="/">
						tooly<span>.com</span>
					</Link>
				</div>
				<NavBar />
			</div>
		</header>
	)

}

export default Header