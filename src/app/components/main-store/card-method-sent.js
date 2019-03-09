import React from 'react';
import { MDBCard, MDBCardBody, MDBBtn, MDBCol, MDBIcon } from "mdbreact";

const CardMethodSent = (info, index) => {
    console.log(info)
    return (
         <MDBCol lg="6" md="6" sm="12" className="mb-lg-0 mb-4" key={index}>
                <MDBCard pricing>
                    <MDBCardBody>
                        <h5 className="mb-4">Contraentrega</h5>
                        <div className="d-flex justify-content-center">
                            <div className="card-circle d-flex justify-content-center align-items-center">
                            <MDBIcon icon="home" className="light-blue-text" />
                            </div>
                        </div>
                        <h2 className="font-weight-bold my-4">59$</h2>
                        <p className="grey-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Culpa pariatur id nobis accusamus deleniti cumque hic
                            laborum.
                        </p>
                        <MDBBtn rounded color="light-blue">
                            Buy now
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>
        </ MDBCol>
    )
}

export default CardMethodSent;
