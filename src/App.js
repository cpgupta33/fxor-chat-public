import logo from "./logo.svg";
import "./App.css";
import { Button, DatePicker, version } from "antd";
import React, { Component } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Pages/Home";
import Chat from "./Pages/Chat";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { auth } from "./Services/firebase";
import { signInWithGitHub, signInWithGoogle } from "./Helpers/auth";

const App = () => {
  return (
    <div className="App">
      <DatePicker />
      <Button
        type="primary"
        style={{ marginLeft: 8 }}
        onClick={() => signInWithGoogle()}
      >
        Sign up with Google
      </Button>
      <Button type="dashed" type="button" onClick={() => signInWithGitHub()}>
        Sign up with GitHub
      </Button>
    </div>
  );
};

export default App;
