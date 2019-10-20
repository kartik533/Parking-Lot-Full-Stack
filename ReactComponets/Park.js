import React from 'react';
import axios from 'axios';
import car from './car.jpg'

class Park extends React.Component {

    state={
        ticket_number : '',
        car_size: '',
        checkin_time : '',
        parking_slot : '',
        count : ''
    }

    componentWillMount() {
        axios.get("http://localhost:8080/getlatestcar/")
            .then((response) => {
                console.log(response.data)
                this.setState({
                    ticket_number:response.data.ticketNumber,
                    car_size:response.data.carSize,
                    checkin_time:response.data.checkinTime
                })
                

            })

            axios.get("http://localhost:8080/getcarcount").
            then(res => {
                var pre = ''
                if (res.data[0].carCount<=5 && this.state.car_size == "small"){
                    pre = 'S' + (res.data[0].carCount);
                }
                else if (res.data[1].carCount<=4 && this.state.car_size == "Medium"){
                    pre = 'M' + (res.data[1].carCount);
                }
                else if (res.data[2].carCount<=3 && this.state.car_size == "Large"){
                    pre = 'L' + (res.data[2].carCount);
                }
                //console.log(res.data);
                this.setState({
                    count: res.data,
                    parking_slot : pre
                    
                    
                })
                //console.log("State Set")
                console.log(this.state.count)

            })

            
        }

    
    close(){
        this.props.history.push("/")
    }

    render() {

        if(this.state === null){
            return null; //Or some other replacement component or markup
         }
        return (
            <div>
                <div className="row" style={{backgroundImage: "url(" + car + ")", paddingTop: "10%", width: "100%",height: 578,backgroundSize:"cover" }}>

                    <div className="col-sm-8 col-sm-offset-2">

                        <div className="panel panel-default" style={{ marginBottom: 0 }}>
                            <h1 style={{ alignContent: "center", color: "auto", marginBottom: 20 }}><strong>Parking Details</strong></h1>

                            <div className="panel-body " style={{ padding: 0 }}>


                                <form className="form-horizontal" >
                                    <div className="form-group">
                                        <label className="control-label col-sm-4">Ticket Number:</label>
                                        <div className="col-sm-4">
                                            <input type="tel" className="form-control" readOnly placeholder="Ticket Number"
                                            value={this.state.ticket_number}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4">Car Size:</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" readOnly placeholder="Car Size"
                                            value={this.state.car_size}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4">Checkin Time</label>
                                        <div className="col-sm-4">
                                            <input type="time" className="form-control" readOnly placeholder="Enter mobile no"
                                            value={this.state.checkin_time} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="control-label col-sm-4">Parking Slot</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" readOnly placeholder=""
                                            value={this.state.parking_slot} />
                                        </div>
                                    </div>
                                    <h4 style={{textAlign:"center"}}>Please note your Ticket Number</h4>
                                    <button type="button" class="btn btn-primary" onClick={(e)=>this.close(e)}>Close</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Park;