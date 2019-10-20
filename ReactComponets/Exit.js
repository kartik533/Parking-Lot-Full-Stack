import React from 'react';
import temp from './PassId'
import sentId from './PassId';
import axios from 'axios';
import car from './car.jpg'
//import reactmoment from 'react-moment';

class Exit extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ...sentId.id,
            data: {},
            charges: 20
        }

        {
            var obj = temp.id
            console.log(obj);
            axios.get("http://localhost:8080/getcar/" + obj)
                .then((response) => {
                    this.setState({
                        data: response.data
                    })
                    console.log(this.state.data)
                    var checkInTime = this.state.data.checkinTime;
                    var checkOutTime = this.state.data.checkoutTime;
                    var hr = (checkOutTime.split(":")[0] - checkInTime.split(":")[0]) * 3600; //hr
                    var min = (checkOutTime.split(":")[1] - checkInTime.split(":")[1]) * 60; //min
                    var sec = (checkOutTime.split(":")[2] - checkInTime.split(":")[2]); //sec
                    var total = hr + min + sec;

                    if (this.state.data.carSize === "small")
                        this.setState({
                            charges: total
                        })

                    else if (this.state.data.carSize === "medium")
                        this.setState({
                            charges: total * 2
                        })

                    else
                        this.setState({
                            charges: total * 3
                        })


                })


            // const checkin = (this.state.data.checkinTime);
            // const checkout = (this.state.data.checkoutTime);
            // const difference = (checkout.getTime() - checkin.getTime()) / 1000;
            // console.log(difference);
        }
    }

    close(){
        this.props.history.push("/")
    }



    render() {
        return (
            <div>
                <div className="row" style={{backgroundImage: "url(" + car + ")", paddingTop: "10%", width: "100%", height: 578,backgroundSize:"cover" }}>

                    <div className="col-sm-8 col-sm-offset-2">

                        <div className="panel panel-default" style={{ marginBottom: 0 }}>
                            <h1 style={{ alignContent: "center", color: "auto", marginBottom: 20 }}><strong>Parking Details</strong></h1>

                            <div className="panel-body " style={{ padding: 0 }}>


                                <form className="form-horizontal" >
                                    <div className="form-group">
                                        <label className="control-label col-sm-4">Ticket Number:</label>
                                        <div className="col-sm-4">
                                            <input type="tel" className="form-control" readOnly placeholder="Ticket Number"
                                                value={this.state.data.ticketNumber}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4">Car Size:</label>
                                        <div className="col-sm-4">
                                            <input type="text" className="form-control" readOnly placeholder="Car Size"
                                                value={this.state.data.carSize}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4">Checkin Time</label>
                                        <div className="col-sm-4">
                                            <input type="time" className="form-control" readOnly placeholder="Enter mobile no"
                                                value={this.state.data.checkinTime} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="control-label col-sm-4">Checkout Time</label>
                                        <div className="col-sm-4">
                                            <input type="time" className="form-control" readOnly placeholder="Enter mobile no"
                                                value={this.state.data.checkoutTime} />
                                        </div>
                                    </div>

                                    <h4>Total Parking Charges : Rs {this.state.charges}</h4>
                                    <button type="button" class="btn btn-primary" onClick={(e)=>this.close(e)}>Pay and Exit</button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Exit;