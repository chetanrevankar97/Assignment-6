import { Component, OnInit } from '@angular/core';
import{Books} from '../books';
import { DataService } from '../data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  books:Books[]=[];
id:number;
title:string;
newbook1:Books;
newbook2:Books;
newbook3:Books;
newbook4:Books;
newbook5:Books;
newbook6:Books;
newbook7:Books;
newbook8:Books;

price:number;
  constructor(private svc:DataService) { }

  ngOnInit() {
    
  }

  createBooks1(){
    this.newbook1=new Books(this.id, this.title, this.price);
    
    
    this.svc.add1(this.newbook1);
    
   
  }
  createBooks2(){
    this.newbook2=new Books(this.id, this.title, this.price);
    this.svc.add2(this.newbook2);

  }
  createBooks3(){
    this.newbook3=new Books(this.id, this.title, this.price);
    this.svc.add3(this.newbook3);

  }
  createBooks4(){
    this.newbook4=new Books(this.id, this.title, this.price);
    
    this.svc.add4(this.newbook4);

  }
  createBooks5(){
    this.newbook5=new Books(this.id, this.title, this.price);
    
    this.svc.add5(this.newbook5);

  }
  createBooks6(){
    this.newbook6=new Books(this.id, this.title, this.price);
    
    this.svc.add6(this.newbook6);

  }
  createBooks7(){
    this.newbook7=new Books(this.id, this.title, this.price);
    
    this.svc.add7(this.newbook7);

  }
  createBooks8(){
    this.newbook8=new Books(this.id, this.title, this.price);
    
    this.svc.add8(this.newbook8);

  }
  


}
