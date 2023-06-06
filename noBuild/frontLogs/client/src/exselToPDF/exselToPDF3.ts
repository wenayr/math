import * as XLSX from 'xlsx';
import * as jsPDF from 'jspdf';



export async function fffff3(data:File) {

// Читаем Excel файл
    const workbook = XLSX.read(await data.arrayBuffer(), {type: 'binary'});

    // const SheetNames = workbook.SheetNames
    // SheetNames.forEach(ls=>{
    //     const st = workbook.Sheets[ls]!
    //     st.
    // })
    // Object.entries(workbook.Sheets).forEach(e=>)
    // for (let sheetsKey in workbook.Sheets) {
    //
    // }
// Получаем первый лист
    console.log(11111, workbook.SheetNames)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    console.log(2222)
    const dataJson = XLSX.utils.sheet_to_json(worksheet);

    console.log(3333, dataJson)

    const docDefinition = {
        content: [
            { text: 'Excel to PDF', style: 'header' },
            '\n',
            {
                table: {
                    headerRows: 1,
                    body: [
                        // Object.keys(dataJson[0]).map(key => ({ text: key })),
                        // ...dataJson.map(obj => Object.values(obj))
                    ]
                }
            }
        ],
        styles: {
            header: {
                fontSize: 20,
                bold: true
            }
        }
    };

    console.log(4444)
// Создание и отображение PDF документа
//     pdfMake.createPdf(docDefinition).download("232.pdf");

    console.log("final")

}