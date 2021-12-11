import React from "react";
import Filter from "./Filter";
import ImageList from "./ImageList";

class ImageLoader extends React.Component {
    constructor() {
        super();
        this.state = {
            limit: "6",
            breed: "",
            type: "",
            category: "",
            more:""
        };
    }

    handleChange = (target) => {
        this.setState({
            [target.name]: target.value
        });
    };

    render() {
        return (
            <div>
                <Filter handleChange={this.handleChange} />
                <ImageList params={this.state} />
            </div>
        );
    }
}

export default ImageLoader;
