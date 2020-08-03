import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { withTheme } from '@rjsf/core';
import { Theme as MaterialUITheme } from '@rjsf/material-ui';
import { Container } from '@material-ui/core';

const Form = withTheme(MaterialUITheme);

	const formName = "new_student";
	
	const baseUrl = 'http://localhost/lk-ssl/hs/json/'+formName;

	const onSubmit = ({ formData }) => fetch(baseUrl,{
		method: 'POST',
		body: JSON.stringify(formData)
	});

	(async () => {

		const data = await fetch(baseUrl)   // дописать параметры типа /url?param1=100
		const schema = await data.json();
		//console.log(schema); 

		ReactDOM.render((
			<Container maxWidth="sm">
				<Form schema={schema} onSubmit={onSubmit}/>
			</Container>
			),
			  document.getElementById('app')
		);

		
			
		
})();
	
