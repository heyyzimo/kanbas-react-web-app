import React from 'react';
import logo from './logo.svg';
import './App.css';

import Labs from "./Labs";
import HelloWorld from './Labs/a3/HelloWorld';
import Kanbas from './Kanbas';
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";

import VariableTypes from './Labs/a3/JavaScript/variables/VariableTypes';
import BooleanVariables from './Labs/a3/JavaScript/variables/BooleanVariables';
import TernaryOperator from './Labs/a3/JavaScript/conditionals/TernaryOperator';
import ES5Functions from './Labs/a3/JavaScript/functions/ES5Functions';
import ArrowFunctions from './Labs/a3/JavaScript/functions/ArrowFunctions';
import ImpliedReturn from './Labs/a3/JavaScript/functions/ImpliedReturn';
import FunctionParenthesisAndParameters from './Labs/a3/JavaScript/functions/FunctionParenthesisAndParameters';
import WorkingWithArrays from './Labs/a3/JavaScript/arrays/WorkingWithArrays';
import ArrayIndexAndLength from './Labs/a3/JavaScript/arrays/ArrayIndexAndLength';
import AddingAndRemovingDataToFromArrays from './Labs/a3/JavaScript/arrays/AddingAndRemovingDataToFromArrays';
import ForLoops from './Labs/a3/JavaScript/arrays/ForLoops';   
import MapFunction from './Labs/a3/JavaScript/arrays/MapFunction';
import JsonStringify from './Labs/a3/JavaScript/json/JsonStringify';
import FindFunction from './Labs/a3/JavaScript/arrays/FindFunction';
import FilterFunction from './Labs/a3/JavaScript/arrays/FilterFunction';
import TemplateLiterals from './Labs/a3/JavaScript/string/TemplateLiterals';
import House from './Labs/a3/JavaScript/json/House';
import Spreading from './Labs/a3/JavaScript/json/Spreading';
import Destructing from './Labs/a3/JavaScript/json/Destructing';
import FunctionDestructing from './Labs/a3/JavaScript/functions/FunctionDestructing';

function App() {
   return (
      <HashRouter>
      <div>
      <Routes>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
        </Routes>
        
         <VariableTypes/>
         <BooleanVariables/>
         <TernaryOperator />
         <ES5Functions />
         <ArrowFunctions />
         <ImpliedReturn />
         <FunctionParenthesisAndParameters />
         <WorkingWithArrays/>
         <ArrayIndexAndLength/>
         <AddingAndRemovingDataToFromArrays/>    
         <ForLoops/>
         <MapFunction />
         <JsonStringify/>
         <FindFunction />
         <FilterFunction/>
         <TemplateLiterals/>
         <House />
         <Spreading/>
         <Destructing/>
         <FunctionDestructing/>
         
         


      </div>
</HashRouter>

);}


export default App;
