-- CreateTable
CREATE TABLE `ShippingDetails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `product` VARCHAR(191) NOT NULL,
    `sourceCity` VARCHAR(191) NOT NULL,
    `destinationPincode` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `destinationRegion` VARCHAR(191) NOT NULL,
    `zone` VARCHAR(191) NOT NULL,
    `tat` INTEGER NOT NULL,
    `prepaid` BOOLEAN NOT NULL,
    `cod` BOOLEAN NOT NULL,
    `reversePickup` BOOLEAN NOT NULL,
    `forwardPickup` BOOLEAN NOT NULL,
    `destinationCategory` VARCHAR(191) NOT NULL,
    `pudoServiceable` BOOLEAN NOT NULL,
    `b2cCodServiceable` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
