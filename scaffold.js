const fs = require('fs');
const readline = require('readline');

const template_generator = require('./templates/index');

const options =
  'C -> Component (Stateful) | c -> Component (Stateless) | P -> Page (with Redux) | p -> Page (without Redux)';

const possibleLetter = [
  'c',
  'C',
  'p',
  'P',
  'component',
  'Component',
  'page',
  'Page',
];

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

function validatePath(path) {
  try {
    if (!fs.existsSync('./src')) {
      fs.mkdirSync('./src');
    }

    if (!fs.existsSync('./src/pages')) {
      fs.mkdirSync('./src/pages');
    }

    if (!fs.existsSync('./src/components')) {
      fs.mkdirSync('./src/components');
    }

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
  } catch (err) {
    console.log('Error on creating folder structure');
  }
}

async function generateFile(path, data, encoding = 'utf-8') {
  const fileCreationCallback = (e) => {
    if (!e) {
      console.log(`${path} criado com sucesso! [encoding: ${encoding}]`);
    } else {
      console.log(`Erro ao criar arquivo: ${path} [encoding: ${encoding}]`);
    }
  };

  await fs.writeFile(path, data, encoding, fileCreationCallback);
}

async function validateType(typeLetter, flag) {
  let letter = typeLetter;

  if (flag) {
    let input;
    do {
      console.log(
        `Invalid type inserted, please select of the options bellow:\n${options}`,
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
    case 'C' || 'Component':
      return 'stateful_component_template';

    case 'c' || 'component':
      return 'stateless_component_template';

    case 'P' || 'Page':
      return 'redux_page_template';

    case 'p' || 'page':
      return 'simple_page_template';
  }
}

function prepareFinalDirectory(type) {
  const possibleDirs = ['./src/pages', './src/components'];

  switch (type) {
    case 'stateful_component_template':
    case 'stateless_component_template':
      return possibleDirs[1];

    case 'redux_page_template':
    case 'simple_page_template':
      return possibleDirs[0];
  }
}

async function run() {
  const params = process.argv.slice(2);
  const paramType = params[0];
  const paramName = params[1];

  const isParamTypeValid = () => {
    return possibleLetter.includes(paramType);
  };

  let NAME = paramName || (await askInput('Please enter the Name:'));
  while (NAME.trim().length < 1) {
    console.log("The Name shouldn't be empty.");
    NAME = await askInput('Please re-enter the Name:');
  }
  NAME = NAME.toLocaleLowerCase();

  let TYPE;
  if (!isParamTypeValid()) {
    const typeLetter = await askInput(`Please enter the type:\n${options}`);
    TYPE = await validateType(typeLetter, false);
  } else {
    TYPE = await validateType(paramType, false);
  }

  const finalDir = prepareFinalDirectory(TYPE);

  /**
   * Here the template is generated;
   * It's just a function call that prepare a lot of
   * strings to be accordingly with what everybody
   * waits from the package.
   */
  const data = template_generator(NAME);

  const FILES = [
    { fileName: `${NAME}.list.jsx`, data: data[TYPE] },
    {
      fileName: `${NAME}.modal.form.jsx`,
      data: data[TYPE],
    },
    { fileName: `${NAME}.info.jsx`, data: data[TYPE] },
  ];

  let isRedux = false;

  switch (TYPE) {
    case 'stateful_component_template':
      console.log('A Stateful Component will be created;');
      break;

    case 'stateless_component_template':
      console.log('A Stateless Component will be created;');
      break;

    case 'redux_page_template':
      console.log('A Page connected to Redux will be created;');
      console.log(
        'Reducer, ActionTypes, ActionCreators and ActionDispatchers will be created too.',
      );
      isRedux = true;
      break;

    case 'simple_page_template':
      console.log('A Simple Page will be created;');
      break;
  }

  const dir = `${finalDir}/${NAME}`;
  FILES.forEach(async (file, index) => {
    validatePath(dir);

    generateFile(`${dir}/${file.fileName}`, file.data);
  });

  if (isRedux) {
    if (!fs.existsSync(`${dir}/redux`)) {
      fs.mkdirSync(`${dir}/redux`);
    }

    generateFile(
      `${dir}/redux/${NAME}.action.types.js`,
      data.redux.action_types_template,
    );

    generateFile(
      `${dir}/redux/${NAME}.action.creators.js`,
      data.redux.action_creators_template,
    );

    generateFile(
      `${dir}/redux/${NAME}.action.dispatchers.js`,
      data.redux.action_dispatchers_template,
    );

    generateFile(`${dir}/redux/${NAME}.reducer.js`, data.redux.reducer);
  }
}

run();
