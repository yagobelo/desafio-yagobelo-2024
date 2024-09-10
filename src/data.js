export const recintos = [
  {
    numero: 1,
    bioma: "savana",
    tamanhoTotal: 10,
    animaisExistentes: [{ especie: "MACACO", qtd: 3 }],
  },
  {
    numero: 2,
    bioma: "floresta",
    tamanhoTotal: 5,
    animaisExistentes: [],
  },
  {
    numero: 3,
    bioma: "savana e rio",
    tamanhoTotal: 7,
    animaisExistentes: [{ especie: "GAZELA", qtd: 1 }],
  },
  {
    numero: 4,
    bioma: "rio",
    tamanhoTotal: 8,
    animaisExistentes: [],
  },
  {
    numero: 5,
    bioma: "savana",
    tamanhoTotal: 9,
    animaisExistentes: [{ especie: "LEAO", qtd: 1 }],
  },
];

export const animais = [
  {
    especie: "LEAO",
    tamanho: 3,
    bioma: "savana",
  },
  {
    especie: "LEOPARDO",
    tamanho: 2,
    bioma: "savana",
  },
  {
    especie: "CROCODILO",
    tamanho: 3,
    bioma: "rio",
  },
  {
    especie: "MACACO",
    tamanho: 1,
    bioma: "savana" || "floresta",
  },
  {
    especie: "GAZELA",
    tamanho: 2,
    bioma: "savana",
  },
  {
    especie: "HIPOPOTAMO",
    tamanho: 4,
    bioma: "savana" || "rio",
  },
];
