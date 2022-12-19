import React from 'react';

import {
	Navbar,
	Profile,
	About,
	Skills,
	Experiences,
	Educations,
	Portfolios,
} from "../pages/index";

export default class Home extends React.Component {
	render() {
		return (
			<section>
				<Navbar />
				<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							<Skills />
							<Experiences />
							<Educations />
							<Portfolios />
						</div>
					</div>
				</div>
			</section>
		);
	}
}
