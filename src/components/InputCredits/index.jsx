import { useContext, useState } from "react";
import { CreditContainer } from "./styled";
import { UserContext } from "../../contexts/UserContext";
import packStarterImage from '../../assets/packstarter.png'
import packBronzeImage from '../../assets/packbronze.png'
import packPrataImage from '../../assets/packprata.png'
import packOuroImage from '../../assets/packouro.png'
import packPlatinaImage from '../../assets/packplatina.png'
import packDiamanteImage from '../../assets/packdiamante.png'
import { toast } from "react-toastify";

export function InputCredits() {

	const { userData } = useContext(UserContext)
	const [targetButton, setTargetButton] = useState('')
	const [showModal, setShowModal] = useState(false)


	function returnClick(event) {
		setTargetButton(event.currentTarget.id)
		setShowModal(true)

	}

	function closeModal() {
		setShowModal(false)
	}

	let imgPix = ''
	let textPix = ''
	let buttonCopyText = ''
	if (targetButton == 'pack-starter') {
		imgPix = packStarterImage;
		textPix = `00020126580014BR.GOV.BCB.PIX0136048
		79df4-26b1-4b93-bfe8-f5bc1a5303235204
		00005303986540515.005802BR590821893642
		6007GUARUJA62150511PACKSTARTER63047D27`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX013604879df4-26b1-4b93-bfe8-f5bc1a530323520400005303986540515.005802BR5908218936426007GUARUJA62150511PACKSTARTER63047D27`
	} else if (targetButton == 'pack-bronze') {
		imgPix = packBronzeImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136048
		79df4-26b1-4b93-bfe8-f5bc1a5303235204
		000053039865406125.005802BR590821893642
		6007GUARUJA62140510PACKBRONZE6304BBD9`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX013604879df4-26b1-4b93-bfe8-f5bc1a5303235204000053039865406125.005802BR5908218936426007GUARUJA62140510PACKBRONZE6304BBD9`
	} else if (targetButton == 'pack-prata') {
		imgPix = packPrataImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136048
		79df4-26b1-4b93-bfe8-f5bc1a5303235204
		000053039865406500.005802BR590821893642
		6007GUARUJA62130509PACKPRATA63046845`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX013604879df4-26b1-4b93-bfe8-f5bc1a5303235204000053039865406500.005802BR5908218936426007GUARUJA62130509PACKPRATA63046845`
	} else if (targetButton == 'pack-ouro') {
		imgPix = packOuroImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136048
		79df4-26b1-4b93-bfe8-f5bc1a5303235204
		000053039865406900.005802BR590821893642
		6007GUARUJA62120508PACKOURO63040B74`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX013604879df4-26b1-4b93-bfe8-f5bc1a5303235204000053039865406900.005802BR5908218936426007GUARUJA62120508PACKOURO63040B74`
	} else if (targetButton == 'pack-platina') {
		imgPix = packPlatinaImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136048
		79df4-26b1-4b93-bfe8-f5bc1a5303235204
		0000530398654071500.005802BR590821893642
		6007GUARUJA62150511PACKPLATINA630490D3`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX013604879df4-26b1-4b93-bfe8-f5bc1a53032352040000530398654071500.005802BR5908218936426007GUARUJA62150511PACKPLATINA630490D3`
	} else if (targetButton == 'pack-diamante') {
		imgPix = packDiamanteImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136048
		79df4-26b1-4b93-bfe8-f5bc1a5303235204
		0000530398654073000.005802BR590821893642
		6007GUARUJA62160512PACKDIAMANTE6304B0DA`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX013604879df4-26b1-4b93-bfe8-f5bc1a53032352040000530398654073000.005802BR5908218936426007GUARUJA62160512PACKDIAMANTE6304B0DA`
	}

	function handleCopy() {
		navigator.clipboard.writeText(buttonCopyText)
		toast.success('Pix copiado com sucesso')
	}

	return (
		<CreditContainer>
			{
				showModal ?
					<div className="ShowModal">
						<section className="SectionModal">
							<button className="CloseModal" onClick={() => closeModal()}>X</button>
							<div>
								<img src={imgPix} alt="img" className="ImgPix" />
								<p>{textPix}</p>
								<button className="PixCopia" onClick={() => handleCopy()}>Copia e cola</button>
							</div>
							<h3>IMPORTANTE</h3>
							<p>Após finalizar o pagamento, entre em contato com o suporte através do botão de whatsapp e envie o comprovante de pagamento seguido do email de cadastro. Seu saldo será depositado em até 24 horas.</p>
						</section>
					</div>
					:
					<div className="HideModal"></div>
			}
			<div className="CreditsContainer">
				<h3>Comprar créditos</h3>
				<h4>Créditos atuais: {userData.credits}</h4>
				<ul className="ListCards">
					<li className="Card">
						<h5>Pacote Starter</h5>
						<div>
							<p>1 Crédito</p>
							<p>R$15,00</p>
						</div>
						<button id="pack-starter" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Bronze</h5>
						<div>
							<p>10 Créditos</p>
							<p>R$125,00</p>
						</div>
						{/* <p>R$22,50 por crédito</p> */}
						<button id="pack-bronze" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Prata</h5>
						<div>
							<p>50 Créditos</p>
							<p>R$500,00</p>
						</div>
						{/* <p>R$17,50 por crédito</p> */}
						<button id="pack-prata" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Ouro</h5>
						<div>
							<p>100 Créditos</p>
							<p>R$900,00</p>
						</div>
						{/* <p>R$15,00 por crédito</p> */}
						<button id="pack-ouro" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Platina</h5>
						<div>
							<p>200 Créditos</p>
							<p>R$1500,00</p>
						</div>
						{/* <p>R$12,50 por crédito</p> */}
						<button id="pack-platina" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Diamante</h5>
						<div>
							<p>500 Créditos</p>
							<p>R$3000,00</p>
						</div>
						{/* <p>R$10,00 por crédito</p> */}
						<button id="pack-diamante" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
				</ul>
			</div>

		</CreditContainer>
	)
}