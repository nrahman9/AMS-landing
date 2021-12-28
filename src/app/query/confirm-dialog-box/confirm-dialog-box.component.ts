import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-confirm-dialog-box',
  templateUrl: './confirm-dialog-box.component.html',
  styleUrls: ['./confirm-dialog-box.component.css'],
})
export class ConfirmDialogBoxComponent implements OnInit {
  constructor(private el: ElementRef) {}
  @Output() dismiss = new EventEmitter();
  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  @ViewChild('dialog', { static: false }) dialog!: ElementRef;

  onDismissClick() {
    this.dismiss.emit();
  }
}
