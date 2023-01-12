export interface IBaseResponse {
  success: boolean
}

export interface IInfoData extends IBaseResponse {
  data: {
    info: string
  }
}

export interface ILoginData extends IBaseResponse {
  data: {
    token: string
  }
}
