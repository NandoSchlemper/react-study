package db

import (
	"fmt"

	"gorm.io/gorm"
)

type Database struct {
	DBUrl string
}

func NewDatabase(url string) *Database {
	return &Database{
		DBUrl: url,
	}
}

func Migrate(database *gorm.DB) error {
	err := database.AutoMigrate() // migrar o DB
	if err != nil {
		return fmt.Errorf("%s", err.Error())
	}
	return nil
}
