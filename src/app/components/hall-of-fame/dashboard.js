import React from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import '../../styles/dashboard-hall-of-fame.css';

const DashoardHallOfFame = ({  }) => {
    return (
        <div className="dashboard-hall-of-fame">
            <MDBContainer className="mt-5">
                <MDBRow>
                    <MDBCol md="5" className="option">
                        <MDBView hover>
                        <img
                            src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">RANKING</p>
                        </MDBMask>
                        </MDBView>
                    </MDBCol>
                    <MDBCol md="5" className="option">
                        <MDBView hover>
                        <img
                            src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                            className="img-fluid"
                            alt=""
                        />
                        <MDBMask className="flex-center" overlay="red-strong">
                            <p className="white-text">MOTEROS</p>
                        </MDBMask>
                        </MDBView>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default DashoardHallOfFame;
