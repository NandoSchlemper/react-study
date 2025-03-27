package main

import (
	"net/http"
	"soyfueda/api"
)

func main() {
	server := http.NewServeMux()
	mux := api.NewHttpServer(server, "3030")
	mux.CreateConnections()
	mux.Run()
}
