import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeProvider from 'react-bootstrap/ThemeProvider'



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURL: {}
        }
    }

    render () {
        return (
            <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
            >
                <main>
                    <Container>
                        <Row>
                        {this.props.data.map(beast => ( 
                            <Col xs={10} sm={8} md={6} lg={4}>
                                <HornedBeast
                                key={beast._id} 
                                title={beast.title} 
                                image_url={beast.image_url} 
                                description={beast.description}
                                chooseBeast={this.props.chooseBeast}
                                showModalClick={this.props.showModalClick}/>
                            </Col>
                        ))}
                        </Row>
                    </Container>
                </main>
            </ThemeProvider>

        )
    }

}

export default Main