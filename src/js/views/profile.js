import React, { useState, useEffect, useContext } from "react";
import { User } from "./user";
import { Recruiter } from "./recruiter";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return <div>{store.profile.type == "user" ? <User /> : <Recruiter />}</div>;
};
