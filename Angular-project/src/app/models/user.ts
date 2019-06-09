export class User {
    // "id": 4,
    //         "email": "eve.holt@reqres.in",
    //         "first_name": "Eve",
    //         "last_name": "Holt",
    //         "avatar": "ht


    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
    job: string;
    createdAt: Date;
    updatedAt: Date;
    isSelected: boolean;
    name: string;

    constructor(id: number
        , email: string
        , first_name: string
        , last_name: string
        , avatar: string
        , job: string
    ) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.avatar = avatar;
        this.job = job; 
        this.isSelected = false;
    }

}


export class UserGetAllResponse{

    page : number;
    per_page : number;
    total : number;
    total_page : number;    
    data: User[];
}