import Report from '../entities/Report'

class ReportService {

    allReportsData() {
        
        return fetch('http://localhost:3333/api/reports')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('SOMETHING WENT WRONG :(');
                }
            })
            .then((response) => {
                return response.map((el) => new Report(el))
            })
    }
}

const reportData = new ReportService();

export default reportData;