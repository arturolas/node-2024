import { IHttpErrors } from "../IHttpErrors";
import { Response } from "express";

/**
 * Implementation of IHttpErrors for generating common HTTP error responses.
 */
export class HttpErrors implements IHttpErrors {
  /**
   * Returns a 422 Unprocessable Entity HTTP error response.
   * @returns The HTTP error response.
   */
  error_422(res: Response, data?: any): Response {
    return res.status(422).json({
      statusCode: 422,
      statusMsg: "Unprocessable Entity",
      message: data.message,
    });
  }

  /**
   * Returns a 400 Bad Request HTTP error response.
   * @returns The HTTP error response.
   */
  error_400(res: Response, data?: any): Response {
    return res.status(400).json({
      statusCode: 400,
      statusMsg: "Bad Request",
      message: data.message,
    });
  }

  /**
   * Returns a 404 Not Found HTTP error response.
   * @returns The HTTP error response.
   */
  error_404(res: Response, data?: any): Response {
    return res.status(404).json({
      statusCode: 404,
      statusMsg: "Not Found",
      message: data,
    });
  }

  /**
   * Returns a 500 Internal Server Error HTTP error response.
   * @returns The HTTP error response.
   */
  error_500(res: Response, data?: any): Response {
    return res.status(500).json({
      statusCode: 500,
      statusMsg: "Internal Error",
      message: data.message,
    });
  }
}
