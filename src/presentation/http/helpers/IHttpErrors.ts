import { Response } from "express";

/**
 * Interface representing HTTP error responses.
 */
export interface IHttpErrors {
  /**
   * Creates an HTTP response with status code 422 (Unprocessable Entity).
   * @returns An HTTP response with status code 422.
   */
  error_422(res: Response, data?: any): Response;

  /**
   * Creates an HTTP response with status code 400 (Bad Request).
   * @returns An HTTP response with status code 400.
   */
  error_400(res: Response, data?: any): Response;

  /**
   * Creates an HTTP response with status code 404 (Not Found).
   * @returns An HTTP response with status code 404.
   */
  error_404(res: Response, data?: any): Response;

  /**
   * Creates an HTTP response with status code 500 (Internal Server Error).
   * @returns An HTTP response with status code 500.
   */
  error_500(res: Response, data?: any): Response;
}
