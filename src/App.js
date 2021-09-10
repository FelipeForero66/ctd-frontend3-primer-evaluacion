import React from "react";

import Text from "./components/Text"; /* forma de llamar el componente */
import Selection from "./components/Selection";
import Records from "./components/Record"
import optionJson from "./components/data.json"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index : 0,
      allTextList: [],
      currentLetterSelection: "",
      currentQuestion : "",
      recordLetterSelection: [],
      loading: true,
      optionA : "",
      optionB :"",
    }
  }


  handlerSelectLetter = (id,answer) => {
    if (this.state.index>3){
      alert("FIN")
      return 
    }
    const currentQuestion = this.state.allTextList.find((allTextList) => allTextList.id ===(this.state.index+2).toString()+answer);
    this.setState ({currentQuestion : currentQuestion, optionA: currentQuestion.opciones.a, optionB:currentQuestion.opciones.b})
    var aux = this.state.recordLetterSelection
    if(this.state.index>0){
      aux.push(this.state.currentLetterSelection) 
    }
    
    this.setState({
      index : this.state.index+1,
      currentLetterSelection: answer.toUpperCase(),
      recordLetterSelection: aux,
      })
    console.log(this.state.currentLetterSelection)
    console.log(this.state.recordLetterSelection)
  };


  componentDidMount() {
    setTimeout(() => {
      this.setState({ 
        optionA :optionJson[0].opciones.a,
        optionB :optionJson[0].opciones.b,
        allTextList: optionJson, 
        loading: false, 
        currentQuestion :optionJson[0]
        })
    }, 1000)
  }

  render() {
    console.log("currentQuestion", this.state.currentQuestion);
    return (
      <div className="App layout">
        {this.state.loading ? (
          <div>loading...</div>
        ) : (
          <>
            <Text allTextList = {this.state.currentQuestion}/>
            <Selection 
            optionLetters = {this.state.allTextList} 
            onSelectLetter = {this.handlerSelectLetter} 
            onIndex = {this.state.index} 
            optionA = {this.state.optionA} 
            optionB = {this.state.optionB}
            />
            <Records 
            currentLetterSelection = {this.state.currentLetterSelection} 
            recordLetterSelection = {this.state.recordLetterSelection } 
            />
          </>
        )}
      </div>
    )
  }
}

export default App;
