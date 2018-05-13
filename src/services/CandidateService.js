import Candidate from '../entities/Candidate'

class CandidateService {

    allCandidatesData() {
        
        return fetch('http://localhost:3333/api/candidates')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then((response) => {
                return response.map((el) => new Candidate(el))
            })
    }
}

const candidateData = new CandidateService();

export default candidateData;