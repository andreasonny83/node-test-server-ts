// Copyright (c) 2020 AndreaSonny <andreasonny83@gmail.com> (https://github.com/andreasonny83)
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.SERVER_PORT);
const NODE_ENV = process.env.NODE_ENV;

export const config = {
  PORT,
  NODE_ENV,
};
