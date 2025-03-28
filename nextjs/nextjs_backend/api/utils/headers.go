package utils

import "net/http"

func WrapperHeader(w *http.ResponseWriter) {
	(*w).Header().Set("Acess-Control-Allow-Origin", "*")
	(*w).Header().Set("Content-Type", "application/json")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")
}
