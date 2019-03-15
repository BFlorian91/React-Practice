import React, { Component } from 'react';

export default class Navbar extends Component {
	render() {
		return (
			<div className="col s12">
				<nav>
					<div class="nav-wrapper blue lighten-2">
						<form>
							<div class="input-field">
								<input id="search" type="search" required />
								<label class="label-icon" for="search"><i class="material-icons">search</i></label>
								<i class="material-icons">close</i>
							</div>
						</form>
					</div>
				</nav>
			</div>
		)
	}
}
