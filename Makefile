.PHONY: default
default: all

.PHONY: all
all: init update gosd build

.PHONY: preview
preview:
	npm run preview

.PHONY: init
init:
	git submodule update --init --recursive

.PHONY: update
update:
	git submodule foreach git pull origin master

.PHONY: gosd
gosd:
	#cp -r gosd/docs/ public/gosd
	cp gosd/docs/lua.md public/gosd_lua.md
	cp gosd/docs/mqtt.md public/gosd_mqtt.md

.PHONY: build
build:
	node index.js

.PHONY: clean
clean:
	rm -r public

