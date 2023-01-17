.PHONY: default
default: all

.PHONY: all
all: init update gosd build

.PHONY: preview
preview:
	python3 -m http.server 8888

.PHONY: init
init:
	git submodule update --init --recursive

.PHONY: update
update:
	git submodule foreach git pull origin master

.PHONY: gosd
gosd:
	cp gosd/docs/lua.md gosd_lua.md
	cp gosd/docs/mqtt.md gosd_mqtt.md

.PHONY: build
build:
	node index.js

.PHONY: clean
clean:
	rm -r assets/npm

