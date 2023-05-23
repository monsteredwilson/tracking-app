import { DashContainer } from "./styled"
import { useContext, useEffect, useState } from "react"
import DateInput from "../../components/FormDate"
import { FilterComponent } from "../../components/FilterCodes"
import { InputCredits } from "../../components/InputCredits"
import { ProfileComponent } from "../../components/Profile"
import { DataContext } from "../../contexts/DataFilterContex"
import { Loader } from "../../components/LoadingContent"
import { FilteredContainer } from "../../components/FilteredContainer"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { UserContext } from "../../contexts/UserContext"
import { WhatsappButton } from "../../components/Whatsapp"
import { useNavigate } from "react-router-dom"




export function Dashboard() {
	const [renderDiv, setRenderDiv] = useState(<FilterComponent />)
	const navigate = useNavigate()

	useEffect(()=>{
		const token = localStorage.getItem('token')
		if (!token){
			navigate('/login')
		}
	},[])

	function buttonClick(event) {
		valueDiv(event)
	}

	function valueDiv(event) {
		if (event.currentTarget.id == 1) {
			setRenderDiv(<FilterComponent/>)
		} else if (event.currentTarget.id == 2) {
			setRenderDiv(<InputCredits />)
		} else {
			setRenderDiv(<ProfileComponent />)
		}
	}


	const [dataFilter, setDataFilter] = useState('')
	const [reactLoading, setReactLoading] = useState(false)
	const [selectedIds, setSelectedIds] = useState([]);
	const {userData, setUserData, getProfile, myCodes, setMyCodes, getMyCodes} = useContext(UserContext)

	let responseCodes = dataFilter


	async function handleBuy(selectedIds) {
		try {
			const codigos = { codes: selectedIds }
			const token = localStorage.getItem('token')
			const response = await api.patch('/codes', codigos, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			getProfile()
			getMyCodes()

			const filteredData = responseCodes.filter(
				(element) => !selectedIds.includes(element.id)
			);
			setDataFilter(filteredData)
			setSelectedIds([])
			toast.success('Compra realizada com sucesso')
		} catch (error) {
			toast.error('Erro ao comprar código')
		}
	}

	function logout(){
		localStorage.clear()
		navigate('/login')
	}

	return (
		<DataContext.Provider value={{ dataFilter, setDataFilter, reactLoading, setReactLoading, selectedIds, setSelectedIds }}>


			<DashContainer>
				<div className="ContainerDash">
					<header className="HeaderMenu">
						<nav className="NavMenu">
							<h1>Tracking Codes</h1>
							<div className="ButtonsNavMenu">
								{/* <span>Username</span> */}
								<button onClick={()=>logout()} className="LogoutButton">Sair</button>
							</div>
						</nav>
					</header>
					<p className="UserEmail">{userData.email}</p>

					<section className="NavDashboard">
						<button id="1" onClick={(event) => buttonClick(event)}>Buscar código</button>
						<button id="2" onClick={(event) => buttonClick(event)}>Créditos</button>
						<button id="3" onClick={(event) => buttonClick(event)}>Meus códigos</button>
					</section>
					<hr />

					<main>
						<div className="WorkSpace">
							{renderDiv}
						</div>
						<section className="ListCodesToBuy">
							<h3>Lista de códigos</h3>

							{
								reactLoading ?
									<Loader type={'spin'} color={'#ffffff'} height={64} />
									:
									<FilteredContainer responseCodes={responseCodes} selectedIds={selectedIds} setSelectedIds={setSelectedIds} />
							}

							{
								selectedIds.length != 0 ? <button className="ButtonBuyCodes" onClick={() => handleBuy(selectedIds)}>Comprar códigos</button> : <span></span>
							}


						</section>
					</main>
				</div>

				<WhatsappButton/>


			</DashContainer>
		</DataContext.Provider>
	)
}