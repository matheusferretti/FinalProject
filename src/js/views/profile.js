import React, { useState, useEffect, useContext } from "react";
import { Mock } from "./mock";
import { Mock2 } from "./mock2";
import { Context } from "../store/appContext";

export const Profile = () => {
	const { store, actions } = useContext(Context);

	return <div>{store.current_user.userType == "freelancer" ? <Mock /> : <Mock2 />}</div>;
};
