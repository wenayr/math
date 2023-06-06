import * as fs from 'fs';
import * as path from 'path';
import * as ExcelJS from 'exceljs';
import * as pdfkit from 'pdfkit';

async function convertExcelToPDF(excelFilePath: string, pdfFilePath: string): Promise<void> {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);
    const pdfDoc = new pdfkit({autoFirstPage: false});

    workbook.eachSheet((worksheet) => {
        worksheet.eachRow((row, rowNumber) => {
            row.eachCell((cell) => {
                // Копирование стилей ячейки.
                const {alignment, border, fill, font, numFmt} = cell;

                const pdfCell = pdfDoc.cell(cell.$address);

                if (alignment) {
                    pdfCell.align(alignment.horizontal, alignment.vertical);
                }

                if (border) {
                    pdfCell.border(
                        border.top.style,
                        border.right.style,
                        border.bottom.style,
                        border.left.style,
                    );
                }

                if (fill) {
                    pdfCell.fill(fill.type, fill.color.rgba);
                }

                if (font) {
                    pdfCell.font(font.name, {size: font.size, bold: font.bold});
                }

                if (numFmt) {
                    pdfCell.numFmt(numFmt);
                }

                // Запись значения ячейки.
                const value = cell.value?.toString() ?? '';
                pdfCell.text(value);

                // Задание размеров ячейки.
                const [columnWidth, rowHeight] = worksheet.getColumn(cell.col).width;
                pdfCell.width(columnWidth - 0.5);
                pdfCell.height(rowHeight - 0.5);
            });
        });

        // Добавление страницы документа PDF для каждого листа Excel.
        pdfDoc.addPage();
        const pdfPage = pdfDoc.page;
        const {pageMargins} = worksheet;

        pdfPage.margins(
            pageMargins.top || 0,
            pageMargins.left || 0,
            pageMargins.bottom || 0,
            pageMargins.right || 0
        );

        pdfDoc.text(worksheet.name);
        pdfPage.drawText(worksheet.getCell('A1').address, {baseline: 'top'});
    });

    await new Promise((resolve, reject) => {
        pdfDoc.pipe(fs.createWriteStream(pdfFilePath))
            .on('finish', resolve)
            .on('error', reject);
        pdfDoc.end();
    });
}

// Пример использования
const excelFilePath = path.join(__dirname, 'example.xlsx');
const pdfFilePath = path.join(__dirname, 'example.pdf');

convertExcelToPDF(excelFilePath, pdfFilePath)
    .then(() => console.log('Конвертация успешно завершена'))
    .catch((error) => console.error(`Ошибка конвертации: ${error}`));