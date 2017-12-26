(function () {
  'use strict';
  angular.module('employment')
  .service('employmentService', service);

  service.$inject = [];
  function service () {
  	const service = this;
  	const jobListings = [
  	{
  		position: 'Administrative Director',
  		description: ` The Administrative Director is responsible for the strategic planning process,
  		 research administration and grant management activities, financial performance, 
  		human resources development, training programs, and facilities planning and management for the division. 
  		This position reports to the President and to the executive administrator;`,
  		requirements: [
  			'5-7 years administrative/management experience required',
			'Supervisory experience required.',
			'Strong Communication and analytical skills'
  		]
  	}, {
  		position: 'Marketing & Media Director',
  		description: `Champion brand advertising through all channels - outdoor, mass media, and online. 
  			Work with agency to develop and produce new creative. Evaluate media strategy in each market. 
  			Continually scrutinize and test second tier delivery vehicles.`,
  		requirements: [
  			`3 years plus experience in an agency or a consumer marketing company.`,
  			`Creative, organized, hardworking.`,
  			`Strong analytical ability. Working SEO/SEM/Social knowledge.`
  		]
  	}, {
  		position: 'Backend Developer',
  		description: `Working on Servers and API\'s using Node.js. 
  			In this role you will focus on Server Side Web Application Development, 
  			Web service architecture, documentation, code reviews and pair programming.`,
  		requirements: [
  			`3+ years of relevant Experience`,
			`Experienced with Node.JS & Express`,
			`Unit Testing experience with Mocha/Chai, NPM OR PostGreSql`,
			`Experience building & Architecting RESTful Web Services & API's`,
			`Documenting and designing API's with OpenApi & Swagger`,
			`Git source Control via command line`
  		]
  	}, {
  		position: 'Staff Accountant',
  		description: `Provides administrative support to the Finance department. 
  			Maintains and updates Accounting/Finance records ensuring timeliness and accuracy. 
  			Responsible for assisting in a key capacity with month-end close, account reconciliations, 
  			monthly business review package, forecasts and budgets, expense management and other analytical tasks.`,
  		requirements: [
  			`1-2 Years of experience required`,
  			`Demonstrated understanding of accounting concepts and theories used in the business environment.`,
			`Proven verbal and written communication skills with the ability to communicate effectively to various 
			levels within the organization as well as to external customers and vendors.`,
			`Strong Microsoft Office and overall computer proficient with Excel.`,
			`Strong problem solving and trouble shooting skills.`
  		]
  	}];

    jobListings.forEach((position) => {
        position.showContent = false;
        position.toggleContentVisibility = function () {
          this.showContent = !this.showContent;
        }
    });

  	service.getJobListings = () => {
  		return [];
  	}
  }
})();