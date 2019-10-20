import React, { Component } from 'react';
//import './style.css';
import { withRouter } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			submitted: false,
			customer: [],
			chartData: {
				labels: [
					'Small', "Medium", "Large"
				],
				datasets: [
					{
						label: 'Application Status',
						backgroundColor: [
							'yellow',
							'green',
							'red'
						]
					}
				]
			}

		}
		axios.get("http://localhost:8080/getcarcount")
			.then(
				(res) => {
					console.log(res.data);
					this.setState({ customer: res.data })
					// console.log(this.state.customer[0].carCount)
					// this.setState(this.state.chartData.datasets[0].data=res.data[0].carCount)
					var temp = [];
					var temp1 = [];
					for (var i = 0; i < 3; i++) {
						var x = this.state.customer[i].carCount;
						
						// temp=temp-temp1;    
						if (i == 0) {
							temp.push(5 - x);
							// let a = 5 - temp[0];
							// localStorage.setItem("small", a)
						}
						if (i == 1) {
							temp.push(4 - x);
							// let b = 4 - temp[1];
							// localStorage.setItem("medium", b)
						}
						if (i == 2) {
							temp.push(3-x);
							// let c = 3 - temp[2];
							// localStorage.setItem("large", c)
						}
					}



					this.setState(this.state.chartData.datasets[0].data = temp)
				}
			)
		// this.setState(this.state.chartData.datasets[0].data)

		
		}
		route(e){
			this.props.history.push("/")
	}
	render() {
		return (
			<div style={{backgroundColor:"lightBlue", height:555}}>
                <h1 style={{ color: "auto", textAlign: "center",marginRight:90,marginBottom:20}}>Vacant Space</h1>
                <Pie 
                    data={this.state.chartData}
                    height={100}
                    width={300}

                    options={{

                        legend: {
                            display: true,
                            
                            position: "right",
                            labels:{
                                display:true,
                                fontColor:"auto",
                                fontSize:13,
                                fontFamily:"montserrat"
                            }
                        },
                        
                        maintainAspectRatio: true
                    }}
                />
				<button type="submit" onClick={(e)=>this.route(e)} className="btn btn-primary" style={{ marginRight: 100,marginTop:20, fontSize: 20 }}>Park</button>
            </div>
		)
	}
}
export default withRouter(Chart);














