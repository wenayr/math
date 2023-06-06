import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';
import * as pdfkit from 'pdfkit';
import * as exceljs from "exceljs";

convertExcelToPdf();

async function convertExcelToPdf() {

    const ext = '.pdf'
    console.log("0000")
    const inputPath = path.join(__dirname, '/12.xlsx');
    const outputPath = path.join(__dirname, `/example21111${ext}`);


    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(inputPath);

    const worksheet = workbook.getWorksheet(1);
    const pdfDoc = new pdfkit();

    let row = 1;
    let col = 1;

    worksheet.eachRow({ includeEmpty: true }, (rowObj,r) => {
        row = r
        col = 1;
        rowObj.eachCell({ includeEmpty: true }, (cellObj,i) => {
            col = i
            const cellValue = cellObj.text;
            const cellRef = cellObj.address;

            // Настраиваем размеры ячейки
            const height = worksheet.getRow(row).height;
            const width = worksheet.getColumn(col).width ?? 0;
            pdfDoc.rect(col, row, width, height);

            console.log(cellObj.border);
            // Настраиваем рамки ячейки

            const borders = cellObj.border ? cellObj.border : null;

            const lineWidth = borders ? borders.hasOwnProperty('left') ? borders.left.style === 'thin' ? 1 : 0 : 1 : 0;
            pdfDoc.lineWidth(lineWidth);

            if (borders.hasOwnProperty('top')) {
                const topBorder = borders.top;
                if (topBorder.style === 'thin') {
                    pdfDoc.moveTo(col, row).lineTo(col+width, row);
                }
            }

            if (borders.hasOwnProperty('right')) {
                const rightBorder = borders.right;
                if (rightBorder.style === 'thin') {
                    pdfDoc.moveTo(col+width, row).lineTo(col+width, row+height);
                }
            }

            if (borders.hasOwnProperty('bottom')) {
                const bottomBorder = borders.bottom;
                if (bottomBorder.style === 'thin') {
                    pdfDoc.moveTo(col, row+height).lineTo(col+width, row+height);
                }
            }

            if (borders.hasOwnProperty('left')) {
                const leftBorder = borders.left;
                if (leftBorder.style === 'thin') {
                    pdfDoc.moveTo(col, row).lineTo(col, row+height);
                }
            }

            // Добавляем значение ячейки
            // @ts-ignore
            pdfDoc.text(cellValue, col, row, { align: 'center', valign: 'center' });
            col++;
        });
        row++;
    });

    pdfDoc.pipe(fs.createWriteStream(outputPath));
    pdfDoc.end();


}

