import React from "react";
import "../../styles/home.scss";

export const Signup2 = () => {
    return(
        <form>
            <div className="form-group">
                <label for="exampleName">Company Name</label>
                <input type="text" className="form-control" id="exampleName" placeholder="Enter company name" />
            </div>
            <div className="form-group">
                <label for="exampleInputEmail1">Company E-mail</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
                <label for="exampleid">Company URL</label>
                <input type="url" className="form-control" id="exampleid" placeholder="Enter company url"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}