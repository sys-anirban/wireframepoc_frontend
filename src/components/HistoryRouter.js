import React from 'react';
import { Router } from 'react-router-dom';
import History from './BrowserHistory';

export default function HistoryRouter(props) {
  return <Router history={History}>{props.children}</Router>;
}
