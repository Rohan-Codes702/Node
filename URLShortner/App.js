import { readFile } from "fs/promises";
import { createServer } from "http";
import path from "path";

const port = 3002;

const server = createServer(async (req, res) => {
    console.log(req.url);

    if (req.method === "GET") {
        try {
            if (req.url === "/") {
                const data = await readFile(path.join("public", "index.html"));
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            } else if (req.url === "/style.css") {
                const data = await readFile(path.join("public", "style.css"));
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(data);
            } else {
                res.writeHead(404, { "Content-Type": "text/html" });
                res.end("404 Page not found");
            }
        } catch (error) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("404 Page not found");
        }
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
