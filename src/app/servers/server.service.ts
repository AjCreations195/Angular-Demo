import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private servers = [{ id: 1, name: "Us", status: "online" },
  { id: 2, name: "India", status: "offline" },
  { id: 3, name: "london", status: "online" }]
  constructor() { }
  getServers() {
    return this.servers
  }
  getServer(ID: number) {
    // return this.servers.find((x) => x.id == ID)
    const server = this.servers.find(
      (x) => {
        return x.id === ID
      }
    );
    return server;
  }
  updateServer(id: number, serverInfo: { name: string, status: string }) {
    const server = this.servers.find(
      (s) => {
        return s.id === id
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status
    }
  }
}
