*project structure:*

app/ *components*
    App.js
    pages/
        HomePage/
            HomePage.js
            Modal.js
            ReportList.js
        SubmitReport/
            SelectCandidate/
                CandidateList.js
                SelectCandidate.js
    	    SelectCompany/
                CompanyList.js
                SelectCompany.js
            FillDetails.js
            ShowSelection.js
            SubmitReport.js
    partials/
        Header.js
        Search.js

entities/  *classes/objects*
    Candidate.js
    Company.js
    Report.js

services/  *services related to entities*
    CandidateService.js
    CompanyService.js
    ReportService.js