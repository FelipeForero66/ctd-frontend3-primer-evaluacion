import React from "react";

class Selection extends React.Component {
    render() {
        return (
            <div>

                <button
                    
                    onClick={() => {
                        this.props.onSelectLetter(this.props.optionLetters[this.props.onIndex+1].id,"a");
                    }}
                >
                    A
                </button>
                <p>{this.props.optionA}</p>

                <button

                    onClick={() => {
                        this.props.onSelectLetter(this.props.optionLetters[this.props.onIndex+1].id, "b");
                    }}
                >
                    B
                </button>
                   <p>{this.props.optionB}</p>

            </div>
        );
    }
}

export default Selection;
