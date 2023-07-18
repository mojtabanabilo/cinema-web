import {Routes, Route} from "react-router-dom";
import { Provider } from "react-redux";
import "./assets/style/App.scss";

// store
import store from "./components/redux/store";

// components
import Login from './components/public/Login';
import Home from './components/public/Home';
import Details from './components/public/Details';

// Vm Components
import VmPopular from './components/view/VmPopular';
import VmCurrent from './components/view/VmCurrent';
import VmDrama from './components/view/VmDrama';
import VmTopRate from './components/view/VmTopRate';
import VmKids from './components/view/VmKids';
import VmBest from './components/view/VmBest';
import NotFound from "./components/public/NotFound";
import Favorite from "./components/home/Favorite";
import { useState } from "react";

function App() {
  const [favorite, setFavorite] = useState([]);
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/home' element={<Home fav={{favorite, setFavorite}} />}/>
          <Route path='/details/:id' element={<Details fav={{favorite, setFavorite}} />}/>
          <Route path='/vmpopular' element={<VmPopular fav={{favorite, setFavorite}} />}/>
          <Route path='/vmcurrent' element={<VmCurrent fav={{favorite, setFavorite}} />}/>
          <Route path='/vmdrama' element={<VmDrama fav={{favorite, setFavorite}} />}/>
          <Route path='/vmtoprate' element={<VmTopRate fav={{favorite, setFavorite}} />}/>
          <Route path='/vmkids' element={<VmKids fav={{favorite, setFavorite}} />}/>
          <Route path='/vmbest' element={<VmBest fav={{favorite, setFavorite}} />}/>
          <Route path='/favorite' element={<Favorite data={{favorite, setFavorite}}/>}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </Provider>
    </div>
  )
}

export default App
