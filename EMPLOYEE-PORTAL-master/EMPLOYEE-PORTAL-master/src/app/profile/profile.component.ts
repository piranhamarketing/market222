import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name:any="";
  empid:any=""
  street:any=""
  name2:any=""
  dob:any=""
  city:any=""
  district:any=""
  country:any=""
  telenum:any=""
  result:any
  postcode:any=""
  role:any=""
  practice:any=""
  time:any
  position:any;
  spinner:any;

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void {
    let date:Date= new Date()
    this.time=date;

    this.http.get("http://localhost:3030/epprofile",{responseType:'json'}).subscribe((response)=>
    {
      if (Response) {
        this.hideloader();
    }
      console.log(response)
      this.result = response
      this.empid = this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].PERNR
      if(this.empid=="")
      {
        window.alert("You haven't logged in!Redirecting to Login Page");
       this.route.navigate([""])
      }
      else{
      this.name = this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].ENAME
      this.name2 = this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].NACHN
      this.dob = this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].GBDAT
      this.country = this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].LAND
      this.street = this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].STRAS
      this.telenum = this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].TELNR
      this.city = this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].ORT01
      this.postcode = this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].PSTLZ
      this.role=this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].PLANS_TXT
      this.practice=this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].ORGEH_TXT
      this.position=this.result['Envelope']['Body']['ZFM_PROFILE_EP_MD.Response']['E_EMPDATA'].PLANS_TXT
      }
      

    });
  }
  shutdown()
  {
    this.http.get('http://localhost:3030/shutdown',{responseType:'json'}).subscribe((data)=>
    {
      
    });
    
    this.route.navigate([""]);
  }

  hideloader()
  {
    this.spinner=document.getElementById('loading');
    this.spinner .style.display = 'none';
    
  }
}


