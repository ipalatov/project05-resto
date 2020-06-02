import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Component) => {
    return (props) => {
        return (
            <RestoServiceContext.Consumer>
                {(RestoService) => <Component {...props} RestoService={RestoService} />} 
            </RestoServiceContext.Consumer>


        )
    }
};

export default WithRestoService;