/**
 * Created by ant on 02.07.2017.
 */
import {Component, OnInit} from '@angular/core'
import {HttpService} from "./http.service";
import {Response, Http} from "@angular/http";


@Component({
    selector: 'questions-list',
    templateUrl: './app/question-list.html',
providers:[HttpService]
})
export class QuestionsList implements OnInit{
    constructor(private httpService: HttpService, private http: Http){
    //this.questionList={};
    }
    ngOnInit(){this.getDat();}
question:Object;
points:number=0;
questionList={};
selectedVariants=[];
displayResults:boolean=false;
Output=[];
response;
getDat(){

    this.httpService.getData().subscribe((data:Response)=>{this.questionList = data.json(); this.question = this.questionList.slides[0] });
    console.log(this.question);

}
onSelect(variant:any){
this.selectedVariants.push(variant);
this.points+=variant.points;

//console.log(this.points);
  //  console.log(this.questionList.slides.length);
for(let key in this.questionList.slides){
console.log(this.questionList.slides[key].id);
    if(+variant.nextId === +this.questionList.slides[key].id){
        this.question = this.questionList.slides[key];
//подготавливаем объект для отправки
        this.Output.push({
            "slideID": this.questionList.slides[key].slideID,
            "variantId": this.questionList.slides[key].variantId,
            "points": this.questionList.slides[key].points
        });
        console.log("data",this.questionList.slides[key],"question",this.question, "nextId", +variant.nextId)
    }else if(variant.nextId === null){
        this.displayResults = true;
        this.httpService.sendData(this.Output).subscribe(response=>this.response=response,error=>console.log(error));
        console.log(this.response);
    }

}
}
startAgain(){
    this.points=0;
    //this.getDat();
    this.question = this.questionList.slides[0];
    this.displayResults = false;
}
}