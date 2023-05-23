import styled from "styled-components";

export const ProfileContainer = styled.div`
	display: flex;
	flex-direction: column;
	/* justify-content: center; */
	align-items: center;
	min-height: 400px;
	/* min-width: 500px; */
	max-width: 93%;
	gap: 12px;
	padding: 8px;
	background-color: #727272;
	border-radius: 8px;
	box-shadow: 5px 5px 15px #000;

	.Profile{
		display: flex;
		flex-direction: column;
		/* height: 350px; */
		width: 350px;
		justify-content: space-between;
		align-items: center;
	}

	.ProfileHeader{
		display: flex;
		flex-direction: row;
		width: 95%;
		align-items: center;
		justify-content: space-between;
	}

	.ProfileCard{
		height:200px;
		width: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;

	}
`