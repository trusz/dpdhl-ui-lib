help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## Builds the library and Storybook
	@yarn build:sb

run: ## Start storybook
	@yarn dev

install: ## Install all dependencies
	@yarn install
	@yarn --cwd ./uilib install

publish: ## Publish the library
	cd ./uilib && make publish