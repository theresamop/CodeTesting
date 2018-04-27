import {AutoGrid} from './AutoGrid';
//ViewChild Needed whenever you want to access a child component property or method
import {Component,ViewChild} from '@angular/core';
@Component({
  selector:'MainComponent',
  template: `
           <AutoGrid
           [Columns]="Columns2Display"
           [AllowDelete]="true" [TotalRows]="100" [PageSize]="20">
           </AutoGrid>`,
  directives: [AutoGrid]
})

export class MainComponent
{
//Dummy data to be loaded
Items2Load : any = [{Key:'1', paramName:'Dummy',readType:'Post' ,regEx:'d+',mapValue:'31',priority:2},
                    {Key:'2', paramName:'Something',readType:'GET' ,regEx:'&^',mapValue:'44',priority:1},
                    {Key:'3', paramName:'Hello',readType:'JSON' ,regEx:'w+',mapValue:'333',priority:4},
                    {Key:'4', paramName:'Goo',readType:'XML' ,regEx:'OSOSOS',mapValue:'555',priority:6}];

//Columns to display, enable / disalble sort
//Basicly any column base configuration needed, can be added here
//Such as Display name, column Icon ....
Columns2Display : any =[
                {colName: "Key", sortable:true},
                {colName: "paramName", sortable:true},
                {colName: "readType", sortable:false},
                {colName: "regEx", sortable:true},
                {colName: "mapValue", sortable:true},
                {colName: "priority", sortable:true}];


//Through this we can access the child component through _AutoGrid
@ViewChild(AutoGrid)  private _AutoGrid:AutoGrid;

//Load the data into the child component
//Cannot be done inside constructor as you don't have access to ViewChild in constructor

ngOnInit(){

      //Pass the data to child compoment, through LoadData method
      this._AutoGrid.LoadData(this.Items2Load);

      //Can be loaded using ajax call or service
      //this._dummy service.LoadItems((res:any)=>{
      //  this._AutoGrid.LoadData(res);
      //});
  }


//Handle the events (Delete / PageIndexChanged)
ngAfterViewInit() {
      this._AutoGrid.RowDeleted$.subscribe(c => console.log("I saw you, deleted " + c.Key));
      this._AutoGrid.PageIndexChanged$.subscribe(c=> console.log("New page id " + c));
  }

}
