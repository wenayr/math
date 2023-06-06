import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as PDFDocument from 'pdfkit';
import * as path from "path";

const workbook = new ExcelJS.Workbook();


async function func() {

// Загрузка Excel-файла

    const ext = '.pdf'
    console.log("0000")
    const inputPath = path.join(__dirname, '/12.xlsx');
    const outputPath = path.join(__dirname, `/examp4le23${ext}`);


    console.log("11")
    await workbook.xlsx.readFile(inputPath);
    console.log("22")

    const worksheet = workbook.worksheets[0];

    console.log("333")
// Получение данных из листа
    const data = worksheet.getSheetValues();

    console.log("444")
// Создание PDF-документа
    const doc = new PDFDocument();

    console.log("555")
    doc.pipe(fs.createWriteStream(outputPath));

    console.log("9999")
// Вставка данных в PDF-документ
    data.forEach((row) => {

        // console.log("row ", row)
        // @ts-ignore
        row.forEach((cell: any) => {
            doc.text(cell);
        });
        doc.moveDown();
    });

    doc.end();
}

func()
