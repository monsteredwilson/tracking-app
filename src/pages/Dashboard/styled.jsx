import styled from "styled-components";

export const DashContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 100vw;
	margin: 0 auto;
	padding: 0;
	/* height: 100%; */
	background: rgb(56, 56, 56);
	background: linear-gradient(270deg, rgba(56, 56, 56, 0.5) 0%, rgba(168, 168, 168, 0.5) 50%, rgba(255, 255, 255, 0.9) 100%);

	.ContainerDash{
		display: flex;
		flex-direction: column;
		max-width: 92vw;
		/* width: 90%; */
		min-height: 750px;
		/* max-height: 850px; */
		padding: 16px;
		/* border-radius: 16px; */
		background-color: #00000099;
		box-shadow: 5px 5px 10px #000;
		color: #f8aa03;
	}

	.HeaderMenu{
		display: flex;
		width: 90%;
		max-width: 1280px;
		padding: 8px;
		align-items: center;
		margin: 0 auto;
	}

	.NavMenu{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 70px;
	}

	.NavMenu>h1{
		font-size: 24px;
	}

	.ButtonsNavMenu{
		display: flex;
		align-items: center;
		/* width: 200px; */
		/* flex-direction: row; */
		/* justify-content: space-between; */
	}

	.NavDashboard{
		margin-bottom: -1px;
		display: flex;
		justify-content: flex-start;
		gap: 2px;
	}

	.NavDashboard>button{
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px;
		height: 50px;
		display: flex;
		align-items: center;
		color: #fff;
		background-color: #f8aa03
	}

	.LogoutButton{
		color: #fff;
		background-color: #f8aa03
	}

	.UserEmail{
		align-self: flex-start;
	}

	hr{
		width: 100%;
		margin: 0 auto;
	}

	.WorkSpace{
		display: flex;
		min-height: 620px;
		margin: 18px 0px;
		justify-content: center;
		/* align-items: center; */
		max-width: 98%;
	}

	.ListCodesToBuy{
		background-color: #03030350;
		border-radius: 12px;
		width: 94%;
		padding: 8px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		gap: 16px;
		margin: 0 auto;
		/* height: 650px; */
	}

	.ButtonBuyCodes{
		margin-bottom: 8px;
		color: #fff;
		background-color: #f8aa03;
	}

	@media (min-width: 700px) {
		width: 100vw;

	.ContainerDash{
		max-width: 100vw;
		width: 100vw;
	}

	.ContainerDash>p{
		margin:0;
	}

	

	main{
		display: flex;
		width: 90vw;
		margin: 0 auto;
		gap: 32px;
		margin-top: 12px;
		/* max-height: 90vh; */
	}

	}
`