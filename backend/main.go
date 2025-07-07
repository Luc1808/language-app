package main

import (
	"github.com/Luc1808/language-app/utils"
	"github.com/gin-gonic/gin"
)

func main() {
	utils.InitDB()
	r := gin.Default()

	r.Run(":8080")

}
