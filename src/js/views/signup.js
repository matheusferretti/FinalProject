import React from "react";
import "../../styles/home.scss";

export const Signup = () => {
    return(
        <form>
            <div className="form-group">
                <label for="examplefirstName">First Name</label>
                <input type="text" className="form-control" id="examplefirstName" placeholder="Enter first name" />
            </div>
            <div className="form-group">
                <label for="examplelastName">Last Name</label>
                <input type="text" className="form-control" id="examplelastName" placeholder="Enter last name" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Next</button>
        </form>
    );
}