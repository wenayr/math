import * as fs from 'fs';
import * as path from 'path';
import * as ExcelJS from 'exceljs';
import * as pdfmake from 'pdfmake/build/pdfmake';
import * as vfsFonts from 'pdfmake/build/vfs_fonts';


frun()
async function frun() {

    const ext = '.pdf'
    console.log("0000")
    const inputPath = path.join(__dirname, '/12.xlsx');
    const outputPath = path.join(__dirname, `/examp4le23${ext}`);


// Load the Excel file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(inputPath);

// Get the first worksheet
    const worksheet = workbook.worksheets[0];

// Set up PDF generation options
    pdfmake.vfs = vfsFonts.pdfMake.vfs;
    const docDefinition = {
        content: [
            {
                table: {
                    headerRows: 1,
                    widths: [],
                    body: [],
                },
                style: 'tableStyle',
            },
        ],
        styles: {
            tableStyle: {
                margin: [0, 5, 0, 15],
                fontSize: 10,
                table: {
                    headerRows: 1,
                    widths: [],
                    body: [],
                },
            },
        },
    };

// Populate the PDF table with data from the Excel file
    worksheet.eachRow((row, rowIndex) => {
        const rowData: any[] = [];
        row.eachCell((cell, colIndex) => {
            if (rowIndex === 1) {
                // Set column widths in PDF table by measuring Excel cell sizes
                const columnWidth = Math.max(10, cell.value ? String(cell.value).length : 0);

                docDefinition.styles.tableStyle.table.widths.push(`${columnWidth}%` as never);
            }
            rowData.push(cell.value || '');
        });
        // @ts-ignore
        docDefinition.content[0].table.body.push(...rowData);
    });

// Generate the PDF file
    const fonts = {
        Roboto: {
            normal: 'node_modules/pdfmake/build/vfs_fonts/Roboto-Regular.ttf',
            bold: 'node_modules/pdfmake/build/vfs_fonts/Roboto-Medium.ttf',
            italics: 'node_modules/pdfmake/build/vfs_fonts/Roboto-Italic.ttf',
            bolditalics: 'node_modules/pdfmake/build/vfs_fonts/Roboto-MediumItalic.ttf',
        },
    };
    pdfmake.createPdf(docDefinition, { fonts }).getStream().pipe(fs.createWriteStream(outputPath));


}

