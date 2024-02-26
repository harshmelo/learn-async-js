#! /opt/homebrew/bin/node
const http = require('http');

const hostname = 'localhost';
const port = 8000;

const incidents = [
    {
        id: "MABOS001",
        date: "20170617",
        time: "1437",
        road_id: "A90",
        place: "Stonehaven",
        direction: "north",
        description: "Broken-down T on north and park station."
    },
    {
        id: "MABOS002",
        date: "20221217",
        time: "0937",
        road_id: "A90",
        place: "Stonehaven",
        direction: "north",
        description: "Car in West Village broken down."
    }
];

const server = http.createServer((req, res) => {
    const requestURL = new URL(req.url, `http://${req.headers.host}`);
    const pathname = requestURL.pathname;

    // Simplified endpoint check to directly match the incidents list
    if (pathname.startsWith('/incidents/')) {
        const incidentId = pathname.split('/')[2]; // Assuming the URL format is /incidents/{id}

        const filteredIncidents = incidents.filter(incident => incident.id === incidentId);

        if (filteredIncidents.length) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(filteredIncidents));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Incident not found');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Endpoint not found');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
