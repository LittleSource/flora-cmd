#!/bin/bash
#set -e
echo "🚀发布版本:"$1
echo ""

npm run build

rm -rf release
mkdir release
cp cli.mjs ./release
cp README.md ./release
mv ./dist ./release/

cd release
cat > package.json << EOF
{
	"name": "flora-cmd",
	"version": "$1",
	"description": "flora快捷命令工具",
	"license": "MIT",
	"main": "cli.mjs",
	"bin": {
		"f": "cli.mjs"
	},
	"dependencies": {
		"@temir/core": "0.0.20"
	}
}
EOF
npm publish