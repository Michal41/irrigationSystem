export interface ServiceResponseBase {
  success: boolean
}

export interface SuccessService<T> extends ServiceResponseBase {
  result: T
  success: true
}

export interface FailService extends ServiceResponseBase {
  error: string
  success: false
}

export type ServiceResponse<T> = SuccessService<T> | FailService
