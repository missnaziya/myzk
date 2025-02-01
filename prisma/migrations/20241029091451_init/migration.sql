/*
  Warnings:

  - A unique constraint covering the columns `[displayName]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `displayName` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alternateImage1` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alternateImage2` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alternateImage3` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alternateImage4` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `displayName` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `product` ADD COLUMN `alternateImage1` VARCHAR(191) NOT NULL,
    ADD COLUMN `alternateImage2` VARCHAR(191) NOT NULL,
    ADD COLUMN `alternateImage3` VARCHAR(191) NOT NULL,
    ADD COLUMN `alternateImage4` VARCHAR(191) NOT NULL,
    ADD COLUMN `warrantyDuration` INTEGER NULL,
    MODIFY `description` VARCHAR(1500) NOT NULL;

-- CreateTable
CREATE TABLE `SupportTicket` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `orderNumber` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Warranty` (
    `id` VARCHAR(191) NOT NULL,
    `customerOrderId` VARCHAR(191) NOT NULL,
    `productId` VARCHAR(191) NOT NULL,
    `issuedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `expiresAt` DATETIME(3) NOT NULL,

    INDEX `Warranty_customerOrderId_fkey`(`customerOrderId`),
    INDEX `Warranty_productId_fkey`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contact` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `subject` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Category_displayName_key` ON `Category`(`displayName`);

-- AddForeignKey
ALTER TABLE `Warranty` ADD CONSTRAINT `Warranty_customerOrderId_fkey` FOREIGN KEY (`customerOrderId`) REFERENCES `Customer_order`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Warranty` ADD CONSTRAINT `Warranty_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
