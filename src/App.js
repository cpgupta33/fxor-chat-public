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
import {
  signInWithGitHub,
  signInWithGoogle,
  signOutUser,
} from "./Helpers/auth";
import Text from "antd/lib/typography/Text";

const App = () => {
  function getUserName() {
    return auth && auth.currentUser && auth.currentUser.displayName;
  }
  return (
    <div className="App" style={{ marginTop: 20 }}>
      <DatePicker />
      <Button
        type="primary"
        style={{ marginLeft: 8 }}
        onClick={() => signInWithGoogle()}
      >
        Sign up with Google
      </Button>
      <Button
        type="dashed"
        onClick={() => signInWithGitHub()}
        style={{ marginLeft: 8 }}
      >
        Sign up with GitHub
      </Button>
      <Button
        type="danger"
        onClick={() => signOutUser}
        style={{ marginLeft: 8 }}
      >
        SignOut
      </Button>
      <Text>{getUserName()}</Text>
    </div>
  );
};

export default App;
