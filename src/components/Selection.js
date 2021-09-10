import React from "react";

class Selection extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionLetters.map((allTextList) => (
                    <button
                        key={`allTextList_${allTextList.id}`}
                        onClick={() => {
                            this.props.onSelectLetter(allTextList.id);
                        }}
                    >
                        A
                    </button>
                ))}
                {this.props.optionLetters.map((allTextList) => (
                    <button
                        key={`allTextList_${allTextList.id}`}
                        onClick={() => {
                            this.props.onSelectLetter(allTextList.id);
                        }}
                    >
                        B
                    </button>
                ))}
            </div>
        );
    }
}

export default Selection;
