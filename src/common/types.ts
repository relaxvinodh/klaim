export interface IBaseResponse {
  success: boolean
}

export interface IInfo extends IBaseResponse {
  data: {
    info: string
  }
}
