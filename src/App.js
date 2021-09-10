import React from "react";

import Text from "./components/Text"; /* forma de llamar el componente */
import Selection from "./components/Selection";
import Records from "./components/Record"
import optionJson from "./components/data.json"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allTextList: [],
      currentLetterSelection: [],
      recordLetterSelection: [],
      loading: true
    }
  }


  handlerSelectLetter = (id) => {
    const currentLetterSelection = this.state.allTextList.find((allTextList) => allTextList.id === id);
    this.setState ({currentLetterSelection : currentLetterSelection})
  };


  componentDidMount() {
    setTimeout(() => {
      this.setState({ allTextList: optionJson, loading: false })
    }, 1000)
  }

  render() {
    console.log("currentLetterSelection", this.state.currentLetterSelection);
    return (
      <div className="App">
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <>
            <Text allTextList = {this.state.currentLetterSelection}/>
            <Selection optionLetters = {this.state.allTextList} onSelectLetter = {this.handlerSelectLetter}/>
            <Records />
          </>
        )}
      </div>
    )
  }
}

export default App;
