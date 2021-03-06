import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  let [dogImage, setDogImage] = useState(null)

    // 3. Create out useEffect function
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setDogImage(data.message))
  },[])

  return (
    <div className="App">
      <header className="App-header">
      <div className="App">
        {/* 5. Returning an img element for each url, again with the value of our src set to the image url */}
        {dogImage && dogImage.map((dog) => <img width={"200px"} height={"200px"} src={dog}></img>)}
      </div>
        <p>
          You looking for a dog?
        </p>
      </header>
    </div>
  );
}

export default App;
