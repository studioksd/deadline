import React from "react";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        let beats = [];
        for (let i = 0; i < data.length; i++) {
          [i] = data[i].url;
        };
        console.log(beats)
      } 
      )
      // .catch(error => { error })
  }, []);

  return (
    <div className="App">
        {/* <p>{!beats ? "Loading..." : beats}</p> */}
    </div>
  );
}

export default App;
