import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as FormData from 'form-data';

@Injectable()
export class AiService {
  private FASTAPI_URL = 'http://172.25.123.59:8000/predict/image'; // Change to FastAPI server

  constructor(private readonly httpService: HttpService) {}

  async predictImage(file: Express.Multer.File) {
    const formData = new FormData();
    formData.append('file', file.buffer, file.originalname);
    const response = await firstValueFrom(
      this.httpService.post(this.FASTAPI_URL, formData, {
        headers: formData.getHeaders(),
      }),
    );

    return response.data;
  }
}