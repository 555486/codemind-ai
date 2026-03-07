Invoke-WebRequest -Uri http://localhost:5000/health -UseBasicParsing | Select-Object -ExpandProperty Content
