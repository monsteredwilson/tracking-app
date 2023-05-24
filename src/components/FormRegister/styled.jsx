import styled from "styled-components";

export const RegisterContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
	align-items: center;
	/* max-width: 500px; */
	min-width: 320px;
	width: 85%;
	max-width: 550px;
	justify-content: center;
	/* padding: 8px; */
	

	.FormRegister {
	color: #f8aa03;
	width: 98%;
	/* max-width: 100vw; */
	/* margin: 18px; */
	display: flex;
	flex-direction: column;
	padding: 18px;
	padding-top: 20px;
	gap: 18px;
	background-color: #00000099;
	border-radius: 8px;
	box-shadow: 5px 5px 10px #000 ;
}

.TitleRegister {
	font-size: var(--title-1);
	color: #f8aa03;
}

.SubtitleRegister {
	font-size: 32px;
	color: #ffffff;
}

.ButtonSubmitNegative {
	background-color: #f8aa03;
	color: #ffffff;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
}

.ButtonToLogin {
	background-color: #fff;
	color: #f8aa03;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 4px;
}
`