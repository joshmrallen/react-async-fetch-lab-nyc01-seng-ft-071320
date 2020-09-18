// create your App component here
import React from 'react'

export default class App extends React.Component {

    state = {
        number: 0,
        people: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    number: data.number,
                    people: data.people
                })
            })
    }

    names = () => {
        const astrosArray = this.state.people
    return astrosArray.map(astro => <h4>{astro.name}</h4>)
    }

    render(){
        return(
            <div>
                <h1>There are currently {this.state.number} people in space at this very moment.</h1>
                <h3>Here are the name of the current brave men and women in space: </h3>
                {this.names()}
            </div>
        )
    }
}