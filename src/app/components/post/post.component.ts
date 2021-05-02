import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/models/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() posts:Post;
  @Input() index:number;
  @Output() delete:EventEmitter<number>=new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * delete post and emit index to remove of array 
   * 
   * @param {number} id user id 
   */
  deletePost(id:number){
   
  }

}
