import React from "react";
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import SelectedBeast from "./SelectedBeast";
import BeastForm from "./BeastForm";
import FilteredBeast from "./FilteredBeast";



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectedBeast: {},
            numberOfHorns: '',
            searchStuff: ''
        }
    }

    setSelectBeast = (beastObj) => {
        this.setState({
            SelectedBeast: beastObj,
            showModal: true
        })
    }

    filterByHorns = (hornsAmount) => {
        this.setState({numberOfHorns: hornsAmount})
    }

    Search = (search1) => {
        let filteredBeast = [];
        this.props.data.forEach((beast) => {
            if(beast.horns.toString() === search1.toString()) {
                filteredBeast.push(beast)
            }
            console.log(filteredBeast)
        })
        return filteredBeast
        // this.setState({filteredBeastList: filteredBeast})
    }

    lookStuffUp = (e) => {
        this.setState({
            searchStuff: e.target.value
        })
    }

    typeSearch = (search1) => {
        let filteredBeastByType = [];
        this.props.data.forEach((beast) => {
            if(beast.title.toString().toLowerCase() === (search1.toString().toLowerCase())) {
                filteredBeastByType.push(beast)
            }
            console.log(filteredBeastByType)
        })
        return filteredBeastByType
        // this.setState({filteredBeastList: filteredBeast})
    }

    render () {
        console.log(this.state)
        return (
            <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
            >
                <main>
                    <Container>
                        <Row>
                            <Col>
                            </Col>
                            <Col sm={4} md={4} lg={4}>
                            <BeastForm 
                            onSubmit={this.filterByHorns}
                            onChange={this.lookStuffUp}
                            />
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            {this.state.numberOfHorns === '' || this.state.searchStuff === '' ? 
                                this.props.data.map(beast => {
                                return <Col xs={10} sm={8} md={6} lg={4}>
                                <HornedBeast
                                horns={beast.horns}
                                beast={beast}
                                key={beast._id} 
                                title={beast.title} 
                                image_url={beast.image_url} 
                                description={beast.description}
                                setSelectBeast={this.setSelectBeast}
                                showModal={this.state.showModal}
                                />
                            </Col>
                            })
                        : <FilteredBeast
                        setSelectBeast={this.setSelectBeast} 
                        filteredBeastList={this.Search(this.state.numberOfHorns.numberOfHorns)}
                        typedfilteredBeastList={this.typeSearch(this.state.searchStuff)}
                        showModal={this.state.showModal} 
                        />
                        }
                        </Row>
                    </Container>
                    <SelectedBeast 
                        beast={this.state.SelectedBeast}
                        showModal={this.state.showModal}
                        removeModal={() => this.setState({ showModal: false})}
                    />
                </main>
            </ThemeProvider>

        )
    }

}

export default Main