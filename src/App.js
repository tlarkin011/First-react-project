//  I am having a hard time connecting the created classes.

import logo from './logo.svg';
import './App.css';
import React from 'react';
import LogIn from './components/Log-In';

function App() {
  return (
  <div className='container fluid'>
   <div className='row'>
    <div className='col'>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">React Fail</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">See more fails</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link disabled">beta</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  </div>
    <div className='row'>
      <div className='col col-sm-2'>
        <div>
          <h1> Login </h1>

        </div>

      </div>
      </div> 
      <div className='row'>
        <div className='col'>
          <div className='inputs'>
          <input type="text" placeholder='Username'></input>
          <input type="text" placeholder='Password'></input>
          </div>
        </div>
        </div> 
        <div className='row'>
          <div className='col'>
            <div className='inputs'>
              <button type='button'>submit</button>

            </div>

          </div>

        </div>
 </div> 
  );
}

export default App;
