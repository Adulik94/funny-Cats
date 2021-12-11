import React from "react";
import {
    ImageListStyle,
    StyledContainer,
    Wrapper
} from "./Styles";

class ImageList extends React.Component {
    constructor() {
        super();
        this.state = {
            images: []
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.params !== prevProps.params) {
            const limit = "&limit=" + this.props.params.limit;
            const breed = "&breed_ids=" + this.props.params.breed;
            const type = "&mime_types=" + this.props.params.type;
            const category = "&category_ids=" + this.props.params.category;

            const url =
                "https://api.thecatapi.com/v1/images/search?" +
                breed +
                limit +
                type +
                category
                ;

            fetch(url, {
                headers: {"x-api-key": "db746865-90c2-44b7-a63f-b9b9f0b4a102"}
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);

                    let images = data.map((element) => {
                        return element;
                    });
                    this.setState({images});
                });
        }
    }

    handleLoadMore = () => {
        const limit = "&limit=" + this.props.params.limit;
        const breed = "&breed_ids=" + this.props.params.breed;
        const type = "&mime_types=" + this.props.params.type;
        const category = "&category_ids=" + this.props.params.category;

        const url = "https://api.thecatapi.com/v1/images/search" +
            breed +
            limit +
            type +
            category;

        fetch(url, {
            headers: {"x-api-key": "db746865-90c2-44b7-a63f-b9b9f0b4a102"}
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log(data);

                let images = data.map((element) => {
                    return element;
                });
                this.setState({images});
            });
    };

    render() {
        return (<StyledContainer>
                <Wrapper>
                    {this.state.images.map((element) => (
                        <ImageListStyle src={element.url} alt="" key={element.id}   loading="lazy"/>
                    ))}

                </Wrapper>

            </StyledContainer>
        );
    }
}



export default ImageList;
