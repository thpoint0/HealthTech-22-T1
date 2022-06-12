import { useState } from "react"
import { NavLink } from "react-router-dom"
import '../css/SideBar.css'
import { BsListUl, BsCardChecklist } from 'react-icons/bs';
import { FaGift } from 'react-icons/fa'

const SideBar = () => {
	const [checkBox, setCheckBox] = useState(false)

	function handleChange(e) {
		const {checked} = e.target
		setCheckBox(checked)
	}

	function handleClick() {
		setCheckBox(false)
	}

	return (
		<header className="sideBar">
			<input
				type="checkbox"
				id="menu-toggle"
				checked={checkBox}
				onChange={handleChange}
			/>
			<label className="menu-button-container" htmlFor="menu-toggle">
				<div className="menu-button-top"></div>
				<div className="menu-button-middle"></div>
				<div className="menu-button-bottom"></div>
			</label>
			<div className="menu-content">
				<div className="company">
					<div className="logo">Logo</div>
					<h1 className="name">Company Name</h1>
				</div>
				<ul className="menu-items">
					<li onClick={handleClick}>
						<NavLink to="/"><BsListUl />Dashboard</NavLink>
					</li>
					<li onClick={handleClick}>
						<NavLink to="/check-in"><BsCardChecklist />Check-In Questions</NavLink>
					</li>
					<li onClick={handleClick}>
						<NavLink to="/rewards"><FaGift />Rewards</NavLink>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default SideBar