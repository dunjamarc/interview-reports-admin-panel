import Company from '../entities/Company'

class CompanyService {

    allCompaniesData() {
        
        return fetch('http://localhost:3333/api/companies')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then((response) => {
                return response.map((el) => new Company(el))
            })
    }
}

const companyData = new CompanyService();

export default companyData;