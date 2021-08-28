import logo from "./logo.svg";
import "./App.css";
import { Button, DatePicker, version } from "antd";
import React, { Component } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';

const App = () => {
  return (
    <div className="App">
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
