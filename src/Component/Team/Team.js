import React from 'react';

const Team = (props) => {
        const {title,discription,img, category } = props.team;
    return (
        <div>
            <div className="col text-center ">
                    <div className="card  h-100">
                    <img height="225" src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p ><small className="text-primary"> {category}</small></p>
                     <p><small> {discription}</small></p>          
                     <div>
                     <i className="fab fa-facebook p-2"></i>
                     <i className="fab fa-twitter p-2"></i>
                     <i className="fab fa-viber p-2" ></i>
                     <i className="fab fa-google-plus-g p-2"></i>
                     </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Team;