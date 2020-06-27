#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const argv = require("yargs").argv;

const lang = argv.lang || "en";

const options = {
  padding: 1,
  margin: 2,
  borderStyle: "double",
  borderColor: "#039eff",
};

const data = {
  logo: chalk.blue.bgWhite.bold(`                
  devfelizardo  
                `),
  name: chalk.white(" André Felizardo /"),
  mail: {
    en: chalk.hex("##039eff")("contato@andrefelizardo.com.br"),
    pt: chalk.hex("##039eff")("contato@andrefelizardo.com.br"),
  },
  pronoun: {
    en: chalk.white("(he/him/his)"),
    pt: chalk.white("(ele/dele)"),
  },
  work: {
    en: chalk.white("Web Engineer @ Accenture Interactive"),
    pt: chalk.white("Web Engineer / Accenture Interactive"),
  },
  twitter: chalk.hex("##039eff")("https://twitter.com/devfelizardo"),
  github: chalk.hex("##039eff")("https://github.com/andrefelizardo"),
  youtube: chalk.hex("##039eff")("https:/youtube.com/andrefelizardo"),
  instagram: chalk.hex("##039eff")("https://instagram.com/devfelizardo"),
  picpay: chalk.hex("##039eff")("https://picpay.me/andrefelizardo"),
  web: chalk.hex("##039eff")("https://andrefelizardo.com.br"),
  npx: chalk.white("npx felizardo"),
};

const defaultLabel = {
  en: {
    work: chalk.white.bold("      Work:"),
    twitter: chalk.white.bold("   Twitter:"),
    github: chalk.white.bold("    GitHub:"),
    youtube: chalk.white.bold("    YouTube:"),
    instagram: chalk.white.bold("    Instagram:"),
    picpay: chalk.white.bold("    PicPay:"),
    web: chalk.white.bold("       Web:"),
    npx: chalk.white.bold("      Card:"),
  },
};

const label = {
  ...defaultLabel,
  pt: {
    ...defaultLabel.en,
    work: chalk.white.bold("  Trabalho:"),
    npx: chalk.white.bold("    Cartão:"),
  },
};

const output = `${data.logo}

${data.name} ${data.mail[lang]} ${data.pronoun[lang]}


   ${label[lang].work}    ${data.work[lang]}

   ${label[lang].web}    ${data.web}

   ${label[lang].twitter}    ${data.twitter}
   ${label[lang].github}    ${data.github}
  ${label[lang].youtube}    ${data.youtube}
${label[lang].instagram}    ${data.instagram}

   ${label[lang].npx}    ${data.npx}`;

console.clear();
console.log(`
`);
console.log(chalk.blue(boxen(output, options)));
