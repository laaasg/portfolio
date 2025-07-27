from http.server import HTTPServer, SimpleHTTPRequestHandler

class HtmlSimpleHTTPRequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.path = 'index.html'
        elif "." not in self.path.split('/')[-1]:
            self.path = f'{self.path}.html'
        super().do_GET()

try:
    port = 8000
    httpd = HTTPServer(('', port), HtmlSimpleHTTPRequestHandler)
    print(f"serving at http://localhost:{port}")
    httpd.serve_forever()
except KeyboardInterrupt:
    pass
