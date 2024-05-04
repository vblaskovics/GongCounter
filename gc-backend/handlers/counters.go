package handlers

import (
	"GongCounter/gc-backend/db"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetCounters(c *gin.Context) {
	c.JSON(http.StatusOK, db.GetAllCounters())
}
