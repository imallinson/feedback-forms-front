import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from "./Auth.js";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const TraineeprotectedRoute = ({component: Component, ...rest}) => {

	return (
		<Route 
		{...rest} 
		render= {props => {
			if (auth.isAuthenticated() && cookies.get('admin') == "false") {
				return <Component {...props} />;
			} else {
				return <Redirect to={
					{
						pathname: "/",
						state: {
							from: props.location
						}
					}
				}/>
			}
			}}
		/>
	);
};
