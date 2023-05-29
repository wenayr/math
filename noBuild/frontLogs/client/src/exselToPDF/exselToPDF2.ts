// import * as ExcelJS from 'exceljs';
// import * as pdfMake from 'pdfmake/build/pdfmake';
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';
//
// // Загружаем шрифты для pdfMake
// pdfMake.vfs = pdfFonts.pdfMake.vfs;
//
// // Создаем функцию для конвертации
// export async function convertExcelToPDF2(excelFile: File): Promise<void> {
//     // Читаем файл Excel
//     const workbook = new ExcelJS.Workbook();
//     await workbook.xlsx.load(await excelFile.arrayBuffer());
//
//
//     console.log("workbook",workbook);
//
//
//     console.log("111");
//
//     // Создаем документ PDF
//     const docDefinition = {
//         content: [
//             {
//                 table: {
//                     headerRows: 1,
//                     body: []
//                 }
//             }
//         ]
//     };
//
//     console.log("222")
//     // Заполняем таблицу в документе PDF данными из файла Excel
//     const worksheet = workbook.worksheets[0];
//     worksheet.eachRow((row, rowIndex) => {
//         if (rowIndex === 1) {
//             // Добавляем заголовки колонок
//             row.eachCell((cell, colIndex) => {
//                 docDefinition.content[0].table.body.push([{ text: cell.value, bold: true }]);
//                 if (colIndex === row.cellCount) {
//                     docDefinition.content[0].table.body.push([]);
//                 }
//             });
//         } else {
//             // Добавляем данные из строк
//             row.eachCell((cell, colIndex) => {
//                 docDefinition.content[0].table.body[docDefinition.content[0].table.body.length - 1].push(cell.value);
//                 if (colIndex === row.cellCount) {
//                     docDefinition.content[0].table.body.push([]);
//                 }
//             });
//         }
//     });
//
//
//     console.log("333")
//
//     // Генерируем PDF документ
//     const pdfDocGenerator = pdfMake.createPdf(docDefinition);
//     pdfDocGenerator.getBuffer(async (buffer: any) => {
//         // Сохраняем PDF файл в браузере
//         const pdfBlob = new Blob([buffer], { type: 'application/pdf' });
//         const pdfUrl = URL.createObjectURL(pdfBlob);
//         const link = document.createElement('a');
//         link.href = pdfUrl;
//         link.download = `${excelFile.name}.pdf`;
//         link.click();
//         URL.revokeObjectURL(pdfUrl);
//     });
//
//     console.log("final")
//
// }