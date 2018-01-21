const cd = require('/Users/uendno/Sourcecode/cdjs-runner');

cd.stages([
    cd.stage('Build', () => {
        return cd.exec(cd.upload('./**/*.yml'))
    }),
]);
