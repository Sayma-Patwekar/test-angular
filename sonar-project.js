const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://localhost:9000 ',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'test1',
	    'sonar.projectKey':'test1',
	    //'sonar.login': 'squ_c33d0dae411ad2a52d4a556b64714c5cef790fb3',
	    'sonar.login': 'admin',
	    'sonar.password': 'sonarqube',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
