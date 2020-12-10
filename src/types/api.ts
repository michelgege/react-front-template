export interface IPub {
    _id          : string
    name         : string
    averageRating: number
    description  : string
    img          : string
    comments     : any[]
    latlng : {
        lat : number
        lng : number
    }
}