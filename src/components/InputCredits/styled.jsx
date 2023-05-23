import styled from "styled-components";

export const CreditContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;
	min-height: 400px;
	/* min-width: 500px; */
	gap: 12px;
	padding: 0;
	padding: 8px;
	background-color: #727272;
	border-radius: 8px;
	box-shadow: 5px 5px 15px #000;
	max-width: 93%;

	.CreditsContainer{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	min-height: 400px;
	/* min-width: 500px; */
	gap: 12px;
	padding: 0;
	
	border-radius: 8px;
	max-width: 98%;
	}

	h3{
		width: 300px;
		font-size: 32px;
		margin: 0 auto;
		margin-top: -28px;
	}

	h4{
		width: 300px;
		font-size: 14px;
		color: #fff;
		margin: 0 auto;
		margin-top: -64px;
	}

	h5{
		font-size: 18px;
		width: 250px
	}

	p{
		color: #fff;
	}

	.ListCards{
		display: flex;
		flex-direction: row;
		gap: 12px;
		align-items: center;
		margin: 0 auto;
		padding: 0;
		overflow-x: scroll;
		max-width: 95%;
		margin-top: -32px;
	}

	.Card{
		height: 250px;
		width: 250px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 auto;
		border: 2px #424242 solid;
		border-radius: 8px;
		box-shadow: 2px 2px 5px #424242;
		padding: 8px;
	}

	/* .Card:hover{
		height: 275px;
		width: 190px;
		transform: translate(0%, -5%);
		transition: 0.5s;
	} */

	button{
		color: #fff;
		background-color: #f8aa03;
	}

	.ShowModal{
		display: flex;
		height: 100%;
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #00000090;
		z-index: 1;
		margin: 0 auto;
		padding: 0;
		justify-content: center;
		align-items: center;
	}

	.SectionModal{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		width: 95%;
		gap: 12px;
		padding: 12px 0px;
		border-radius: 8px;
		margin: 0 auto;
		background-color: #727272;
	}

	.CloseModal{
		display: flex;
		align-self: flex-end;
		margin-right: 12px;
	}

	.SectionModal>div{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
	}

	.SectionModal>h3{
		font-size: 28px;
		margin-top: 12px;
	}

	.SectionModal>p{
		width: 95%;
	}

	.ImgPix{
		height: 250px;
		width: 250px;
	}
`