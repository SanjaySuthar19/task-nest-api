import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getRoutes(): any {
    return {
      information: "CRUD API - NestJs",
      routes:{
        getAll: {
          route: "/task",
          method: "GET"
        },
        create: {
          route: "/task",
          method: "POST"
        },
        update: {
          route: "/task/:id",
          method: "PATCH"
        },
        delete: {
          route: "/task/:id",
          method: "DELETE"
        }
      }
    };
  }
}
