var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/cbonaudo/Gojimber.git',
        user: {
            name: 'cbonaudo',
            email: 'cbonaudo@hotmail.fr',
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)