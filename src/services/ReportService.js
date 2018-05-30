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

    sendReport(url, data){
        return fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    }

    deleteReport(id){
        return fetch(`http://localhost:3333/api/reports/${id}`, {
            method: 'DELETE',
        })
    }
}

const reportData = new ReportService();

export default reportData;