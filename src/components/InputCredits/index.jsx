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
		textPix = `00020126580014BR.GOV.BCB.PIX0136db9
		598e9-dd03-4253-bb56-0a7931a858475204
		00005303986540525.005802BR5925IARA-INDUSTRIA-E-COMERCIO
		6002SP62150511PACKSTARTER6304466E`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX0136db9
		598e9-dd03-4253-bb56-0a7931a858475204
		00005303986540525.005802BR5925IARA-INDUSTRIA-E-COMERCIO
		6002SP62150511PACKSTARTER6304466E`
	} else if (targetButton == 'pack-bronze'){
		imgPix = packBronzeImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136db9
		598e9-dd03-4253-bb56-0a7931a858475204
		000053039865406225.005802BR5925IARA-INDUSTRIA-E-COMERCIO
		6002SP62140510PACKBRONZE630488E5`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX0136db9598e9-dd03-4253-bb56-0a7931a858475204000053039865406225.005802BR5925IARA-INDUSTRIA-E-COMERCIO6002SP62140510PACKBRONZE630488E5`
	} else if (targetButton == 'pack-prata'){
		imgPix = packPrataImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136db9
		598e9-dd03-4253-bb56-0a7931a858475204
		000053039865406875.005802BR5925IARA-INDUSTRIA-E-COMERCIO
		6002SP62130509PACKPRATA6304B250`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX0136db9598e9-dd03-4253-bb56-0a7931a858475204000053039865406875.005802BR5925IARA-INDUSTRIA-E-COMERCIO6002SP62130509PACKPRATA6304B250`
	} else if (targetButton == 'pack-ouro'){
		imgPix = packOuroImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136db9
		598e9-dd03-4253-bb56-0a7931a858475204
		0000530398654071500.005802BR5925IARA-INDUSTRIA-E-COMERCIO
		6002SP62120508PACKOURO6304B470`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX0136db9598e9-dd03-4253-bb56-0a7931a8584752040000530398654071500.005802BR5925IARA-INDUSTRIA-E-COMERCIO6002SP62120508PACKOURO6304B470`
	} else if (targetButton == 'pack-platina'){
		imgPix = packPlatinaImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136db9
		598e9-dd03-4253-bb56-0a7931a858475204
		0000530398654072500.005802BR5925IARA-INDUSTRIA-E-COMERCIO
		6002SP62150511PACKPLATINA6304C923`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX0136db9598e9-dd03-4253-bb56-0a7931a8584752040000530398654072500.005802BR5925IARA-INDUSTRIA-E-COMERCIO6002SP62150511PACKPLATINA6304C923`
	} else if (targetButton == 'pack-diamante'){
		imgPix = packDiamanteImage
		textPix = `00020126580014BR.GOV.BCB.PIX0136db9
		598e9-dd03-4253-bb56-0a7931a858475204
		0000530398654075000.005802BR5925IARA-INDUSTRIA-E-COMERCIO
		6002SP62160512PACKDIAMANTE630498E5`
		buttonCopyText = `00020126580014BR.GOV.BCB.PIX0136db9598e9-dd03-4253-bb56-0a7931a8584752040000530398654075000.005802BR5925IARA-INDUSTRIA-E-COMERCIO6002SP62160512PACKDIAMANTE630498E5`
	}

	function handleCopy(){
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
								<button className="PixCopia" onClick={()=>handleCopy()}>Copia e cola</button>
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
						<p>1 Crédito</p>
						<p>R$25,00</p>
						<button id="pack-starter" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Bronze</h5>
						<p>10 Créditos</p>
						<p>R$225,00</p>
						<p>R$22,50 por crédito</p>
						<button id="pack-bronze" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Prata</h5>
						<p>50 Créditos</p>
						<p>R$875,00</p>
						<p>R$17,50 por crédito</p>
						<button id="pack-prata" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Ouro</h5>
						<p>100 Créditos</p>
						<p>R$1500,00</p>
						<p>R$15,00 por crédito</p>
						<button id="pack-ouro" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Platina</h5>
						<p>200 Créditos</p>
						<p>R$2500,00</p>
						<p>R$12,50 por crédito</p>
						<button id="pack-platina" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
					<li className="Card">
						<h5>Pacote Diamante</h5>
						<p>500 Créditos</p>
						<p>R$5000,00</p>
						<p>R$10,00 por crédito</p>
						<button id="pack-diamante" onClick={(event) => returnClick(event)}>Comprar</button>
					</li>
				</ul>
			</div>

		</CreditContainer>
	)
}