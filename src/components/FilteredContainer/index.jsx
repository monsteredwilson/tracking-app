import { FilteredElement } from "./FilteredElement";
import './style.css'

export function FilteredContainer({responseCodes, selectedIds, setSelectedIds}){
	
	return(
		<div className="FilteredContainer">
			<FilteredElement responseCodes={responseCodes} selectedIds={selectedIds} setSelectedIds={setSelectedIds}/>
		</div>
	)
}