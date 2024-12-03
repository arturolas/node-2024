import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
}
export class ThrowCustom extends Error {
  type: string;

  constructor(message: string) {
    super(message);
    this.name = "ThrowCustom";
    this.type = "CUSTOM_ERROR"; // Identificador único
  }
}

export class HttpResponse {
  Ok(res: Response, data?: any): Response {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      statusMsg: "Success",
      data: data,
    });
  }

  NotFound(res: Response, data?: any): Response {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      statusMsg: "Not Found",
      error: data,
    });
  }

  NotFoundRecord(res: Response, e?: any): Response {
    if (e instanceof Error && "type" in e && e.type === "CUSTOM_ERROR") {
      return this.NotFound(res, e.message);
    } else {
      return this.Error(res, e);
    }
  }

  Unauthorized(res: Response, data?: any): Response {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      statusMsg: "Unauthorized",
      error: data.message,
    });
  }

  Forbidden(res: Response, data?: any): Response {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      statusMsg: "Forbidden",
      error: data.message,
    });
  }

  Error(res: Response, data?: any): Response {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      statusMsg: "Internal server error",
      error: data.message,
    });
  }
}
