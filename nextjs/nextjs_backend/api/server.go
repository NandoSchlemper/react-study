package api

import (
	"fmt"
	"net/http"
	"soyfueda/api/requests"
)

type HttpServer struct {
	srv  *http.ServeMux
	port string
}

func NewHttpServer(
	srv *http.ServeMux,
	port string,
) *HttpServer {
	return &HttpServer{
		srv:  srv,
		port: port,
	}
}

func (h *HttpServer) CreateConnections() {
	h.srv.HandleFunc("/api/user/register", requests.CreateUserProfile)
}

func (h *HttpServer) Run() {
	fmt.Printf("Server is running on port %s\n", h.port)
	if err := http.ListenAndServe(":"+h.port, h.srv); err != nil {
		fmt.Printf("Failed to start server: %v\n", err)
	}
}
