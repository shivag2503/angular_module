import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.css']
})
export class PredictionComponent implements OnInit {

  my_string: any;
  data: any;

  predictionForm = new FormGroup({
    sat: new FormControl("", [
      Validators.required,
      Validators.min(0),
      Validators.max(2400),
      Validators.pattern("^[0-9]*$")
    ])
  });

  constructor(private api: APIService) { }

  ngOnInit(): void {}

  predict(){
    console.log(this.predictionForm.value.sat);
    this.api.getGPA(this.predictionForm.value.sat).subscribe((data) => {
      this.data = data;
       this.my_string = "For SAT score " + this.predictionForm.value.sat + " GPA is:" + this.data[0];
    })
}

}

