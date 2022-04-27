# mongodb-test

These are the cmd-line installs required:

npm init -y
npm i yargs
npm i dotenv
npm i mongodb

command line:
node src/app.js --list
node src/app.js --add --title="Star Wars" --actor="Chewy"
node src/app.js --delete --title="Star Wars" --actor="Chewy"
node src/app.js --update --title="Star Wars" --actor="Chewy" --title="Raiders" --actor="Indie"
