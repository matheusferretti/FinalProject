import React, { useState, useEffect, useContext } from "react";
import { User } from "./user";
import { Recruiter } from "./recruiter";
import { Context } from "../store/appContext";
import AboutUs from "../../img/aboutUs.jpg";
import "../../styles/home.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return <div>{store.profile[0].type == "user" ? <User /> : <Recruiter />}</div>;
};
