import React from 'react';
import ReactDom from 'react-dom';
import AppRouter from './routes/AppRouter';

const root = document.querySelector( '#root' );
ReactDom.render( <AppRouter />, root );
