// Import xlsx
import * as EXCEL from  'xlsx';
import fs from 'fs';

interface TestRecord{
    skill1: string,
    skill2: string
}

export function readExcelFile(filepath:string){
 
    const file=  fs.readFileSync(filepath);

    const workbook= EXCEL.read(file);
    const sheet= workbook.Sheets[workbook.SheetNames[0]]
    const rawData: any []=EXCEL.utils.sheet_to_json(sheet, {header:1})
   const records:TestRecord[]= rawData.slice(1).map((column:any)=>({
    
        skill1: column[0],
        skill2: column[1],


    }))
    return records;
}