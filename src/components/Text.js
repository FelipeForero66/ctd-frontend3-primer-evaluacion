import React from "react";

class Text extends React.Component{
    render() {
        return (
            <div className="historia">
                <p>{this.props.allTextList.historia}</p>
            </div>
        )
    }
}

export default Text;