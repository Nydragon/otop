import { faker } from "@faker-js/faker";

import { Process } from "../types";

export const generateProcess = (): Process => {

  return {
    name: faker.lorem.word(),
    pid: faker.number.int(),
    user: faker.internet.userName(),
    priority: faker.number.int() % 100,
    nice: faker.number.int({ min: -20, max: 20 }),
    virt: faker.number.int(),
    resident: faker.number.int(),
    share: faker.number.int(),
    cpu: faker.number.int() % 100,
    mem: faker.number.int() % 100,
    time: faker.date.recent().getTime(),
    command: faker.lorem.word(),
  };
};