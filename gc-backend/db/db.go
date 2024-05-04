package db

import "GongCounter/gc-backend/models"

var counters = []models.Counter{
	{ID: "counter-001", Value: 10},
	{ID: "counter-002", Value: 20},
	{ID: "counter-003", Value: 24},
}

func GetAllCounters() []models.Counter {
	return counters
}
