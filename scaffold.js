const fs = require('fs');
const readline = require('readline');
const template_generator = require('./templates/index');

function askInput(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(`${query}\n> `, (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
}

function generateFile(path, data, encoding = 'utf-8') {
  const fileCreationCallback = (e) => {
    console.log('Arquivos criados com sucesso');
  };

  fs.writeFile(path, data, encoding, fileCreationCallback);
}

async function validateType(typeLetter, flag) {
  let letter = typeLetter;
  const possibleLetter = ['c', 'C', 'p', 'P'];

  if (flag) {
    let input;
    do {
      console.log(
        'Invalid type inserted, please select of the options bellow:\nC -> Stateful Component; c -> Stateless Component ; P -> Page (with Redux); p -> Page (without Redux)',
      );
      input = await askInput('Please enter the Type:');
      letter = input;
    } while (
      input.trim().length === 0 ||
      (input != 'P' || input != 'p' || input != 'c' || input != 'C')
    );
  }

  if (!possibleLetter.includes(letter)) {
    return await validateType(letter, true);
  }

  switch (letter) {
    case 'C':
      return 'stateful_component_template';

    case 'c':
      return 'stateless_component_template';

    case 'P':
      return 'redux_page_template';

    case 'p':
      return 'simple_page_template';
  }
}

async function run() {
  const parentDir = '.';

  let NAME = await askInput('Please enter the Name:');
  while (NAME.trim().length < 1) {
    console.log("The Name shouldn't be empty.");
    NAME = await askInput('Please re-enter the Name:');
  }

  const FILES = [
    { fileName: `${NAME.toLocaleLowerCase()}.list.jsx`, data: data[TYPE] },
    `${NAME.toLocaleLowerCase()}.modal.form.jsx`,
    `${NAME.toLocaleLowerCase()}s.jsx`,
    `${NAME.toLocaleLowerCase()}.info.jsx`,
  ];

  const typeLetter = await askInput(
    'Please enter the type:\nC -> Stateful Component; c -> Stateless Component ; P -> Page (with Redux); p -> Page (without Redux)',
  );

  let TYPE = await validateType(typeLetter, false);

  const data = template_generator(NAME);

  FILES.forEach((file, index) => {
    if (index === 0) {
      generateFile(`${parentDir}/${file.fileName}`, file.data);
    } else {
      generateFile(`${parentDir}/${file.fileName}`, file.data);
    }
  });
}

run();
