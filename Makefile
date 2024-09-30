install: # установить зависимости
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

cli:
	node src/cli.js

publish:
	npm publish --dry-run

lint:
	npx eslint .