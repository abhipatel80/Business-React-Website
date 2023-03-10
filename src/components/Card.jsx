import React from 'react'

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card my-3">
                    <img src={props.img} className="card-img-top" alt="card-img" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
