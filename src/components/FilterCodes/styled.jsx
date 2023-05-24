import styled from "styled-components";

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	min-height: 400px;
	min-width: 300px;
	gap: 12px;
	padding: 12px;
	background-color: #727272;
	border-radius: 8px;
	box-shadow: 5px 5px 15px #000;

	h3{
		width: 300px;
		font-size: 24px;
		margin: 0 auto;
		margin-top: -28px;
	}

	p{
		width: 300px;
		font-size: 14px;
		color: #fff;
		margin: 0 auto;
	}

	input{
		width: 300px;
		background-color: #4e4e4e;
		color: #f8aa03;
	}

	fieldset{
		display: flex;
		flex-direction: column;
		margin: 0;
		border: none;
		padding: 0;
		/* height: 50px; */
	}

	fieldset>label{
		align-self: flex-start;
	}

	fieldset>select{
		height: 50px;
		width: 318px;
		border-radius: 8px;
		background-color: #4e4e4e;
		color: #f8aa03;
		padding-left: 12px;
	}

	button{
		align-self: center;
		margin-top: 18px;
		background-color: #f8aa03;
		color: #fff;
	}
	

	@media (min-width: 700px) {
		width: 320px;
	}

	h3{
		width: 300px;
		font-size: 24px;
		margin: 0 auto;
		margin-top: -28px;
	}

	p{
		width: 300px;
		font-size: 14px;
		color: #fff;
		margin: 0 auto;
	}

	input{
		width: 300px;
		background-color: #4e4e4e;
		color: #f8aa03;
	}

	fieldset{
		display: flex;
		flex-direction: column;
		margin: 0;
		border: none;
		padding: 0;
		/* height: 50px; */
	}

	fieldset>label{
		align-self: flex-start;
	}

	fieldset>select{
		height: 50px;
		width: 318px;
		border-radius: 8px;
		background-color: #4e4e4e;
		color: #f8aa03;
		padding-left: 12px;
	}

	button{
		align-self: center;
		margin-top: 18px;
		background-color: #f8aa03;
		color: #fff;
	}
`