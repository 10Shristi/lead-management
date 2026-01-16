
import mongoose from "mongoose";
import dotenv from "dotenv";
import { faker } from "@faker-js/faker";
import Lead from "./models/Lead.js";

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

const stages = ["New", "Contacted", "Qualified", "Converted"];

const leads = Array.from({ length: 300 }).map(() => ({
  name: faker.person.fullName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  company: faker.company.name(),
  stage: faker.helpers.arrayElement(stages),
  source: faker.internet.domainName()
}));

await Lead.insertMany(leads);
console.log("Leads seeded");
process.exit();
