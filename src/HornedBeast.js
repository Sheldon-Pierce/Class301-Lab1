import React from "react";


class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            heart: 0,
        }
    }

    handleCLick = () => {
        this.setState({heart: this.state.heart + 1})
    }

    render () {
        return (
            <div onClick={this.handleCLick}>
                <h2>{this.props.title}</h2>
                <img style={{width:250, height:200}} src={this.props.image_url} alt={this.props.description} title={this.props.title}></img>,
                <p>{this.props.description}</p>
                <p><i class="fa-solid fa-heart"></i> : {this.state.heart}</p>
            </div>
        )
    }

}

export default HornedBeast