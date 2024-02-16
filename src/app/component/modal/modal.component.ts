import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

interface ModalData{
  name:string;
  image:string|null;
}


@Component({
  selector: 'app-dialog',
  templateUrl: './modal.component.html',
  styleUrls:['./modal.component.css']
})
export class ModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalData, public dialogRef: MatDialogRef<ModalComponent>,) {}

  onYesClick(): void {
    this.dialogRef.close({update:true})
  }

}
