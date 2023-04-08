import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '<h1>Bem vindo a API Membros!</h1>\n <p>Para acessar a documentação da API, acesse <a href="https://documenter.getpostman.com/view/10910100/SzYbX9Zu?version=latest">este link</a></p>';
  }
}
