import React from 'react';
import ReactDOM from 'react-dom';
import ContactsList from './contactsList';

let contacts = [
	{
		id: 1,
		name: "Scott",
		phone: "555 555 5555"
	},
	{
		id: 2,
		name: "Lola",
		phone: "444 444 4444"
	},
	{
		id: 3,
		name: "Tim",
		phone: "333 333 3333"
	}
];

class App extends React.Component {
	render()
	{
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts}/>
			</div>
		)
	}
}

ReactDOM.render( <App contacts={contacts}/>, document.getElementById( 'app' ) );