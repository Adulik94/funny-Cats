import React from "react";
import {
    ButtonGroup,
    SelectStyle,
    StyledContainer,
    StyledFilter,
    StyledFilterContainer,
    StyledFormButton,
    StyledLabel
} from "./Styles";

class Filter extends React.Component {
    constructor() {
        super();
        this.state = {
            limit: ['6', '9', '15'],
            allBreed: [],
            allCategories: [],
        };
    }

    componentDidMount() {
        //urls
        const urlBreeds = "https://api.thecatapi.com/v1/breeds";
        const urlCategories = "https://api.thecatapi.com/v1/categories";


        // fetch breeds
        fetch(urlBreeds, {
            headers: {"x-api-key": "db746865-90c2-44b7-a63f-b9b9f0b4a102"}
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                let breeds = [];

                for (const item of data) {
                    breeds.push(item);
                }
                this.setState({allBreed: breeds});
            });

        // fetch categories
        fetch(urlCategories, {
            headers: {"x-api-key": "db746865-90c2-44b7-a63f-b9b9f0b4a102"}
        })
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                let categories = [];

                for (const item of data) {
                    categories.push(item);
                }
                this.setState({allCategories: categories});
            })
    }

    handleChange = event => {
        this.props.handleChange(event.target);
    }

    render() {
        return (
            <StyledContainer>
                <StyledFilterContainer>
                    <StyledFilter>
                        <StyledLabel size={15}>Breed</StyledLabel>
                        <SelectStyle name="breed" onChange={this.handleChange}>
                            <option value="">Select me</option>
                            {
                                this.state.allBreed.map(element => (
                                    <option key={element.id} value={element.id}>
                                        {element.name}
                                    </option>
                                ))
                            }
                        </SelectStyle>
                    </StyledFilter>
                    <StyledFilter>
                        <StyledLabel size={15}>Type</StyledLabel>
                        <SelectStyle name="type" onChange={this.handleChange}>
                            <option value="">All</option>
                            <option value="gif">Animated</option>
                            <option value="jpg,png">Static</option>
                        </SelectStyle>
                    </StyledFilter>
                    <StyledFilter>
                        <StyledLabel size={15}>Category</StyledLabel>

                        <SelectStyle name="category" onChange={this.handleChange}>
                            <option value="">None</option>
                            {
                                this.state.allCategories.map(element => (
                                    <option key={element.id} value={element.id}>
                                        {element.name}
                                    </option>
                                ))
                            }
                        </SelectStyle>
                    </StyledFilter>
                    <StyledFormButton>
                        <ButtonGroup size={15}>More</ButtonGroup>
                        <SelectStyle name="limit" onChange={this.handleChange}>
                            {
                                this.state.limit.map(element => (
                                    <option key={element} value={element}>
                                        {element}
                                    </option>
                                ))
                            }
                        </SelectStyle>
                    </StyledFormButton>
                </StyledFilterContainer>
            </StyledContainer>
        );
    }
}

export default Filter;