npm i
npm start


# Deploy
npm run build

Commit and push the changes on main

git checkout gh-pages

git reset --hard origin/main

// (ON GH-PAGES ONLY)
git push -f 

node ./gh-pages.js

git checkout main