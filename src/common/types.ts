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

export interface IProfileData extends IBaseResponse {
  data: {
    fullname: string | null
    email: string | null
    avatar: string | null
  }
}

export interface IAuthorData extends IBaseResponse {
  data: {
    authorId: number
    name: string
  }
}
export interface IQuoteData extends IBaseResponse {
  data: {
    quoteId: number
    authorId: number
    quote: string
  }
}
