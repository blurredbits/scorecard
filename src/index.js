import React from 'react';
import { render } from 'react-dom';
import Routes from './config/routes';

const Root = () => <Routes />

render(<Root/>, document.querySelector("#root"));
