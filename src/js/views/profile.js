import React, { useState, useEffect, useContext } from "react";
import { Mock } from "./mock";
import { Mock2 } from "./mock2";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return <div>{store.profile.type == "user" ? <Mock /> : <Mock2 />}</div>;
};
