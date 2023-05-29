// import * as XLSX from 'xlsx';
// import 'jspdf-autotable'
// import jsPDF from "jspdf";
// import * as ExcelJS from 'exceljs';
//
//
//
// export async function fffff(data:File) {
//
// // Читаем Excel файл
//     const workbook = XLSX.read(await data.arrayBuffer(), {type: 'binary'});
//
//     const workbook1 = new ExcelJS.Workbook();
//     workbook1.xlsx.load(await data.arrayBuffer())
//     // const SheetNames = workbook.SheetNames
//     // SheetNames.forEach(ls=>{
//     //     const st = workbook.Sheets[ls]!
//     //     st.
//     // })
//     // Object.entries(workbook.Sheets).forEach(e=>)
//     // for (let sheetsKey in workbook.Sheets) {
//     //
//     // }
// // Получаем первый лист
//     const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//
//     const table = workbook.Workbook
//
//     workbook.Workbook.
//
//     console.log(1111)
// // Преобразуем лист в массив объектов
//     const table = workbook.
//     // const wb = XLSX.utils.book_new();
//     //
//     //
//     // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//
//     console.log(worksheet);
//     console.log(table);
//     console.log(2222)
//
//     const wb = XLSX.utils.book_new();
//     const ws = XLSX.utils.table_to_sheet(table);
//     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//     const wbout = XLSX.write(wb, { bookType: 'pdf', type: 'array' });
//
//     const pdf = new jspdf.default('l', 'pt', 'a4');
//     pdf.autoTable({ html: '#'  });
//     pdf.save('example.pdf');
//
//
//     const doc = new jsPDF();
//     const table = workbook.getWorksheet(1).getTable();
//     const rows = table.getRows();
//
//     rows.forEach((row) => {
//         const values = row.values;
//         doc.text(values.join(' '), 10, 10);
//     });
//
//     doc.save('file.pdf');
//
//
// // // Создаем новый документ в формате PDF
// //     const doc = new jsPDF();
// //     console.log(3333)
// // // Создаем таблицу из массива объектов
// //
// //     doc.table({
// //         x: 0, y: 0,
// //         head: [Object.keys(table[0])],
// //         body: table.map(obj => Object.values(obj))
// //     })
//
//     /*
//
//
//
//     const exportToPdf = (tableId: string) => {
//         const table = document.getElementById(tableId);
//         const ws = XLSX.utils.table_to_sheet(table);
//         const wb = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//         const wbout = XLSX.write(wb, { bookType: 'pdf', type: 'array' });
//         const pdf = new jspdf.default('l', 'pt', 'a4');
//         pdf.autoTable({ html: '#' + tableId });
//         pdf.save('example.pdf');
//     };
//
//      */
//     // doc.add
//     // doc.autoTable({
//     //     head: [Object.keys(table[0])],
//     //     body: table.map(obj => Object.values(obj))
//     // });
//
//
//     /*
//     *
//     *
//     import * as XLSX from 'xlsx';
// import * as jspdf from 'jspdf';
// import 'jspdf-autotable';
//
// const exportToPdf = (tableId: string) => {
//   const table = document.getElementById(tableId);
//   const ws = XLSX.utils.table_to_sheet(table);
//   const wb = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
//   const wbout = XLSX.write(wb, { bookType: 'pdf', type: 'array' });
//   const pdf = new jspdf.default('l', 'pt', 'a4');
//   pdf.autoTable({ html: '#' + tableId });
//   pdf.save('example.pdf');
// };
//     * */
//
// // Сохраняем документ в формате PDF
//     doc.save('output.pdf');
// }