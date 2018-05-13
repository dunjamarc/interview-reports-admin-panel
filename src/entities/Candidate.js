class Candidate  {
    constructor(obj){
        this.id = obj.id
        this.name = obj.name
        this.birthday = obj.birthday
        this.email = obj.email
        this.education = obj.education
        this.avatar = obj.avatar

    }

    image () {
        if(this.avatar == ""){
            this.avatar = "http://budhubz.com/wp-content/themes/budhubs/images/noavatar.png";
        }
        return this.avatar;
    }
    
}

export default Candidate;