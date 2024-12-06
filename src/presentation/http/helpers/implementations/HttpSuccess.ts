import { IHttpSuccess } from "../IHttpSuccess";
import { Response } from "express";
/**
 * Implementation of IHttpSuccess representing HTTP success responses.
 */
export class HttpSuccess implements IHttpSuccess {
  /**
   * Creates a success response with status code 200.
   * @param data - The data to be included in the response data.
   * @returns An HTTP response with status code 200 and the provided data.
   */
  success_200(res: Response, data?: any): Response {
    return res.status(200).json({
      statusCode: 200,
      statusMsg: "Success",
      data: data,
    });
  }

  /**
   * Creates a success response with status code 201.
   * @param data - The data to be included in the response body.
   * @returns An HTTP response with status code 201 and the provided data.
   */
  success_201(res: Response, data?: any): Response {
    return res.status(201).json({
      statusCode: 201,
      statusMsg: "Success",
      data: data,
    });
  }
}
