import './styles/index.css';
import './styles/fonts.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
import theme from './mui/theme'

const client = new ApolloClient({
   //uri: 'https://api-us-east-1.hygraph.com/v2/cl7c4t2ae42c601uf54ar015u/master',
   uri:process.env.REACT_APP_GRAPHCMS_URI,
  cache: new InMemoryCache(),
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ApolloProvider client={client} >
  <BrowserRouter>
   <ThemeProvider theme={theme}>
        <App />
   </ThemeProvider>
  </BrowserRouter>
  
 </ApolloProvider>
  
 
);

