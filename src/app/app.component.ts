import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string= 'Template Driven Form';
  firstname:string='';
  lastname:string='';
  event:string='';
  terms:boolean=false;
  registeredName:string='';

  register(formValue:NgForm){
    console.log(formValue.value);
  }
  success(){
    alert("Successfullt registered!!");
  }
  resetForm(formValue:NgForm){
    formValue.reset() 
  }
  setForm(formValue:NgForm){
    let data={
      firstname:'Kavya',
      lastname:"Mohanraj",
      event:'Singing',
      terms:false
    }
    formValue.setValue(data)
  }
}
