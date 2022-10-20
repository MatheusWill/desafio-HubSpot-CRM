import {
  formateCamelCaseKeysForSnakeCase,
  formateSnakeCaseKeysForCamelCase,
  formateToLowerCase,
} from "@badass-team-code/formatted-cases-words";

export const convertSnakeCaseKeysToCamelCase = formateSnakeCaseKeysForCamelCase;
export const convertCamelCaseKeysToSnakeCase = formateCamelCaseKeysForSnakeCase;
export const convertToLowerCase = formateToLowerCase;

export const headerListTransaction = [
  {
    name: "Nome da empresa",
    key: "company",
  },
  {
    name: "Nome completo",
    key: "firstname",
  },
  {
    name: "Email",
    key: "email",
  },
  {
    name: "Telefone",
    key: "phone",
  },
  {
    name: "Website",
    key: "website",
  },
];
