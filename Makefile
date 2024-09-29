install: # установить зависимости
	npm ci

brain-games:
	node bin/brain-games.js

cli:
	node src/cli.js

publish:
	npm publish --dry-run