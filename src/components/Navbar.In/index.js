import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Home
		</NavLink>
		<NavLink to="/playerinfo" activeStyle>
			Player Info
		</NavLink>
		<NavLink to="/conditions" activeStyle>
			Conditions
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
