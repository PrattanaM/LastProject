import React from 'react';
import * as ExcelJS from 'exceljs';

const GenerateExcel: React.FC = () => {
    const createExcelFile = () => {
        // Create a new workbook
        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Data');

        worksheet.columns = [
            { header: 'Column 1', key: 'col1', width: 10 },
            { header: 'Column 2', key: 'col2', width: 20 },
            { header: 'Column 3', key: 'col3', width: 15 }
        ];

        worksheet.addRow({ col1: 'Data 1', col2: 'Data 2', col3: 'Data 3' });

        // Save the workbook to a file
        workbook.xlsx.writeFile('projectData.xlsx')
            .then(() => {
                console.log('Excel file created successfully');
            })
            .catch((error) => {
                console.log('Error creating Excel file:', error);
            });
    };

    return (
        <div>
            <h1>Create Excel File</h1>
            <button onClick={createExcelFile}>Create Excel File</button>
        </div>
    );
};

export default GenerateExcel;