import React from "react";

const Modal = (props) => {

    return (

        <div className="modal-content">
            <h5>{props.value.candidateName}</h5>

            <div>
                <div className="row">
                    <div className="col l5 m5 s5">
                        <p  className="label">Company Name</p>
                        <h6>{props.value.companyName}</h6>
                        <p  className="label">Interview Date</p>
                        <h6>{props.date()}</h6>
                        <p  className="label">Phase</p>
                        <h6>{props.value.phase}</h6>
                        <p  className="label">Status</p>
                        <h6>{props.value.status}</h6>
                    </div>
                    <div className="col l7 m5 s5">
                        <p  className="label">Notes</p>
                        <h6>{props.value.note}</h6>
                    </div>
                </div>
            </div>
            <a className="btn-floating right modal-close"><i className="material-icons">clear</i></a>
        </div>

    )
}

export default Modal;