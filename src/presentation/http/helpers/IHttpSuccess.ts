import { Response } from "express";
/**
 * Interface representing HTTP success responses.
 */
export interface IHttpSuccess {
  /**
   * Generates a success response with a status code of 200.
   * @param data Optional data to include in the response body.
   * @returns An HTTP response object.
   */
  success_200(res: Response, data?: any): Response;

  /**
   * Generates a success response with a status code of 201.
   * @param data Optional data to include in the response body.
   * @returns An HTTP response object.
   */
  success_201(res: Response, data?: any): Response;
}
