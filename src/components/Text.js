import React from "react";

class Text extends React.Component{
    render() {
        return (
            <div>
                <p>{this.props.allTextList.historia}</p>
            </div>
        )
    }

}

export default Text;