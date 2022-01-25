import React, {Component} from "react";
import CardItem from "./CardItem";

export default class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        }
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=1ed0a52d&s=spider&')
            .then(response => response.json())
            .then(item => this.setState({cards: item.Search}));
    }

    render() {
        const {cards} = this.state;
        return (
            <section className="content">
                {cards.length ? (
                <CardItem cards={cards}/>
                ) : <h3>Loading...</h3>}
            </section>
        )
    }
}