import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppService]
})
export class AppComponent implements OnInit {

  BUName : ["KL", "JMC", "KPTL", "PSIPL"];

  registerForm = this.formBuilder.group({
    message: new FormControl(''),
    BUName: new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private AppService : AppService
  ) { }

  ngOnInit() {
  }
  onRegister(form){
    console.log(this.registerForm.value);

    var payload = {
      'msg' : this.registerForm.value.message,
      'BuName' : this.registerForm.value.BUName
    }
    console.log(payload);
      this.AppService.myData(payload).subscribe(res =>{
      console.log(res);
      })

      this.registerForm.reset();
  }

}
