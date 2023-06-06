// import { useContext } from 'react';
// import * as FileSaver from 'file-saver';
// import * as XLSX from 'xlsx';
// import { UserContext } from '../../contexts/UserContext';
// import './style.css'


// const ExportToExcel = () => {
// 	const { myCodes } = useContext(UserContext);
// 	const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
// 	const fileExtension = '.xlsx';

// 	const exportToCSV = (data) => {
// 		const ws = XLSX.utils.json_to_sheet(data);
// 		const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
// 		const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
// 		const dataToDownload = new Blob([excelBuffer], { type: fileType });
// 		FileSaver.saveAs(dataToDownload, `download${fileExtension}`);
// 	}

// 	return (
// 		<button className='ExportToExcel' onClick={() => exportToCSV(myCodes)}>Baixar códigos</button>
// 	)
// }

// export default ExportToExcel;