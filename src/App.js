import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import {
  addDoc,
  query,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "./firebase";
import "./App.css";

const MAPS_API_KEY = `${process.env.REACT_APP_MAPS_API_KEY}`;


function App() {
  return (
    <div className="App">
      <h1>Green Dot.</h1>
    </div>
  );
}

export default App;
