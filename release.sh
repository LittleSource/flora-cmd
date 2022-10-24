#!/bin/bash
echo "🚀发布版本:"$1
echo ""
rm -rf release
mkdir release
temir build src/main.ts
cp cli.mjs ./release
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
	}
}
EOF
npm publish