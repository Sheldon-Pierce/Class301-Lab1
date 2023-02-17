import React from "react";
import HornedBeast from "./HornedBeast";
import Col from "react-bootstrap/Col";


class FilteredBeast extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                {this.props.filteredBeastList.map(beast => {
                    console.log(this.props.filteredBeastList)
                     return <Col xs={10} sm={8} md={6} lg={4}>
                        <HornedBeast
                            horns={beast.horns}
                            beast={beast}
                            key={beast._id}
                            title={beast.title}
                            image_url={beast.image_url}
                            description={beast.description}
                            // setSelectBeast={this.props.setSelectBeast}
                            showModal={this.props.showModal}
                        />
                    </Col>
                })}
                {this.props.typedfilteredBeastList.map(beast => {
                    console.log(this.props.filteredBeastList)
                     return <Col xs={10} sm={8} md={6} lg={4}>
                        <HornedBeast
                            horns={beast.horns}
                            beast={beast}
                            key={beast._id}
                            title={beast.title}
                            image_url={beast.image_url}
                            description={beast.description}
                            // setSelectBeast={this.props.setSelectBeast}
                            showModal={this.props.showModal}
                        />
                    </Col>
                })}
                
            </>
        )
    }
}

export default FilteredBeast