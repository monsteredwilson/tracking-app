import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { ProfileContainer } from "./styled";
import { UserContext } from "../../contexts/UserContext";
import { MyCodes } from "./MyCodes";
import ExportToExcel from "../DownloadCodes";


export function ProfileComponent() {
	const {userData, setUserData} = useContext(UserContext)

	return (
		<ProfileContainer>
			<div className="Profile">
				<div className="ProfileHeader">
					<h2>Meus códigos</h2>
					<h3>Créditos: {userData.credits}</h3>
				</div>
				<MyCodes/>
				<ExportToExcel/>
			</div>
		</ProfileContainer>
	)
}