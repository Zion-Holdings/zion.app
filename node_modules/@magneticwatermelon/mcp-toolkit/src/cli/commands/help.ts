export function showHelp() {
  console.log(`
mcp-toolkit - CLI tool for creating and managing MCP projects

Usage:
  mcp-toolkit <command> [options]

Commands:
  create <project-name>       Create a new MCP project
  add-tool <tool-name>        Add a new tool to the current project
  add-resource <resource-name> Add a new resource to the current project
  add-prompt <prompt-name>    Add a new prompt to the current project  
  build                       Build the current project
  deploy [target]             Deploy the project using Docker (default: docker-compose)
  env <command>               Manage environment variables and secrets

Options:
  -h, --help                  Show this help message
  -v, --version               Show version information

Create Command Options:
  --stdio                     Use stdio transport instead of http-stream
  --cors                      Enable CORS for HTTP transport
  --port <number>             Specify port for HTTP transport (default: 8080)
  --no-install                Skip dependency installation
  --no-example                Skip creating example files

Deploy Command Options:
  --target <type>             Deployment target (docker|docker-compose)
  --no-build                  Skip building the Docker image
  --no-detach                 Run in foreground instead of background
  --port <number>             Override port for Docker deployment
  --env <environment>         Set environment (development|production)

Env Command Options:
  --description <text>        Secret description
  --type <type>               Secret type (string|number|boolean|url|api_key)
  --required <bool>           Whether secret is required (true|false)
  --default <value>           Default value for the secret
  --env <name>                Environment name for generate command

Examples:
  mcp-toolkit create my-mcp-project
  mcp-toolkit create my-mcp-project --port 3000
  mcp-toolkit create my-mcp-project --cors
  mcp-toolkit create my-mcp-project --stdio
  mcp-toolkit create my-mcp-project --no-install --no-example
  mcp-toolkit add-tool file-reader
  mcp-toolkit add-resource database-connection
  mcp-toolkit add-prompt my-prompt
  mcp-toolkit build
  mcp-toolkit deploy
  mcp-toolkit deploy docker
  mcp-toolkit deploy docker-compose --no-detach
  mcp-toolkit deploy docker --port 3000 --env production
  mcp-toolkit env init
  mcp-toolkit env add API_KEY
  mcp-toolkit env list
  mcp-toolkit env generate
`);
}
