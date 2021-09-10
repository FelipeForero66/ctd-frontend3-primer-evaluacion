import React from "react";

class Records extends React.Component{
    render(){
        return (
            <div> 
                <p>Selección anterior: {this.props.currentLetterSelection}</p>
                <p>Historial de opciones elegidas: </p>
                {this.props.recordLetterSelection.map((selection)=>
                    <p>{selection}</p>
                )}
            </div>
        )
    }
}

export default Records;