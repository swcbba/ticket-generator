import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';

import { QRCodeComponent } from 'angularx-qrcode';

import { Assistant } from '../../models/assistant.model';

@Component({
  selector: 'tg-credential',
  templateUrl: './credential.component.html',
  styleUrls: ['./credential.component.scss']
})
export class CredentialComponent implements OnInit, OnChanges {
  qrData = 'QR was not generated yet';
  @Output() credentialLoaded = new EventEmitter();
  @Input() canvasWidth: number;
  @Input() canvasHeight: number;
  @Input() assistant: Assistant;
  @ViewChild('credentialCanvas', { static: true })
  credentialCanvas: ElementRef;
  @ViewChild('qrCode', { static: true })
  private qrCode: QRCodeComponent;

  ngOnInit(): void {
    this.credentialLoaded.emit();
  }

  ngOnChanges(): void {
    this.loadCredential();
  }

  print(): void {
    const printButton = document.createElement('a');
    printButton.download = this.assistant.fullName;
    printButton.href = this.credentialCanvas.nativeElement.toDataURL(
      'image/png;base64'
    );

    printButton.click();
  }

  private loadCredential(): void {
    if (this.assistant) {
      this.qrData = this.assistant.id;
      const context = (this.credentialCanvas
        .nativeElement as HTMLCanvasElement).getContext('2d');
      const templateImage = new Image();
      const qrTop = 185;
      const qrLeft = 87;
      const nameTop = 157;
      const nameLeft = this.canvasWidth / 2;

      templateImage.src = 'assets/images/cred.png';
      templateImage.onload = () => {
        let qrImage = this.qrCode.el.nativeElement.querySelector('img');

        if (!qrImage.src) {
          qrImage = this.qrCode.el.nativeElement.querySelector('canvas');
        }

        context.drawImage(templateImage, 0, 0);
        context.font = '25px Montserrat';
        context.textAlign = 'center';
        context.fillStyle = '#c32137';
        context.fillText('Women\'s Talk Night', nameLeft, nameTop - 40);
        context.fillStyle = 'black';
        context.fillText(this.assistant.fullName, nameLeft, nameTop);
        context.drawImage(qrImage, qrLeft, qrTop);
      };
    }
  }
}
