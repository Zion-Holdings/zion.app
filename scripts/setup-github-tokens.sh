#!/bin/bash

# GitHub Token Setup Script
# This script helps you set up GitHub tokens for workflow testing

set -e

echo "🔑 GitHub Token Setup for Workflow Testing"
echo "=========================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to check if token is already set
check_existing_token() {
    if [ -n "$GH_TOKEN" ] || [ -n "$GITHUB_TOKEN" ] || [ -n "$GH_PAT" ] || [ -n "$GITHUB_PAT" ]; then
        echo -e "${GREEN}✅ GitHub token already found!${NC}"
        echo ""
        echo "Current tokens:"
        if [ -n "$GH_TOKEN" ]; then
            echo "  GH_TOKEN: ${GH_TOKEN:0:8}..."
        fi
        if [ -n "$GITHUB_TOKEN" ]; then
            echo "  GITHUB_TOKEN: ${GITHUB_TOKEN:0:8}..."
        fi
        if [ -n "$GH_PAT" ]; then
            echo "  GH_PAT: ${GH_PAT:0:8}..."
        fi
        if [ -n "$GITHUB_PAT" ]; then
            echo "  GITHUB_PAT: ${GITHUB_PAT:0:8}..."
        fi
        echo ""
        return 0
    else
        return 1
    fi
}

# Function to create token instructions
show_token_instructions() {
    echo -e "${BLUE}📋 How to Create a GitHub Personal Access Token:${NC}"
    echo ""
    echo "1. Go to GitHub Settings:"
    echo "   https://github.com/settings/tokens"
    echo ""
    echo "2. Click 'Generate new token (classic)'"
    echo ""
    echo "3. Configure the token:"
    echo "   - Note: 'Workflow Testing Token'"
    echo "   - Expiration: Choose appropriate duration"
    echo "   - Scopes: Select the following:"
    echo "     ✅ repo (Full control of private repositories)"
    echo "     ✅ workflow (Update GitHub Action workflows)"
    echo ""
    echo "4. Click 'Generate token'"
    echo ""
    echo "5. Copy the token (you won't see it again!)"
    echo ""
}

# Function to set token in current session
set_token_session() {
    echo -e "${YELLOW}🔧 Setting token for current session...${NC}"
    echo ""
    
    read -p "Enter your GitHub Personal Access Token: " -s token
    echo ""
    
    if [ -z "$token" ]; then
        echo -e "${RED}❌ No token provided${NC}"
        return 1
    fi
    
    # Set environment variables
    export GH_TOKEN="$token"
    export GITHUB_TOKEN="$token"
    
    echo -e "${GREEN}✅ Token set for current session${NC}"
    echo ""
    echo "You can now test workflows with:"
    echo "  node scripts/trigger-workflows.cjs --list"
    echo ""
    
    return 0
}

# Function to set token permanently
set_token_permanent() {
    echo -e "${YELLOW}🔧 Setting token permanently...${NC}"
    echo ""
    
    read -p "Enter your GitHub Personal Access Token: " -s token
    echo ""
    
    if [ -z "$token" ]; then
        echo -e "${RED}❌ No token provided${NC}"
        return 1
    fi
    
    # Determine shell profile
    local profile_file=""
    if [ -f "$HOME/.bashrc" ]; then
        profile_file="$HOME/.bashrc"
    elif [ -f "$HOME/.zshrc" ]; then
        profile_file="$HOME/.zshrc"
    elif [ -f "$HOME/.profile" ]; then
        profile_file="$HOME/.profile"
    else
        echo -e "${RED}❌ Could not find shell profile file${NC}"
        return 1
    fi
    
    # Add token to profile
    echo "" >> "$profile_file"
    echo "# GitHub token for workflow testing" >> "$profile_file"
    echo "export GH_TOKEN='$token'" >> "$profile_file"
    echo "export GITHUB_TOKEN='$token'" >> "$profile_file"
    
    echo -e "${GREEN}✅ Token added to $profile_file${NC}"
    echo ""
    echo "To activate in current session, run:"
    echo "  source $profile_file"
    echo ""
    echo "Or restart your terminal"
    
    return 0
}

# Function to create .env file
create_env_file() {
    echo -e "${YELLOW}🔧 Creating .env file...${NC}"
    echo ""
    
    read -p "Enter your GitHub Personal Access Token: " -s token
    echo ""
    
    if [ -z "$token" ]; then
        echo -e "${RED}❌ No token provided${NC}"
        return 1
    fi
    
    # Create .env file
    cat > .env << EOF
# GitHub token for workflow testing
GH_TOKEN=$token
GITHUB_TOKEN=$token
EOF
    
    echo -e "${GREEN}✅ Created .env file${NC}"
    echo ""
    echo "To use this file, you'll need to source it:"
    echo "  source .env"
    echo ""
    echo "Or add to your shell profile:"
    echo "  echo 'source .env' >> ~/.bashrc"
    
    return 0
}

# Function to test token
test_token() {
    echo -e "${YELLOW}🧪 Testing GitHub token...${NC}"
    echo ""
    
    if [ -z "$GH_TOKEN" ] && [ -z "$GITHUB_TOKEN" ] && [ -z "$GH_PAT" ] && [ -z "$GITHUB_PAT" ]; then
        echo -e "${RED}❌ No token found to test${NC}"
        return 1
    fi
    
    echo "Testing token by listing workflows..."
    
    if node scripts/trigger-workflows.cjs --list >/dev/null 2>&1; then
        echo -e "${GREEN}✅ Token is working!${NC}"
        echo ""
        echo "You can now test workflows:"
        echo "  node scripts/trigger-workflows.cjs --only 'ci.yml' --ref main"
        echo ""
        return 0
    else
        echo -e "${RED}❌ Token test failed${NC}"
        echo ""
        echo "Possible issues:"
        echo "  - Token has insufficient permissions"
        echo "  - Token has expired"
        echo "  - Repository access issues"
        echo ""
        return 1
    fi
}

# Function to show current status
show_status() {
    echo -e "${BLUE}📊 Current Token Status:${NC}"
    echo ""
    
    if check_existing_token; then
        echo ""
        echo "Token is ready for workflow testing!"
        echo ""
        echo "Available commands:"
        echo "  node scripts/trigger-workflows.cjs --list"
        echo "  node scripts/trigger-workflows.cjs --only 'ci.yml' --ref main"
        echo "  ./scripts/test-workflows-local.sh comprehensive"
        echo ""
    else
        echo -e "${RED}❌ No GitHub token found${NC}"
        echo ""
        echo "You need to set up a token to test workflows remotely."
        echo "Run this script again to set up tokens."
        echo ""
    fi
}

# Main menu
main_menu() {
    echo "Choose an option:"
    echo ""
    echo "1. Show token creation instructions"
    echo "2. Set token for current session only"
    echo "3. Set token permanently (add to shell profile)"
    echo "4. Create .env file"
    echo "5. Test current token"
    echo "6. Show current status"
    echo "7. Exit"
    echo ""
    
    read -p "Enter your choice (1-7): " choice
    
    case $choice in
        1)
            show_token_instructions
            ;;
        2)
            set_token_session
            ;;
        3)
            set_token_permanent
            ;;
        4)
            create_env_file
            ;;
        5)
            test_token
            ;;
        6)
            show_status
            ;;
        7)
            echo "Goodbye!"
            exit 0
            ;;
        *)
            echo -e "${RED}❌ Invalid choice${NC}"
            ;;
    esac
    
    echo ""
    read -p "Press Enter to continue..."
    echo ""
    main_menu
}

# Check if token already exists
if check_existing_token; then
    echo "You're all set to test workflows!"
    echo ""
    echo "Would you like to:"
    echo "1. Test the current token"
    echo "2. Show current status"
    echo "3. Set up a different token"
    echo "4. Exit"
    echo ""
    
    read -p "Enter your choice (1-4): " choice
    
    case $choice in
        1)
            test_token
            ;;
        2)
            show_status
            ;;
        3)
            echo ""
            main_menu
            ;;
        4)
            echo "Goodbye!"
            exit 0
            ;;
        *)
            echo -e "${RED}❌ Invalid choice${NC}"
            exit 1
            ;;
    esac
else
    echo "No GitHub token found. Let's set one up!"
    echo ""
    main_menu
fi