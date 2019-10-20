import React from 'react';
import Modal from 'react-modal';
import sky from './sky.jpg'
import axios from 'axios';
import Park from './Park';
import { Link, Redirect } from 'react-router-dom'
import temp from './PassId'
import sentId from './PassId';
import car from './car.jpg';
import { runInContext } from 'vm';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Front extends React.Component {

    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            modalIsOpen1: false,
            modalIsOpen2: false,
            modalIsOpen3: false,
            modalIsOpen4: false,
            // car_type: 'small'
            car: {
                carSize: 'small'
            },
            ticketNumber: '',
            path: "/",
            redirect: false,
            count: ''
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.close = this.close.bind(this);


        this.openModal1 = this.openModal1.bind(this);
        this.afterOpenModal1 = this.afterOpenModal1.bind(this);
        this.closeModal1 = this.closeModal1.bind(this);
        this.close1 = this.close1.bind(this);

        this.openModal2 = this.openModal2.bind(this);
        this.afterOpenModal2 = this.afterOpenModal2.bind(this);
        this.closeModal2 = this.closeModal2.bind(this);
        this.close2 = this.close2.bind(this);

        this.openModal3 = this.openModal3.bind(this);
        this.afterOpenModal3 = this.afterOpenModal3.bind(this);
        this.closeModal3 = this.closeModal3.bind(this);
        this.close3 = this.close3.bind(this);

        this.openModal4 = this.openModal4.bind(this);
        this.afterOpenModal4 = this.afterOpenModal4.bind(this);
        this.closeModal4 = this.closeModal4.bind(this);
        this.close4 = this.close4.bind(this);

        axios.get("http://localhost:8080/getcarcount").
            then(res => {
                //console.log(res.data);
                this.setState({
                    count: res.data
                })
                console.log("State Set")
                console.log(this.state.count)

            })
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = 'auto';
    }

    closeModal() {
        const newCar = this.state.car;
        //customer.push(newCustomer);
        console.log(newCar)
        if (newCar.carSize == 'small' && this.state.count[0].carCount >= 5) {
            if(this.state.count[1].carCount<4 || this.state.count[2].carCount<3){
            this.setState({
                modalIsOpen2: true
            })
        }
        else{
            this.setState({
                modalIsOpen4: true
            })
        }
        }

        else if (newCar.carSize == 'Medium' && this.state.count[1].carCount >= 4) {
            // alert("Medium Parking Full")
           if (this.state.count[2].carCount<3){
            this.setState({
                modalIsOpen3: true
            })
           }
           else{
            this.setState({
                modalIsOpen4: true
            })
           }
        }

        else if (newCar.carSize == 'Large' && this.state.count[2].carCount >= 3) {
            this.setState({
                modalIsOpen4: true
            })
        }

        else {
            axios.post("http://localhost:8080/addcar", newCar)
                .then(res => {
                    this.setState({
                        modalIsOpen: false,
                        path: "/Park",
                        redirect: true
                    });
                })
        }

        this.setState({
            modalIsOpen: false,
        });

    }

    openModal1() {
        this.setState({ modalIsOpen1: true });
    }

    afterOpenModal1() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = 'auto';
    }

    closeModal1() {
        // console.log(this.state.ticketNumber)
        axios.put("http://localhost:8080/updateCar/" + this.state.ticketNumber).
            then(res => {
                console.log(res);
                temp.id = this.state.ticketNumber;
                console.log(temp.id);
                if (res.status === 200) {
                    this.setState({
                        modalIsOpen1: false,
                        path: "/Exit",
                        redirect: true
                    })
                }

            })

    }

    openModal2() {
        this.setState({ modalIsOpen2: true });
    }

    afterOpenModal2() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = 'auto';
    }

    closeModal2() {
        if (this.state.count[1].carCount < 4) {
            let newCar = this.state.car;
            newCar.carSize = 'Medium';
            axios.post("http://localhost:8080/addcar", newCar)
                .then(res => {
                    this.setState({
                        modalIsOpen: false,
                        path: "/Park",
                        redirect: true
                    });
                })
        }

        else if (this.state.count[2].carCount < 3) {

            let newCar = this.state.car;
            newCar.carSize = 'Large';
            axios.post("http://localhost:8080/addcar", newCar)
                .then(res => {
                    this.setState({
                        modalIsOpen: false,
                        path: "/Park",
                        redirect: true
                    });
                })
        }

        else {
            alert("Parking Full")
        }
    }

    openModal3() {
        this.setState({ modalIsOpen3: true });
    }

    afterOpenModal3() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = 'auto';
    }

    closeModal3() {
        let newCar = this.state.car;
        newCar.carSize = 'Large';
        axios.post("http://localhost:8080/addcar", newCar)
            .then(res => {
                this.setState({
                    modalIsOpen: false,
                    path: "/Park",
                    redirect: true
                });
            })
    }

    openModal4() {
        this.setState({ modalIsOpen3: true });
    }

    afterOpenModal4() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = 'auto';
    }

    closeModal4() {

    }


    handleCarTypeChange(e) {
        const carNew = e.target.value;
        this.setState({
            car: {
                carSize: carNew
            }
        })
    }

    handleTicketNumberChange(e) {
        const tno = e.target.value;
        this.setState({
            ticketNumber: tno
        })
    }


    close() {
        this.setState({ modalIsOpen: false });
    }

    close1() {
        this.setState({ modalIsOpen1: false })
    }

    close2() {
        this.setState({ modalIsOpen2: false })
    }

    close3() {
        this.setState({ modalIsOpen3: false })
    }

    close4() {
        this.setState({ modalIsOpen4: false })
    }

    route(e){
        this.props.history.push("/chart")
    }


    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect to={this.state.path} /> : null}
                <div className="row" style={{ backgroundImage: "url(" + car + ")", paddingTop: "12%", width: "100%", height: 578,backgroundSize:"cover" }}>
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="panel panel-default" style={{ PaddingTop: 100 }}>
                            <h1>Welcome to SCB Parking</h1>
                            <div style={{ display: "flex", flexDirection: "row", marginTop: 60, marginBottom: 10 }}>
                                <button type="submit" onClick={this.openModal} className="btn btn-success" style={{ marginLeft: 260, fontSize: 20 }}>Park</button>

                                <button type="button" className="btn btn-danger" onClick={this.openModal1} style={{ fontSize: 20, marginLeft: 40 }}>Exit</button>

                                <button type="button" className="btn btn-primary" onClick={(e)=>this.route(e)} style={{ fontSize: 20, marginLeft: 40}}>Vacant</button>


                            </div>
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Select your car size</h2>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <select value={this.state.car_type} onChange={(e) => this.handleCarTypeChange(e)}>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                        <button className="btn btn-success" style={{ marginTop: 20 }} onClick={this.closeModal}>Submit</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.close}>Close</button>
                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.modalIsOpen1}
                    onAfterOpen={this.afterOpenModal1}
                    onRequestClose={this.closeModal1}
                    style={customStyles}

                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Enter your ticket number</h2>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <input type='tel' autoFocus value={this.state.ticketNumber} onChange={(e) => this.handleTicketNumberChange(e)} ></input>
                        <button className="btn btn-success" style={{ marginTop: 20 }} onClick={this.closeModal1}>Submit</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.close1}>Close</button>
                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.modalIsOpen2}
                    onAfterOpen={this.afterOpenModal2}
                    onRequestClose={this.closeModal2}
                    style={customStyles}

                >

                    <h4 ref={subtitle => this.subtitle = subtitle}>
                        Sorry Small Parking Full. Do you want to upgrade to Medium/Large</h4>

                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <button className="btn btn-success" style={{ marginTop: 20 }} onClick={this.closeModal2}>Yes</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.close2}>No</button>
                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.modalIsOpen3}
                    onAfterOpen={this.afterOpenModal3}
                    onRequestClose={this.closeModal3}
                    style={customStyles}

                >

                    <h4 ref={subtitle => this.subtitle = subtitle}>
                        Sorry Medium Parking Full. Do you want to upgrade to Large</h4>

                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <button className="btn btn-success" style={{ marginTop: 20 }} onClick={this.closeModal3}>Yes</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.close3}>No</button>
                    </div>
                </Modal>

                <Modal
                    isOpen={this.state.modalIsOpen4}
                    onAfterOpen={this.afterOpenModal4}
                    onRequestClose={this.closeModal4}
                    style={customStyles}

                >

                    <h4 ref={subtitle => this.subtitle = subtitle}>
                        Sorry Parking Full.</h4>

                    <div style={{ display: "flex", flexDirection: "column" }}>

                        <button type="button" class="btn btn-default" data-dismiss="modal" onClick={this.close4}>Close</button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default Front;