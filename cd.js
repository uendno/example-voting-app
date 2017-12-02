const cd = require('/Users/uendno/Sourcecode/cdjs-runner');

cd.stages([
    cd.stage('Build', () => {   
        return cd.exec(cd.shell('docker-compose build'))
    }),

    cd.stage('Deploy', () => {
        return cd.exec(cd.shell('docker-compose up -d'))
    })
])
