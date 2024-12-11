// qrcode.d.ts
declare module 'qrcode' {
    export interface QRCodeOptions {
      errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
      type?: 'svg' | 'png' | 'jpeg';
      margin?: number;
      width?: number;
    }
  
    export function toDataURL(data: string, options?: QRCodeOptions): Promise<string>;
    export function toFile(filePath: string, data: string, options?: QRCodeOptions): Promise<void>;
  }
  