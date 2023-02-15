import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeProvider from 'react-bootstrap/ThemeProvider'



class Main extends React.Component {

    render () {
        return (
            <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
            >
                <main>
                    <Container>
                        <Row>
                        {data.map(beast => ( 
                            <Col xs={10} sm={8} md={6} lg={4}>
                                <HornedBeast 
                                key={beast._id} 
                                title={beast.title} 
                                image_url={beast.image_url} 
                                description={beast.description} clicks/>
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