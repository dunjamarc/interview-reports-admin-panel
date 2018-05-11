class Report  {
    constructor(obj){
        this.id = obj.id
        this.candidateId = obj.candidateId
        this.candidateName = obj.candidateName
        this.companyId = obj.companyId
        this.companyName = obj.companyName
        this.interviewDate = obj.interviewDate
        this.phase = obj.phase
        this.status = obj.status
        this.note = obj.note

    }
    
}

export default Report;