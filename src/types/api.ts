export type ApiResponseBase<T = any> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      message: string;
    };
