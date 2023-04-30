import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'xlsx';


@Component({
  selector: 'app-payslip',
  templateUrl: './payslip.component.html',
  styleUrls: ['./payslip.component.css']
})
export class PayslipComponent implements OnInit {

  items: any = "";
  result: any = ""
  time: any;
  fileName = 'ExcelSheet.xlsx';
  tdays:any="";
  spinner:any;


  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {


    let date: Date = new Date()
    this.time = date;

    this.http.get('http://localhost:3030/getauth', { responseType: 'json' }).subscribe((response) => {
      console.log(response)
      this.result = response
      if (this.result == null) {
        window.alert("You haven't logged in!Redirecting to Login Page");
        this.route.navigate([""])
      }
    })

    this.http.get("http://localhost:3030/eppayslip", { responseType: 'json' }).subscribe((response) => {
      if (Response) {
        this.hideloader();
    }
      console.log(response)
      this.result = response;
      this.items = this.result['Envelope']['Body']['ZFM_EP_EMPPAYSLIP_MD.Response']['IT_PAY']['item']
    });


  }

  shutdown() {
    this.http.get('http://localhost:3030/shutdown', { responseType: 'json' }).subscribe((data) => {

    });

    this.route.navigate([""]);
  }

  print() {
    this.http.get('http://localhost:3030/pdf', { responseType: 'json' }).subscribe((data) => {
      console.log(data);
    });
  }

  exporttoexcel(): void {
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName);
  }

  hideloader()
  {
    this.spinner=document.getElementById('loading');
    this.spinner .style.display = 'none';
    
  }

}
