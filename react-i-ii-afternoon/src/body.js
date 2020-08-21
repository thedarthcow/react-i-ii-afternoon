import React, { Component } from 'react' // links body.js with react which is stored in node_modules. Also links Component 
import Data from './data.js'
import Footer from './footer.js'

export default class Body extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employeeNumber: 1,
            totalEmployees: 25,
            counter: 0
        }
    }

    nextEmployee = () =>{

        if(this.state.counter < 24) {
            let updatedCount = this.state.counter + 1
            let updatedEmployeeNumber = this.state.employeeNumber + 1
            this.setState({
                counter: updatedCount,
                employeeNumber: updatedEmployeeNumber,
            })

        }else {
            this.setState({
                counter:0,
                employeeNumber: 1
            })
        }
    }

    previousEmployee = () =>{
        if(this.state.counter > 0) {
            let updatedCount = this.state.counter - 1
            let updatedEmplyeeNumber = this.state.employeeNumber -1 
            this.setState({
                counter: 24,
                emplyeeNumber: 25
            })
        }
    }

    dataLength = (num) => {
        this.setState({
            totalEmployees: num
        })
    }

    render() {
        return(
            <div class="Body">
                <header id='counterBox' >  {/* Why is the > at the end of the statement? Code breaks if I move it to div> */}
                    <p id="employeeCounter">{`${this.state.employeeNumber}/${this.state.totalEmployees}`}</p>
                </header>
                        <Data dataLength={this.dataLength} counter={this.state.counter} />
                        <Footer next={this.nextEmployee} prev={this.previousEmployee} />
            </div>
        )
    }
}