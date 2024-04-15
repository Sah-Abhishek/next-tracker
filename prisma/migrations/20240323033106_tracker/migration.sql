-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "topic" TEXT NOT NULL,
    "timeFrom" TEXT NOT NULL,
    "timeTo" TEXT NOT NULL,
    "subTopic" TEXT NOT NULL,
    "hoursStudied" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
