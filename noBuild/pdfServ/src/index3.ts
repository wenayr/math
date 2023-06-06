import * as exceljs from 'exceljs';
import * as pdfkit from 'pdfkit';
import * as fs from 'fs';
import * as path from "path";

convertExcelToPdf();

async function convertExcelToPdf() {

    const ext = '.pdf'
    console.log("0000")
    const inputPath = path.join(__dirname, '/12.xlsx');
    const outputPath = path.join(__dirname, `/example23333${ext}`);


    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(inputPath);

    const pdfDoc = new pdfkit();


    const length = workbook.worksheets.length

    console.log("length ", length);

    for (let i = 1; i <= length; i++) {
        console.log(length+"/"+i)
        const worksheet = workbook.getWorksheet(i);
        worksheet.eachRow((row, rowNumber) => {
            console.log(row);
            row.eachCell((cell, colNumber) => {
                console.log(cell);
                pdfDoc.text(cell.value?.toString()??"", colNumber * 50, rowNumber * 20);
            });
            return;
        });

        if (i < workbook.worksheets.length) {
            pdfDoc.addPage();
        }
    }

    pdfDoc.pipe(fs.createWriteStream(outputPath));
    pdfDoc.end();
}
