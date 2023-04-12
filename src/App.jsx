import React, { useEffect, useState } from 'react'
import Header from './assets/Header'
import ImageGrid from './assets/mainContain/ImageGrid';

const App = () => {

  const [APIData, setAPIData] = useState([]);
  const [searchInput, setsearchInput] = useState("");

  useEffect(()=> {
    fetch(`https://pixabay.com/api/?key=35311810-3406be66dc88a96052108fd06&q=${searchInput}&image_type=photo`)
    .then(resp => resp.json())
    .then(data => setAPIData(data.hits))

    .catch(error => console.log(error));
  })


  function onSearchChange(event){
    setsearchInput(event.target.value);
  }

  return (
    <React.Fragment>
      <Header onSearchChange={onSearchChange} />
      <ImageGrid APIData = {APIData} />
    </React.Fragment>
  )
}

export default App