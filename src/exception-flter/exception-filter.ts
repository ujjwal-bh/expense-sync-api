import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
  } from '@nestjs/common';
  
  @Catch(HttpException)
  export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
      const context = host.switchToHttp();
      const response = context.getResponse();
      const status = exception.getStatus();
      const errRes: any = exception.getResponse();
      console.log("Error: ", status);
      
      
      response.status(status).json({
        statusCode: status,
        message: errRes?.message
      });
    }
  }
  