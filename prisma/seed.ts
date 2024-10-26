import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const spacingSeed: Prisma.SpacingCreateInput[] = [
  { name: "mt", type: "margin" },
  { name: "mb", type: "margin" },
  { name: "mr", type: "margin" },
  { name: "ml", type: "margin" },
  { name: "pt", type: "padding" },
  { name: "pb", type: "padding" },
  { name: "pr", type: "padding" },
  { name: "pl", type: "padding" },
];
async function main() {
  console.log("Start seeding...");

  for (let item of spacingSeed) {
    await prisma.spacing.create({
      data: item,
    });
  }
  console.log("Seeding finished");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
