import React from "react";
import { Switch, Route } from "react-router-dom";

import { Header } from "./components/layout/Header";
import { ListTodo } from "./pages/ListTodo";
import { CreateTodo } from "./pages/CreateTodo";
import { DetailTodo } from "./pages/DetailTodo";
import { EditTodo } from "./pages/EditTodo";
import { DeleteTodo } from "./pages/DeleteTodo";
import { Footer } from "./components/layout/Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={ListTodo} />
        <Route path="/create" component={CreateTodo} />
        <Route path="/view/:id" component={DetailTodo} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/delete/:id" component={DeleteTodo} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
