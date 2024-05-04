package main

import (
	"GongCounter/gc-backend/handlers"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	corsConfig := cors.DefaultConfig()

	corsConfig.AllowOrigins = []string{
		"http://localhost:4200",
	}

	router.Use(cors.New(corsConfig))

	router.GET("/counters", handlers.GetCounters)

	router.Run(":8000")
}
