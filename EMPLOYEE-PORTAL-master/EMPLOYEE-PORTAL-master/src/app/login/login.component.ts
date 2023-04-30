import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  empid:any=""
  password:any="";
  json:any
  result:any
  status:any
  x:any
  gotp:any=""
  lotp:any=""
  json2:any
 

  constructor(private route:Router,private http:HttpClient) { }

  ngOnInit(): void
  {
  }



  validate()
  {
    if(this.empid=="" && this.password=="")
    {
      window.alert("Please fill Employee-ID and Password");
    }
    else if(this.empid=="")
    {
      window.alert("Please fill Employee-ID");

    }
    else if(this.password=="")
    {
      window.alert("Please fill Password");

    }
    else if(this.gotp=="")
    {
      window.alert("Please fill OTP");

    }

    else
    {
   this.json={
    "empid":this.empid,
    "password":this.password
   }
   console.log(this.json)
   this.http.post('http://localhost:3030/eplogin',this.json,{responseType:'json'}).pipe(
    catchError(error => {
      console.error(error);
      window.alert("An error occurred while processing your request.Please ensure that the backend is running or Please try again later.");
      return []; // return an empty array to continue the observable stream
    })
  ).subscribe((response=>
   {
      this.result = response
      console.log(this.result)
      console.log(this.result['Envelope']['Body']['ZFM_LOGIN_EP_MD.Response']['RETCODE'].toString())
      this.status=this.result['Envelope']['Body']['ZFM_LOGIN_EP_MD.Response']['RETCODE']
      if(this.status == 'S' && this.gotp==this.lotp)
      {
         window.alert("Login Successful")
        this.route.navigate(["/profile"]);
      }
      else if(this.gotp!=this.lotp)
      {
        window.alert("Incorrect OTP!Kindly recheck the opt and enter the correct otp")
      }
      else
      {
        window.alert("Incorrect Credentials!Please Check")
      }

   }))
  }
   

  }

  myFunction()
  {
    this.x = document.getElementById("myInput");
    if (this.x.type === "password") {
      this.x.type = "text";
    } else {
      this.x.type = "password";
    }
  }

  getOtp()
  {
    this.lotp = 0;
    var digits = '0123456789';
  
    for(let i=0;i<6;i++)
    {
      this.lotp += digits[Math.floor(Math.random()*10)]
    }
    console.log(this.lotp);
    window.alert("OTP SENT SUCCESSFULLY")
    this.json2=
    {
      "otp":this.lotp
    }
    this.http.post('http://localhost:3030/otp',this.json2,{responseType:'json'}).pipe(
      catchError(error => {
        console.error(error);
        window.alert("An error occurred while processing your request.Please ensure that the backend is running or Please try again later.");
        return []; // return an empty array to continue the observable stream
      })
    ).subscribe((response)=>
   {
      this.result = response
      console.log(this.result)
   })

    return this.lotp

  }
}

      
  


