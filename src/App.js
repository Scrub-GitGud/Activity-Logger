import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'
import Searchbar from './components/Searchbar';
import Logs from './components/Logs';
import AddBtn from './components/AddBtn';
import AddLogModal from './components/AddLogModal';
import EditLogModal from './components/EditLogModal';
import AddPeopleModal from './components/AddPeopleModal';
import PeoplesListModal from './components/PeoplesListModal';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  React.useEffect(() => {
    M.AutoInit(); // INITIALIZES MATERIALIZE JS
  })

  return (
    <Provider store={store}>
    <div className="App">
      <Searchbar />
      <Logs />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <AddPeopleModal />
      <PeoplesListModal />
    </div>
    </Provider>
  );
}

export default App;
